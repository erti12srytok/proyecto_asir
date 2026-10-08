// =============================================================================
// SPORT IQ - LÓGICA INTERACTIVA DEL DASHBOARD Y STATSBOT
// =============================================================================

const nbaDatabase = {
  tatum: {
    name: "Jayson Tatum",
    team: "Boston Celtics",
    opponent: "Miami Heat",
    avg_l5: 29.4,
    def_rank: "#4 de la NBA",
    points_line: 26.5,
    points_odds: 1.85,
    ast_line: 3.5,
    ast_odds: 2.10,
    prob_ast: "68%",
    recommendation: "El Over de 26.5 puntos tiene alto riesgo frente a la defensa de Miami. La mejor opción estadística es Over 3.5 Asistencias (cuota 2.10)."
  },
  adebayo: {
    name: "Bam Adebayo",
    team: "Miami Heat",
    opponent: "Boston Celtics",
    avg_l5: 11.2,
    def_rank: "#2 en rebote defensivo",
    reb_line: 10.5,
    reb_odds: 1.95,
    prob_reb: "64%",
    recommendation: "Boston permite un 28% de rebotes ofensivos a pívots dominantes. Recomendamos Over 10.5 rebotes con cuota 1.95."
  }
};

let userBalance = 150.00;

document.addEventListener("DOMContentLoaded", () => {
  setupChatbot();
  setupBettingActions();
});

function setupChatbot() {
  const form = document.getElementById("chat-form");
  const input = document.getElementById("chat-input");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const query = input.value.trim();
    if (!query) return;

    appendMessage("LUIS", query, "user-msg");
    input.value = "";

    setTimeout(() => {
      processBotQuery(query);
    }, 600);
  });
}

