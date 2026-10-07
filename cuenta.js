// =============================================================================
// SPORT IQ - LOGIN Y USUARIO (solo frontend, datos de ejemplo en memoria)
// =============================================================================

// ---------- LOGIN ----------
const loginForm = document.getElementById("login-form");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email");
    const pass = document.getElementById("password");
    const error = document.getElementById("login-error");
    [email, pass].forEach(i => i.classList.remove("invalid"));

    if (!/^\S+@\S+\.\S+$/.test(email.value.trim())) {
      email.classList.add("invalid");
      error.textContent = "Introduce un correo electrónico válido.";
      return email.focus();
    }
    if (pass.value.length < 6) {
      pass.classList.add("invalid");
      error.textContent = "La contraseña debe tener al menos 6 caracteres.";
      return pass.focus();
    }
    error.textContent = "";
    window.location.href = "Index.html"; // TODO backend: validar credenciales aquí
  });
}

// ---------- PÁGINA DE USUARIO ----------
const accountForm = document.getElementById("account-form");
if (accountForm) {
  const plans = {
    gratis: { nombre: "Gratis", precio: "0 €", limite: 5, features: ["5 consultas a StatsBot al día", "Estadísticas básicas", "Cuotas de partidos"] },
    pro:    { nombre: "Pro", precio: "9,99 €", limite: 50, features: ["50 consultas a StatsBot al día", "Probabilidades estimadas por IA", "Histórico de enfrentamientos"] },
    elite:  { nombre: "Élite", precio: "19,99 €", limite: null, features: ["Consultas ilimitadas", "Alertas de lesiones", "Análisis de mercados de jugadores"] }
  };
  const user = { nombre: "Luis", apellidos: "García Martínez", usuario: "luis", plan: "pro", usadas: 32 };

  const $ = (sel) => document.querySelector(sel);
  const bind = (key, text) => document.querySelectorAll(`[data-bind="${key}"]`).forEach(el => el.textContent = text);

  function showToast(msg) {
    const t = $("#toast");
    t.textContent = msg;
    t.classList.add("show");
    setTimeout(() => t.classList.remove("show"), 2500);
  }

  // Cabecera y perfil
  function renderProfile() {
    bind("nombre-corto", user.nombre.toUpperCase());
    bind("nombre-completo", `${user.nombre} ${user.apellidos.split(" ")[0]}`);
    bind("usuario", `@${user.usuario}`);
    bind("iniciales", (user.nombre[0] + user.apellidos[0]).toUpperCase());
  }

  // Plan actual, consumo y tarjetas
  function renderPlan() {
    const p = plans[user.plan];
    bind("plan-badge", `PLAN ${p.nombre.toUpperCase()}`);
    bind("plan-nombre", p.nombre);
    bind("plan-renovacion", user.plan === "gratis" ? "Sin renovación: plan gratuito" : "Se renueva el 15 de noviembre de 2026");
    bind("uso-texto", p.limite ? `${user.usadas} / ${p.limite}` : `${user.usadas} (ilimitadas)`);

    const fill = $("#usage-fill");
    const pct = p.limite ? Math.min(100, (user.usadas / p.limite) * 100) : 8;
    fill.style.width = `${pct}%`;
    fill.classList.toggle("warn", pct >= 80);

    $("#plans-grid").innerHTML = Object.entries(plans).map(([id, pl]) => `
      <article class="plan-card ${id === user.plan ? "is-current" : ""}">
        <h4>${pl.nombre}</h4>
        <div class="plan-price">${pl.precio} <small>/mes</small></div>
        <ul>${pl.features.map(f => `<li>${f}</li>`).join("")}</ul>
        <button class="action-btn" data-plan="${id}" ${id === user.plan ? "disabled" : ""}>
          ${id === user.plan ? "Plan actual" : "Elegir plan"}
        </button>
      </article>`).join("");
  }

  $("#plans-grid").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-plan]");
    if (!btn || btn.disabled) return;
    user.plan = btn.dataset.plan; // TODO backend: guardar cambio de plan
    renderPlan();
    showToast(`Plan cambiado a ${plans[user.plan].nombre}`);
  });

  // Edición de datos
  const inputs = [...accountForm.querySelectorAll("input[name]")];
  let backup = {};
  function setEditing(on) {
    inputs.forEach(i => i.disabled = !on);
    $("#form-actions").hidden = !on;
    $("#edit-btn").hidden = on;
    if (on) inputs[0].focus();
  }
  $("#edit-btn").addEventListener("click", () => {
    inputs.forEach(i => backup[i.name] = i.value);
    setEditing(true);
  });
  $("#cancel-btn").addEventListener("click", () => {
    inputs.forEach(i => { i.value = backup[i.name]; i.classList.remove("invalid"); });
    setEditing(false);
  });
  accountForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const bad = inputs.find(i => i.required && !i.value.trim());
    if (bad) { bad.classList.add("invalid"); return bad.focus(); }
    inputs.forEach(i => i.classList.remove("invalid"));
    user.nombre = accountForm.nombre.value.trim();
    user.apellidos = accountForm.apellidos.value.trim();
    user.usuario = accountForm.usuario.value.trim();
    renderProfile(); // TODO backend: enviar datos al servidor
    setEditing(false);
    showToast("Datos guardados");
  });

  $("#logout-btn").addEventListener("click", () => window.location.href = "login.html");

  renderProfile();
  renderPlan();
}
