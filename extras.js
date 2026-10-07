// =============================================================================
// SPORT IQ - Notificaciones (todas las páginas), Configuración y AI Assistant
// Solo frontend: datos de ejemplo en memoria.
// =============================================================================
(() => {
  const esc = (t) => String(t).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  function toast(msg) {
    let t = document.getElementById("toast");
    if (!t) { t = document.createElement("div"); t.id = "toast"; t.className = "toast"; t.setAttribute("role", "status"); document.body.appendChild(t); }
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(t._h);
    t._h = setTimeout(() => t.classList.remove("show"), 2500);
  }

  // ---------- NAVBAR + NOTIFICACIONES ----------
  const notifs = [
    { id: 1, icon: "🏀", text: "<b>Celtics vs Heat</b> empieza en 30 minutos.", time: "Hace 5 min", unread: true },
    { id: 2, icon: "🤖", text: "StatsBot ha detectado una apuesta de valor: <b>Tatum Over 3.5 AST</b> (@ 2.10).", time: "Hace 20 min", unread: true },
    { id: 3, icon: "⚠️", text: "Lesión: <b>Jimmy Butler</b> es duda para esta noche.", time: "Hace 1 h", unread: true },
    { id: 4, icon: "💰", text: "Tu cupón ha sido <b>ganador</b>: +24,50 €.", time: "Ayer", unread: false },
    { id: 5, icon: "📊", text: "Has usado el 64% de tus consultas de IA de hoy.", time: "Ayer", unread: false }
  ];

  function initNavbar() {
    const links = { "IA ASSISTANT": "asistente.html", "PARTIDOS": "Index.html" };
    document.querySelectorAll(".nav-link").forEach(a => { if (links[a.textContent.trim()]) a.href = links[a.textContent.trim()]; });

    const gear = document.querySelector('.icon-button[title="Ajustes"]');
    if (gear) gear.addEventListener("click", () => location.href = "configuracion.html");

    const bell = document.querySelector('.icon-button[title="Notificaciones"]');
    if (!bell) return;
    const wrap = document.createElement("div");
    wrap.className = "notif-wrap";
    bell.parentNode.insertBefore(wrap, bell);
    wrap.appendChild(bell);
    wrap.insertAdjacentHTML("beforeend", `
      <span class="notif-badge" id="notif-badge"></span>
      <div class="notif-panel" id="notif-panel" hidden>
        <div class="notif-head"><h4>Notificaciones</h4><button class="notif-link" id="notif-all" type="button">Marcar todas como leídas</button></div>
        <div class="notif-list" id="notif-list"></div>
        <div class="notif-foot"><a class="notif-link" href="configuracion.html#notificaciones">Ajustes de notificaciones</a></div>
      </div>`);
    const panel = wrap.querySelector("#notif-panel");
    bell.setAttribute("aria-haspopup", "true");
    bell.setAttribute("aria-expanded", "false");

    function render() {
      const n = notifs.filter(x => x.unread).length;
      const badge = wrap.querySelector("#notif-badge");
      badge.textContent = n; badge.hidden = n === 0;
      wrap.querySelector("#notif-list").innerHTML = notifs.length ? notifs.map(x => `
        <button class="notif-item ${x.unread ? "unread" : ""}" data-id="${x.id}" type="button">
          <span class="notif-icon">${x.icon}</span>
          <span class="notif-text">${x.text}<span class="notif-time">${x.time}</span></span>
          <span class="notif-dot"></span>
        </button>`).join("") : '<p class="notif-empty">No tienes notificaciones.</p>';
    }
    const setOpen = (open) => { panel.hidden = !open; bell.setAttribute("aria-expanded", open); };

    bell.addEventListener("click", (e) => { e.stopPropagation(); setOpen(panel.hidden); });
    panel.addEventListener("click", (e) => {
      e.stopPropagation();
      const item = e.target.closest(".notif-item");
      if (item) { notifs.find(x => x.id == item.dataset.id).unread = false; render(); }
    });
    wrap.querySelector("#notif-all").addEventListener("click", () => { notifs.forEach(x => x.unread = false); render(); });
    document.addEventListener("click", () => setOpen(false));
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") setOpen(false); });
    render();
  }

  // ---------- CONFIGURACIÓN ----------
  function initSettings() {
    const tabs = document.querySelectorAll(".tab-btn");
    if (!tabs.length) return;
    const show = (name) => {
      tabs.forEach(b => { const on = b.dataset.tab === name; b.classList.toggle("active", on); b.setAttribute("aria-selected", on); });
      document.querySelectorAll(".tab-panel").forEach(p => p.hidden = p.dataset.panel !== name);
    };
    tabs.forEach(b => b.addEventListener("click", () => { show(b.dataset.tab); history.replaceState(null, "", "#" + b.dataset.tab); }));
    const initial = location.hash.slice(1);
    if ([...tabs].some(b => b.dataset.tab === initial)) show(initial);

    document.querySelector(".settings-main").addEventListener("change", (e) => {
      if (e.target.matches("input[type=checkbox], select")) toast("Preferencia guardada"); // TODO backend
    });

    document.getElementById("pass-form").addEventListener("submit", (e) => {
      e.preventDefault();
      const f = e.target, err = document.getElementById("pass-error");
      [...f.elements].forEach(i => i.classList?.remove("invalid"));
      let msg = "", bad = null;
      if (!f.actual.value) { msg = "Introduce tu contraseña actual."; bad = f.actual; }
      else if (f.nueva.value.length < 6) { msg = "La nueva contraseña debe tener al menos 6 caracteres."; bad = f.nueva; }
      else if (f.nueva.value !== f.repetir.value) { msg = "Las contraseñas no coinciden."; bad = f.repetir; }
      err.textContent = msg;
      if (bad) { bad.classList.add("invalid"); return bad.focus(); }
      f.reset(); toast("Contraseña actualizada"); // TODO backend
    });
    document.getElementById("clear-btn").addEventListener("click", () => { if (confirm("¿Borrar todo el historial de StatsBot?")) toast("Historial borrado"); });
    document.getElementById("delete-btn").addEventListener("click", () => { if (confirm("¿Seguro que quieres eliminar tu cuenta? No se puede deshacer.")) location.href = "login.html"; });
  }

  // ---------- AI ASSISTANT ----------
  function initAssistant() {
    const box = document.getElementById("chat-messages");
    if (!box || document.body.dataset.page !== "asistente") return;
    const welcome = document.getElementById("welcome");
    const input = document.getElementById("chat-input");
    const prompts = ["¿Vale la pena el Over de puntos de Tatum hoy?", "Compara a Adebayo y Embiid en rebotes", "¿Qué apuestas de valor hay en el Celtics vs Heat?", "¿Cómo defiende Miami el perímetro?"];
    const chats = [
      { title: "Tatum Over de puntos", msgs: [["u", "¿Vale la pena apostar al OVER de puntos de Tatum hoy?"], ["b", "Tatum promedia <b>29.4 pts</b> en sus últimos 5 partidos, pero MIA tiene la defensa perimetral #4. El Over 26.5 es arriesgado; ve mejor <b>Over 3.5 asistencias</b> (@ 2.10)."]] },
      { title: "Adebayo en rebotes", msgs: [["u", "¿Cómo va Adebayo en rebotes?"], ["b", "Adebayo promedia <b>10.8 rebotes</b> en casa. El Over 10.5 (@ 1.95) tiene una probabilidad estimada del 55%."]] },
      { title: "Lesiones de esta noche", msgs: [["u", "¿Hay bajas importantes hoy?"], ["b", "<b>Jimmy Butler</b> es duda por molestias en la rodilla. Confirmaremos su estado antes del salto inicial."]] }
    ];
    const replies = [
      [/tatum/i, "Tatum promedia <b>29.4 pts</b> en los últimos 5 partidos. Mejor opción: <b>Over 3.5 asistencias</b> (@ 2.10) con un 68% estimado."],
      [/adebayo|rebote/i, "Adebayo promedia <b>10.8 rebotes</b> en casa. <b>Over 10.5</b> (@ 1.95) con un 55% estimado."],
      [/miami|defiende|heat/i, "Miami tiene la defensa perimetral <b>#4</b> de la liga: limita los triples rivales a un 33%."],
      [/valor|apuesta/i, "Ahora mismo veo valor en <b>Tatum Over 3.5 AST</b> (@ 2.10). Recuerda que son estimaciones."]
    ];
    const history = document.getElementById("chat-history");

    document.getElementById("suggestions").innerHTML = prompts.map(p => `<button class="suggestion" type="button">${esc(p)}</button>`).join("");
    history.innerHTML = chats.map((c, i) => `<button class="history-item" data-i="${i}" type="button">${esc(c.title)}</button>`).join("");

    const add = (who, html) => {
      welcome.hidden = true;
      const d = document.createElement("div");
      d.className = "msg " + (who === "u" ? "user-msg" : "bot-msg");
      d.innerHTML = `<div class="msg-header">${who === "u" ? "LUIS" : "StatsBot"}</div><p>${html}</p>`;
      box.appendChild(d); box.scrollTop = box.scrollHeight;
      return d;
    };
    const clear = () => { box.querySelectorAll(".msg").forEach(m => m.remove()); };
    const markActive = (i) => history.querySelectorAll(".history-item").forEach((b, k) => b.classList.toggle("active", k === i));

    function send(text) {
      add("u", esc(text));
      const wait = add("b", '<span class="typing"><i></i><i></i><i></i></span>');
      setTimeout(() => {
        const r = replies.find(([re]) => re.test(text));
        wait.querySelector("p").innerHTML = r ? r[1] : "Estoy analizando la base de datos para esa consulta. En la versión con backend verás aquí la respuesta real de StatsBot.";
        box.scrollTop = box.scrollHeight;
      }, 900); // TODO backend: llamar a la API de IA
    }

    document.getElementById("chat-form").addEventListener("submit", (e) => {
      e.preventDefault();
      const t = input.value.trim(); if (!t) return;
      input.value = ""; markActive(-1); send(t);
    });
    document.getElementById("suggestions").addEventListener("click", (e) => { const b = e.target.closest(".suggestion"); if (b) send(b.textContent); });
    history.addEventListener("click", (e) => {
      const b = e.target.closest(".history-item"); if (!b) return;
      clear(); markActive(+b.dataset.i);
      chats[b.dataset.i].msgs.forEach(([w, h]) => add(w, h));
    });
    document.getElementById("new-chat").addEventListener("click", () => { clear(); markActive(-1); welcome.hidden = false; input.focus(); });
  }

  document.addEventListener("DOMContentLoaded", () => { initNavbar(); initSettings(); initAssistant(); });
  window.showToast = toast;
})();
