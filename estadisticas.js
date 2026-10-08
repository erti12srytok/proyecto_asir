// =============================================================================
// SPORT IQ - BASE DE DATOS Y RENDERIZADO DE EQUIPOS NBA
// =============================================================================

const nbaTeams = [
  // --- CONFERENCIA ESTE (15 Equipos) ---
  { id: "BOS", name: "Boston Celtics", division: "Atlántico", conf: "ESTE", localImg: "imagenes/Boston-Celtics-logo.png", fallback: "https://cdn.nba.com/logos/nba/1610612738/primary/L/logo.svg" },
  { id: "BKN", name: "Brooklyn Nets", division: "Atlántico", conf: "ESTE", localImg: "imagenes/nets.png", fallback: "https://cdn.nba.com/logos/nba/1610612751/primary/L/logo.svg" },
  { id: "NYK", name: "New York Knicks", division: "Atlántico", conf: "ESTE", localImg: "imagenes/knicks.png", fallback: "https://cdn.nba.com/logos/nba/1610612752/primary/L/logo.svg" },
  { id: "PHI", name: "Philadelphia 76ers", division: "Atlántico", conf: "ESTE", localImg: "imagenes/76ers.png", fallback: "https://cdn.nba.com/logos/nba/1610612755/primary/L/logo.svg" },
  { id: "TOR", name: "Toronto Raptors", division: "Atlántico", conf: "ESTE", localImg: "imagenes/raptors.png", fallback: "https://cdn.nba.com/logos/nba/1610612761/primary/L/logo.svg" },

  { id: "CHI", name: "Chicago Bulls", division: "Central", conf: "ESTE", localImg: "imagenes/bulls.png", fallback: "https://cdn.nba.com/logos/nba/1610612741/primary/L/logo.svg" },
  { id: "CLE", name: "Cleveland Cavaliers", division: "Central", conf: "ESTE", localImg: "imagenes/cavaliers.png", fallback: "https://cdn.nba.com/logos/nba/1610612739/primary/L/logo.svg" },
  { id: "DET", name: "Detroit Pistons", division: "Central", conf: "ESTE", localImg: "imagenes/pistons.png", fallback: "https://cdn.nba.com/logos/nba/1610612765/primary/L/logo.svg" },
  { id: "IND", name: "Indiana Pacers", division: "Central", conf: "ESTE", localImg: "imagenes/pacers.png", fallback: "https://cdn.nba.com/logos/nba/1610612754/primary/L/logo.svg" },
  { id: "MIL", name: "Milwaukee Bucks", division: "Central", conf: "ESTE", localImg: "imagenes/bucks.png", fallback: "https://cdn.nba.com/logos/nba/1610612749/primary/L/logo.svg" },

  { id: "ATL", name: "Atlanta Hawks", division: "Sureste", conf: "ESTE", localImg: "imagenes/hawks.png", fallback: "https://cdn.nba.com/logos/nba/1610612737/primary/L/logo.svg" },
  { id: "CHA", name: "Charlotte Hornets", division: "Sureste", conf: "ESTE", localImg: "imagenes/hornets.png", fallback: "https://cdn.nba.com/logos/nba/1610612766/primary/L/logo.svg" },
  { id: "MIA", name: "Miami Heat", division: "Sureste", conf: "ESTE", localImg: "imagenes/miami-heat-logo-1.png", fallback: "https://cdn.nba.com/logos/nba/1610612748/primary/L/logo.svg" },
  { id: "ORL", name: "Orlando Magic", division: "Sureste", conf: "ESTE", localImg: "imagenes/magic.png", fallback: "https://cdn.nba.com/logos/nba/1610612753/primary/L/logo.svg" },
  { id: "WAS", name: "Washington Wizards", division: "Sureste", conf: "ESTE", localImg: "imagenes/wizards.png", fallback: "https://cdn.nba.com/logos/nba/1610612764/primary/L/logo.svg" },

  // --- CONFERENCIA OESTE (15 Equipos) ---
  { id: "DEN", name: "Denver Nuggets", division: "Noroeste", conf: "OESTE", localImg: "imagenes/nuggets.png", fallback: "https://cdn.nba.com/logos/nba/1610612743/primary/L/logo.svg" },
  { id: "MIN", name: "Minnesota Timberwolves", division: "Noroeste", conf: "OESTE", localImg: "imagenes/timberwolves.png", fallback: "https://cdn.nba.com/logos/nba/1610612750/primary/L/logo.svg" },
  { id: "OKC", name: "Oklahoma City Thunder", division: "Noroeste", conf: "OESTE", localImg: "imagenes/thunder.png", fallback: "https://cdn.nba.com/logos/nba/1610612760/primary/L/logo.svg" },
  { id: "POR", name: "Portland Trail Blazers", division: "Noroeste", conf: "OESTE", localImg: "imagenes/blazers.png", fallback: "https://cdn.nba.com/logos/nba/1610612757/primary/L/logo.svg" },
  { id: "UTA", name: "Utah Jazz", division: "Noroeste", conf: "OESTE", localImg: "imagenes/jazz.png", fallback: "https://cdn.nba.com/logos/nba/1610612762/primary/L/logo.svg" },

  { id: "GSW", name: "Golden State Warriors", division: "Pacífico", conf: "OESTE", localImg: "imagenes/gsw.png", fallback: "https://cdn.nba.com/logos/nba/1610612744/primary/L/logo.svg" },
  { id: "LAC", name: "LA Clippers", division: "Pacífico", conf: "OESTE", localImg: "imagenes/clippers.png", fallback: "https://cdn.nba.com/logos/nba/1610612746/primary/L/logo.svg" },
  { id: "LAL", name: "Los Angeles Lakers", division: "Pacífico", conf: "OESTE", localImg: "imagenes/lakers.png", fallback: "https://cdn.nba.com/logos/nba/1610612747/primary/L/logo.svg" },
  { id: "PHX", name: "Phoenix Suns", division: "Pacífico", conf: "OESTE", localImg: "imagenes/suns.png", fallback: "https://cdn.nba.com/logos/nba/1610612756/primary/L/logo.svg" },
  { id: "SAC", name: "Sacramento Kings", division: "Pacífico", conf: "OESTE", localImg: "imagenes/kings.png", fallback: "https://cdn.nba.com/logos/nba/1610612758/primary/L/logo.svg" },

  { id: "DAL", name: "Dallas Mavericks", division: "Suroeste", conf: "OESTE", localImg: "imagenes/mavs.png", fallback: "https://cdn.nba.com/logos/nba/1610612742/primary/L/logo.svg" },
  { id: "HOU", name: "Houston Rockets", division: "Suroeste", conf: "OESTE", localImg: "imagenes/rockets.png", fallback: "https://cdn.nba.com/logos/nba/1610612745/primary/L/logo.svg" },
  { id: "MEM", name: "Memphis Grizzlies", division: "Suroeste", conf: "OESTE", localImg: "imagenes/grizzlies.png", fallback: "https://cdn.nba.com/logos/nba/1610612763/primary/L/logo.svg" },
  { id: "NOP", name: "New Orleans Pelicans", division: "Suroeste", conf: "OESTE", localImg: "imagenes/pelicans.png", fallback: "https://cdn.nba.com/logos/nba/1610612740/primary/L/logo.svg" },
  { id: "SAS", name: "San Antonio Spurs", division: "Suroeste", conf: "OESTE", localImg: "imagenes/spurs.png", fallback: "https://cdn.nba.com/logos/nba/1610612759/primary/L/logo.svg" }
];