function appendMessage(sender, text, cssClass) {
  const chatContainer = document.getElementById("chat-messages");
  const msgDiv = document.createElement("div");
  msgDiv.className = `msg ${cssClass}`;

  msgDiv.innerHTML = `
    <div class="msg-header">${sender}</div>
    <p>${text}</p>
  `;

  chatContainer.appendChild(msgDiv);
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

function processBotQuery(query) {
  const q = query.toLowerCase();
  const chatContainer = document.getElementById("chat-messages");

  let botHtml = "";

  if (q.includes("tatum") || q.includes("puntos")) {
    const data = nbaDatabase.tatum;
    botHtml = `
      <div class="msg-header">StatsBot</div>
      <p>Consultando base de datos NBA para ${data.name} vs ${data.opponent}:</p>
      <ul class="bot-analysis-list">
        <li>Promedio últimos 5 partidos: ${data.avg_l5} pts.</li>
        <li>Defensa rival: ${data.def_rank}.</li>
      </ul>
      <p class="bot-highlight">${data.recommendation}</p>
      <button class="add-slip-btn" data-label="Tatum Over 3.5 Asistencias" data-odds="${data.ast_odds}">
        + AÑADIR A CUPÓN: TATUM O3.5 AST (@ ${data.ast_odds})
      </button>
    `;
  } else if (q.includes("adebayo") || q.includes("rebote") || q.includes("bam")) {
    const data = nbaDatabase.adebayo;
    botHtml = `
      <div class="msg-header">StatsBot</div>
      <p>Reporte estadístico para ${data.name} vs ${data.opponent}:</p>
      <ul class="bot-analysis-list">
        <li>Promedio rebotes (ult. 5): ${data.avg_l5} rpg.</li>
        <li>Probabilidad estimada por IA: ${data.prob_reb}.</li>
      </ul>
      <p class="bot-highlight">${data.recommendation}</p>
      <button class="add-slip-btn" data-label="Adebayo Over 10.5 Rebotes" data-odds="${data.reb_odds}">
        + AÑADIR A CUPÓN: ADEBAYO O10.5 REB (@ ${data.reb_odds})
      </button>
    `;
  } else {
    botHtml = `
      <div class="msg-header">StatsBot</div>
      <p>Base de datos lista. Pregúntame por las líneas de <strong>Jayson Tatum</strong>, <strong>Bam Adebayo</strong> o cuotas del partido.</p>
    `;
  }

  const botDiv = document.createElement("div");
  botDiv.className = "msg bot-msg";
  botDiv.innerHTML = botHtml;
  chatContainer.appendChild(botDiv);

  attachSlipEvents(botDiv);
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

window.askChatbotAbout = function(player) {
  const input = document.getElementById("chat-input");
  input.value = `¿Qué proyección tiene ${player} hoy?`;
  document.getElementById("chat-form").dispatchEvent(new Event("submit"));
};

function setupBettingActions() {
  document.querySelectorAll(".bet-button, .player-card-actions .action-btn:not(.outline-btn)").forEach(btn => {
    btn.addEventListener("click", () => {
      const label = btn.getAttribute("data-label") || "Selección";
      const odds = parseFloat(btn.getAttribute("data-odds")) || 1.85;
      placeBet(label, odds);
    });
  });

  attachSlipEvents(document);
}

function attachSlipEvents(scope) {
  scope.querySelectorAll(".add-slip-btn").forEach(btn => {
    btn.onclick = () => {
      const label = btn.getAttribute("data-label");
      const odds = parseFloat(btn.getAttribute("data-odds"));
      placeBet(label, odds);
    };
  });
}

function placeBet(label, odds) {
  const stake = 10.00;
  if (userBalance < stake) {
    alert("Saldo insuficiente para realizar la apuesta.");
    return;
  }

  userBalance -= stake;
  document.getElementById("user-balance").textContent = `${userBalance.toFixed(2)} €`;

  const profit = (stake * odds).toFixed(2);
  alert(`✅ ¡Apuesta añadida!\n\nSelección: ${label}\nCuota: ${odds}\nImporte: ${stake} €\nRetorno estimado: ${profit} €\nNuevo Saldo: ${userBalance.toFixed(2)} €`);
}

// =============================================================================
// DATOS DE PARTIDOS POR FECHA (Simulación de consulta a base de datos / API)
// =============================================================================
const scheduleData = {
  "2026-10-05": [
    {
      id: 1,
      home: "MIA",
      homeName: "Miami Heat",
      homeLogo: "imagenes/miami-heat-logo-1.png",
      away: "BOS",
      awayName: "Boston Celtics",
      awayLogo: "imagenes/Boston-Celtics-logo.png",
      time: "20:30h",
      arena: "TD Garden",
      oddsHome: "2.80",
      oddsAway: "1.45"
    },
    {
      id: 2,
      home: "GSW",
      homeName: "Golden State Warriors",
      homeLogo: "imagenes/gsw.png",
      away: "LAL",
      awayName: "Los Angeles Lakers",
      awayLogo: "imagenes/Lakers.png",
      time: "22:00h",
      arena: "Chase Center",
      oddsHome: "1.75",
      oddsAway: "2.10"
    }
  ],
  "2026-10-06": [
    {
      id: 3,
      home: "DAL",
      homeName: "Dallas Mavericks",
      homeLogo: "imagenes/mavs.png",
      away: "DEN",
      awayName: "Denver Nuggets",
      awayLogo: "imagenes/nuggets.png",
      time: "01:30h",
      arena: "American Airlines Center",
      oddsHome: "1.90",
      oddsAway: "1.90"
    }
  ],
  "2026-10-08": [
    {
      id: 4,
      home: "NYK",
      homeName: "New York Knicks",
      homeLogo: "imagenes/knicks.png",
      away: "MIL",
      awayName: "Milwaukee Bucks",
      awayLogo: "imagenes/bucks.png",
      time: "20:00h",
      arena: "Madison Square Garden",
      oddsHome: "1.80",
      oddsAway: "2.05"
    }
  ]
};

// Estado del calendario
let currentDate = new Date(2026, 9, 5); // 5 de Octubre de 2026
let selectedDayString = "2026-10-05";

// Inicializador
document.addEventListener("DOMContentLoaded", () => {
  initCalendar();
  loadMatchesForDate(selectedDayString);
});

function initCalendar() {
  renderCalendar();

  document.getElementById("prev-month-btn").addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
  });

  document.getElementById("next-month-btn").addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
  });
}

