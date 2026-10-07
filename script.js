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