document.addEventListener("DOMContentLoaded", () => {
  renderTeams(nbaTeams);
  setupFilter();
});

function renderTeams(teamsList) {
  const eastContainer = document.getElementById("east-teams-grid");
  const westContainer = document.getElementById("west-teams-grid");

  eastContainer.innerHTML = "";
  westContainer.innerHTML = "";

  teamsList.forEach(team => {
    // Al hacer clic, redirige a equipo.html pasando su id (ej: equipo.html?id=BOS)
    const card = document.createElement("a");
    card.href = `equipo.html?id=${team.id}`;
    card.className = "team-card";

    card.innerHTML = `
      <span class="team-card-abbr">${team.id}</span>
      <div class="team-card-logo-wrap">
        <img src="${team.localImg}" alt="${team.name}" class="team-card-logo" onerror="this.onerror=null; this.src='${team.fallback}';">
      </div>
      <div class="team-card-name">${team.name}</div>
      <div class="team-card-division">División ${team.division}</div>
    `;

    if (team.conf === "ESTE") {
      eastContainer.appendChild(card);
    } else {
      westContainer.appendChild(card);
    }
  });
}

function setupFilter() {
  const searchInput = document.getElementById("team-filter-input");
  searchInput.addEventListener("input", (e) => {
    const term = e.target.value.toLowerCase().trim();
    const filtered = nbaTeams.filter(t => 
      t.name.toLowerCase().includes(term) || 
      t.id.toLowerCase().includes(term) ||
      t.division.toLowerCase().includes(term)
    );
    renderTeams(filtered);
  });
}