function renderCalendar() {
  const container = document.getElementById("calendar-days");
  const monthLabel = document.getElementById("current-month-label");

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const monthNames = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];
  monthLabel.textContent = `${monthNames[month]} ${year}`;

  container.innerHTML = "";

  // Cabecera de los días de la semana
  const dayNames = ["L", "M", "X", "J", "V", "S", "D"];
  dayNames.forEach(d => {
    const el = document.createElement("span");
    el.className = "cal-dim";
    el.textContent = d;
    container.appendChild(el);
  });

  // Primer día del mes y total de días
  const firstDayIndex = (new Date(year, month, 1).getDay() + 6) % 7; // Ajuste para que Lunes sea 0
  const totalDays = new Date(year, month + 1, 0).getDate();

  // Días vacíos previos
  for (let i = 0; i < firstDayIndex; i++) {
    const emptySpan = document.createElement("span");
    emptySpan.className = "cal-dim";
    container.appendChild(emptySpan);
  }

  // Días del mes
  for (let day = 1; day <= totalDays; day++) {
    const daySpan = document.createElement("span");
    daySpan.className = "cal-day-cell";
    daySpan.textContent = day;

    const formattedDate = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

    // Si tiene partidos programados en la DB/Objeto
    if (scheduleData[formattedDate]) {
      daySpan.classList.add("has-matches");
    }

    // Si es la fecha seleccionada
    if (formattedDate === selectedDayString) {
      daySpan.classList.add("cal-active");
    }

    // Evento al pulsar sobre el día
    daySpan.addEventListener("click", () => {
      document.querySelectorAll(".cal-day-cell").forEach(c => c.classList.remove("cal-active"));
      daySpan.classList.add("cal-active");
      selectedDayString = formattedDate;
      loadMatchesForDate(formattedDate);
    });

    container.appendChild(daySpan);
  }
}

// =============================================================================
// ACTUALIZAR CARTELERA SEGÚN LA FECHA SELECCIONADA
// =============================================================================
function loadMatchesForDate(dateStr) {
  const matches = scheduleData[dateStr] || [];
  const listContainer = document.getElementById("matches-list-container");
  const dateIndicator = document.getElementById("selected-date-text");

  dateIndicator.textContent = dateStr;
  listContainer.innerHTML = "";

  if (matches.length === 0) {
    listContainer.innerHTML = `<p style="color: var(--text-dim); font-size: 11px; padding: 6px;">No hay partidos programados para este día.</p>`;
    return;
  }

  // Renderizar la lista en la barra lateral
  matches.forEach((m, idx) => {
    const item = document.createElement("div");
    item.className = `list-item ${idx === 0 ? "active-item" : ""}`;
    item.innerHTML = `
      <div class="list-teams">
        <img src="${m.awayLogo}" alt="${m.away}" class="team-mini-icon" onerror="this.style.display='none'">
        <span>${m.away} @ ${m.home}</span>
      </div>
      <span class="time-badge">${m.time}</span>
    `;

    // Al hacer clic en un partido de la lista, actualizar el panel central
    item.addEventListener("click", () => {
      document.querySelectorAll(".list-item").forEach(li => li.classList.remove("active-item"));
      item.classList.add("active-item");
      updateMainMatchup(m);
    });

    listContainer.appendChild(item);
  });

  // Cargar por defecto el primer partido en el panel central
  updateMainMatchup(matches[0]);
}

// Actualiza el banner central del encuentro destacado
function updateMainMatchup(match) {
  const banner = document.querySelector(".matchup-banner");
  if (!banner) return;

  banner.innerHTML = `
    <div class="matchup-details">
      <div class="team-logo-container">
        <img src="${match.awayLogo}" alt="${match.awayName}" class="team-logo-img" onerror="this.src='https://placehold.co/80x80/161c2d/ffffff?text=${match.away}'">
        <span class="team-code">${match.away}</span>
      </div>

      <div class="matchup-info">
        <h2>${match.awayName.toUpperCase()} @ ${match.homeName.toUpperCase()}</h2>
        <p>${match.arena} • ${match.time}</p>
      </div>

      <div class="team-logo-container">
        <img src="${match.homeLogo}" alt="${match.homeName}" class="team-logo-img" onerror="this.src='https://placehold.co/80x80/161c2d/ffffff?text=${match.home}'">
        <span class="team-code">${match.home}</span>
      </div>
    </div>

    <div class="odds-row">
      <button class="bet-button" data-label="${match.awayName} (Moneyline)" data-odds="${match.oddsAway}">
        ${match.away} <strong>${match.oddsAway}</strong>
      </button>
      <button class="bet-button" data-label="${match.homeName} (Moneyline)" data-odds="${match.oddsHome}">
        ${match.home} <strong>${match.oddsHome}</strong>
      </button>
    </div>
  `;

  // Reasignar eventos de clic a los nuevos botones de apuesta
  setupBettingActions();
}