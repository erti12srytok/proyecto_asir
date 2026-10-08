// =============================================================================
// SPORT IQ - PLANTILLAS EXACTAS DEL PROYECTO (TEMPORADA 2026-2027)
// Fuente: Base de datos personalizada Sport IQ
// =============================================================================

const nbaTeamsFull = {
  // ---------------------------------------------------------------------------
  // CONFERENCIA ESTE
  // ---------------------------------------------------------------------------
  BOS: {
    nbaId: "1610612738", name: "Boston Celtics", conf: "CONFERENCIA ESTE", division: "DIVISIÓN ATLÁNTICO",
    city: "Boston, Massachusetts", arena: "TD Garden", coach: "Joe Mazzulla", championships: "18 (Último: 2024)",
    logoLocal: "imagenes/Boston-Celtics-logo.png",
    players: [
      { id: "1628369", name: "Jayson Tatum", number: "#0", pos: "SF / PF", height: "2.03 m", weight: "95 kg", exp: "9 años", pts: "27.4", reb: "8.4", ast: "5.1", fg: "47.4%", p3: "37.8%", min: "35.5", aiTip: "Referente ofensivo; sobre el 70% de probabilidad en líneas de más de 26.5 puntos." },
      { id: "202331", name: "Paul George", number: "#13", pos: "SF / SG", height: "2.03 m", weight: "100 kg", exp: "16 años", pts: "21.5", reb: "5.3", ast: "3.6", fg: "46.8%", p3: "40.8%", min: "33.5", aiTip: "Tirador de élite en esquinas; favorece mercados de más de 2.5 triples." },
      { id: "1628401", name: "Derrick White", number: "#9", pos: "PG / SG", height: "1.93 m", weight: "86 kg", exp: "9 años", pts: "15.8", reb: "4.3", ast: "5.3", fg: "46.8%", p3: "40.1%", min: "33.0", aiTip: "Líneas de robos y tapones consistentes para un guardia exterior." },
      { id: "1630202", name: "Payton Pritchard", number: "#11", pos: "PG", height: "1.85 m", weight: "88 kg", exp: "6 años", pts: "12.8", reb: "3.2", ast: "3.8", fg: "46.0%", p3: "41.5%", min: "24.5", aiTip: "Revolucionario desde el banquillo con rachas anotadoras rápidas." },
      { id: "1629011", name: "Mitchell Robinson", number: "#23", pos: "C", height: "2.13 m", weight: "109 kg", exp: "8 años", pts: "8.5", reb: "10.4", ast: "0.8", fg: "66.0%", p3: "0.0%", min: "27.0", aiTip: "Ancla defensiva; valor en rebotes ofensivos y tapones." }
    ]
  },
  BKN: {
    nbaId: "1610612751", name: "Brooklyn Nets", conf: "CONFERENCIA ESTE", division: "DIVISIÓN ATLÁNTICO",
    city: "Brooklyn, New York", arena: "Barclays Center", coach: "Jordi Fernández", championships: "0",
    logoLocal: "imagenes/nets.png",
    players: [
      { id: "1629008", name: "Michael Porter Jr.", number: "#1", pos: "SF / PF", height: "2.08 m", weight: "99 kg", exp: "7 años", pts: "20.8", reb: "7.4", ast: "2.1", fg: "48.5%", p3: "40.2%", min: "34.0", aiTip: "Primera opción anotadora en Brooklyn; más de 3.0 triples por partido de media." },
      { id: "1629651", name: "Nic Claxton", number: "#33", pos: "C", height: "2.11 m", weight: "98 kg", exp: "7 años", pts: "12.5", reb: "10.2", ast: "2.1", fg: "63.0%", p3: "0.0%", min: "30.5", aiTip: "Líneas rentables en rebotes y bloqueos defensivos." },
      { id: "1631165", name: "Keon Ellis", number: "#14", pos: "SG", height: "1.93 m", weight: "79 kg", exp: "4 años", pts: "9.8", reb: "3.1", ast: "2.4", fg: "46.5%", p3: "41.2%", min: "25.0", aiTip: "Defensa presionante y efectividad en tiros exteriores liberados." },
      { id: "1630549", name: "Day'Ron Sharpe", number: "#20", pos: "C", height: "2.06 m", weight: "120 kg", exp: "5 años", pts: "8.2", reb: "7.8", ast: "1.5", fg: "58.0%", p3: "0.0%", min: "19.0", aiTip: "Alta tasa de rebote por minuto jugado." },
      { id: "1631169", name: "Josh Minott", number: "#8", pos: "SF / PF", height: "2.03 m", weight: "93 kg", exp: "4 años", pts: "7.0", reb: "3.5", ast: "1.2", fg: "48.0%", p3: "33.0%", min: "18.0", aiTip: "Jugador físico en transiciones rápidas." }
    ]
  },
  NYK: {
    nbaId: "1610612752", name: "New York Knicks", conf: "CONFERENCIA ESTE", division: "DIVISIÓN ATLÁNTICO",
    city: "New York, New York", arena: "Madison Square Garden", coach: "Tom Thibodeau", championships: "2 (Último: 1973)",
    logoLocal: "imagenes/knicks.png",
    players: [
      { id: "1628973", name: "Jalen Brunson", number: "#11", pos: "PG", height: "1.88 m", weight: "86 kg", exp: "8 años", pts: "28.2", reb: "3.5", ast: "6.8", fg: "47.8%", p3: "39.5%", min: "35.8", aiTip: "Máxima carga de juego en MSG; valor en puntos y faltas recibidas." },
      { id: "1626157", name: "Karl-Anthony Towns", number: "#32", pos: "C", height: "2.13 m", weight: "112 kg", exp: "11 años", pts: "23.2", reb: "11.1", ast: "3.2", fg: "51.0%", p3: "41.5%", min: "34.0", aiTip: "Gran rendimiento en doble-doble y tiros de tres puntos para un interior." },
      { id: "1628384", name: "OG Anunoby", number: "#8", pos: "SF / PF", height: "2.01 m", weight: "105 kg", exp: "9 años", pts: "15.0", reb: "4.7", ast: "2.0", fg: "48.5%", p3: "38.4%", min: "34.0", aiTip: "Especialista defensivo perimetral con alto promedio de robos." },
      { id: "1628969", name: "Mikal Bridges", number: "#25", pos: "SF", height: "1.98 m", weight: "95 kg", exp: "8 años", pts: "18.8", reb: "4.4", ast: "3.8", fg: "46.2%", p3: "37.5%", min: "36.2", aiTip: "Líder en minutos; regularidad alta en todas las líneas." },
      { id: "1628404", name: "Josh Hart", number: "#3", pos: "SG / SF", height: "1.93 m", weight: "98 kg", exp: "9 años", pts: "10.4", reb: "8.6", ast: "4.3", fg: "45.0%", p3: "33.5%", min: "33.5", aiTip: "Líneas de rebotes muy favorables frente a escoltas rivales." }
    ]
  },
  PHI: {
    nbaId: "1610612755", name: "Philadelphia 76ers", conf: "CONFERENCIA ESTE", division: "DIVISIÓN ATLÁNTICO",
    city: "Philadelphia, Pennsylvania", arena: "Wells Fargo Center", coach: "Nick Nurse", championships: "3 (Último: 1983)",
    logoLocal: "imagenes/76ers.png",
    players: [
      { id: "203954", name: "Joel Embiid", number: "#21", pos: "C", height: "2.13 m", weight: "127 kg", exp: "10 años", pts: "32.0", reb: "10.6", ast: "5.0", fg: "52.0%", p3: "37.5%", min: "33.5", aiTip: "Dominio interior absoluto y viajes constantes al tiro libre." },
      { id: "1627759", name: "Jaylen Brown", number: "#7", pos: "SG / SF", height: "1.98 m", weight: "101 kg", exp: "10 años", pts: "23.0", reb: "5.4", ast: "3.5", fg: "50.0%", p3: "35.5%", min: "33.5", aiTip: "Gran potencia en contraataque con penetraciones directas." },
      { id: "2544", name: "LeBron James", number: "#23", pos: "SF / PF", height: "2.06 m", weight: "113 kg", exp: "23 años", pts: "23.5", reb: "7.0", ast: "8.5", fg: "53.0%", p3: "39.5%", min: "34.0", aiTip: "Motor organizador de Philadelphia; valor en combinadas de Asistencias + Rebotes." },
      { id: "1630178", name: "Tyrese Maxey", number: "#0", pos: "PG", height: "1.88 m", weight: "91 kg", exp: "6 años", pts: "24.5", reb: "3.5", ast: "5.8", fg: "45.5%", p3: "37.8%", min: "36.0", aiTip: "Velocidad desequilibrante en transiciones rápidas." },
      { id: "1629014", name: "Anfernee Simons", number: "#1", pos: "PG / SG", height: "1.91 m", weight: "82 kg", exp: "8 años", pts: "18.2", reb: "3.0", ast: "4.5", fg: "44.0%", p3: "39.0%", min: "30.0", aiTip: "Excelente tirador de perímetro tras pase de LeBron." }
    ]
  },
  TOR: {
    nbaId: "1610612761", name: "Toronto Raptors", conf: "CONFERENCIA ESTE", division: "DIVISIÓN ATLÁNTICO",
    city: "Toronto, Canadá", arena: "Scotiabank Arena", coach: "Darko Rajakovic", championships: "1 (2019)",
    logoLocal: "imagenes/raptors.png",
    players: [
      { id: "1630567", name: "Scottie Barnes", number: "#4", pos: "SF / PF", height: "2.01 m", weight: "102 kg", exp: "5 años", pts: "21.0", reb: "8.4", ast: "6.2", fg: "47.5%", p3: "34.5%", min: "34.8", aiTip: "Candidato habitual al triple-doble por su polivalencia." },
      { id: "1627742", name: "Brandon Ingram", number: "#14", pos: "SF", height: "2.03 m", weight: "86 kg", exp: "10 años", pts: "21.5", reb: "5.1", ast: "5.2", fg: "49.0%", p3: "35.8%", min: "33.5", aiTip: "Tirador fluido de media distancia y generador al poste." },
      { id: "1629628", name: "RJ Barrett", number: "#9", pos: "SG / SF", height: "1.98 m", weight: "97 kg", exp: "7 años", pts: "20.2", reb: "6.0", ast: "3.8", fg: "50.0%", p3: "36.8%", min: "33.0", aiTip: "Gran efectividad anotando en la pintura." },
      { id: "1630193", name: "Immanuel Quickley", number: "#5", pos: "PG", height: "1.88 m", weight: "86 kg", exp: "6 años", pts: "18.2", reb: "4.3", ast: "6.7", fg: "44.2%", p3: "38.5%", min: "32.8", aiTip: "Generador principal en el pick-and-roll." },
      { id: "1627751", name: "Jakob Poeltl", number: "#19", pos: "C", height: "2.13 m", weight: "118 kg", exp: "10 años", pts: "11.5", reb: "9.2", ast: "2.6", fg: "64.5%", p3: "0.0%", min: "27.5", aiTip: "Seguro en rebotes y bloqueos interiores." }
    ]
  },
  CLE: {
    nbaId: "1610612739", name: "Cleveland Cavaliers", conf: "CONFERENCIA ESTE", division: "DIVISIÓN CENTRAL",
    city: "Cleveland, Ohio", arena: "Rocket Mortgage FieldHouse", coach: "Kenny Atkinson", championships: "1 (2016)",
    logoLocal: "imagenes/cavaliers.png",
    players: [
      { id: "1628378", name: "Donovan Mitchell", number: "#45", pos: "SG", height: "1.91 m", weight: "98 kg", exp: "9 años", pts: "26.8", reb: "5.0", ast: "6.0", fg: "46.5%", p3: "37.2%", min: "35.0", aiTip: "Rachas de anotación con gran volumen de lanzamientos." },
      { id: "1630596", name: "Evan Mobley", number: "#4", pos: "PF / C", height: "2.11 m", weight: "98 kg", exp: "5 años", pts: "17.0", reb: "10.0", ast: "3.5", fg: "58.5%", p3: "36.8%", min: "32.0", aiTip: "Líneas de tapones y rebotes defensivos muy consistentes." },
      { id: "1629636", name: "Darius Garland", number: "#10", pos: "PG", height: "1.85 m", weight: "87 kg", exp: "7 años", pts: "18.6", reb: "2.8", ast: "6.6", fg: "45.0%", p3: "37.8%", min: "31.5", aiTip: "Excelente reparto de juego en situaciones estáticas." },
      { id: "1628386", name: "Jarrett Allen", number: "#31", pos: "C", height: "2.08 m", weight: "110 kg", exp: "9 años", pts: "15.8", reb: "10.4", ast: "2.5", fg: "64.0%", p3: "0.0%", min: "31.0", aiTip: "Dominio del rebote ofensivo y finalizaciones cerca del aro." },
      { id: "1629631", name: "De'Andre Hunter", number: "#12", pos: "SF", height: "2.03 m", weight: "100 kg", exp: "7 años", pts: "14.5", reb: "4.0", ast: "1.5", fg: "46.0%", p3: "38.5%", min: "28.5", aiTip: "Tirador de esquinas y defensor exterior." }
    ]
  },
  CHI: {
    nbaId: "1610612741", name: "Chicago Bulls", conf: "CONFERENCIA ESTE", division: "DIVISIÓN CENTRAL",
    city: "Chicago, Illinois", arena: "United Center", coach: "Billy Donovan", championships: "6 (Último: 1998)",
    logoLocal: "imagenes/bulls.png",
    players: [
      { id: "1626181", name: "Norman Powell", number: "#24", pos: "SG", height: "1.93 m", weight: "98 kg", exp: "11 años", pts: "18.5", reb: "3.4", ast: "2.2", fg: "48.0%", p3: "41.0%", min: "31.0", aiTip: "Anotador perimetral consistente con gran acierto en triples." },
      { id: "1629651", name: "Nic Claxton", number: "#33", pos: "C", height: "2.11 m", weight: "98 kg", exp: "7 años", pts: "12.4", reb: "10.0", ast: "2.0", fg: "63.5%", p3: "0.0%", min: "30.0", aiTip: "Protección de aro y capturas en rebotes ofensivos." },
      { id: "1629632", name: "Coby White", number: "#0", pos: "PG", height: "1.96 m", weight: "88 kg", exp: "7 años", pts: "19.8", reb: "4.5", ast: "5.2", fg: "45.0%", p3: "38.0%", min: "35.5", aiTip: "Referente del perímetro con alto volumen de tiros." },
      { id: "1630581", name: "Josh Giddey", number: "#3", pos: "PG / SG", height: "2.03 m", weight: "98 kg", exp: "5 años", pts: "14.8", reb: "7.4", ast: "6.9", fg: "46.5%", p3: "34.5%", min: "31.0", aiTip: "Métricas destacadas en combinadas de Rebotes + Asistencias." },
      { id: "1630172", name: "Patrick Williams", number: "#44", pos: "PF", height: "2.01 m", weight: "98 kg", exp: "6 años", pts: "11.2", reb: "4.8", ast: "1.8", fg: "45.0%", p3: "39.5%", min: "28.0", aiTip: "Defensa multi-posicional y tiros abiertos de tres." }
    ]
  },
  DET: {
    nbaId: "1610612765", name: "Detroit Pistons", conf: "CONFERENCIA ESTE", division: "DIVISIÓN CENTRAL",
    city: "Detroit, Michigan", arena: "Little Caesars Arena", coach: "J.B. Bickerstaff", championships: "3 (Último: 2004)",
    logoLocal: "imagenes/pistons.png",
    players: [
      { id: "1630595", name: "Cade Cunningham", number: "#2", pos: "PG", height: "1.98 m", weight: "100 kg", exp: "5 años", pts: "23.8", reb: "4.6", ast: "7.9", fg: "45.8%", p3: "36.5%", min: "34.8", aiTip: "Manejo total de la ofensiva de Detroit; valor en puntos y asistencias." },
      { id: "1641709", name: "Ausar Thompson", number: "#9", pos: "SF", height: "2.01 m", weight: "98 kg", exp: "3 años", pts: "12.0", reb: "7.5", ast: "2.8", fg: "49.0%", p3: "25.0%", min: "29.0", aiTip: "Fuerte impacto en rebotes y robos defensivos." },
      { id: "1631105", name: "Jalen Duren", number: "#0", pos: "C", height: "2.08 m", weight: "113 kg", exp: "4 años", pts: "14.5", reb: "12.0", ast: "2.5", fg: "64.5%", p3: "0.0%", min: "30.0", aiTip: "Top reboteador ofensivo con alta tasa de doble-doble." },
      { id: "202699", name: "Tobias Harris", number: "#12", pos: "PF", height: "2.03 m", weight: "102 kg", exp: "15 años", pts: "16.5", reb: "6.2", ast: "2.8", fg: "48.5%", p3: "36.0%", min: "32.0", aiTip: "Veteranía y anotación fiable en media distancia." },
      { id: "1628381", name: "John Collins", number: "#20", pos: "PF / C", height: "2.06 m", weight: "103 kg", exp: "9 años", pts: "14.0", reb: "7.8", ast: "1.4", fg: "52.0%", p3: "36.0%", min: "27.5", aiTip: "Finalizador atlético en jugadas aéreas." }
    ]
  },
  IND: {
    nbaId: "1610612754", name: "Indiana Pacers", conf: "CONFERENCIA ESTE", division: "DIVISIÓN CENTRAL",
    city: "Indianapolis, Indiana", arena: "Gainbridge Fieldhouse", coach: "Rick Carlisle", championships: "0",
    logoLocal: "imagenes/pacers.png",
    players: [
      { id: "1630169", name: "Tyrese Haliburton", number: "#0", pos: "PG", height: "1.96 m", weight: "84 kg", exp: "6 años", pts: "20.5", reb: "4.0", ast: "10.8", fg: "48.0%", p3: "37.0%", min: "32.5", aiTip: "Líder de asistencias con alto ritmo de juego; más de 9.5 asistencias por noche." },
      { id: "1627783", name: "Pascal Siakam", number: "#43", pos: "PF", height: "2.03 m", weight: "104 kg", exp: "10 años", pts: "21.6", reb: "7.2", ast: "4.2", fg: "53.8%", p3: "38.5%", min: "33.4", aiTip: "Anotador seguro al poste y en transiciones rápidas." },
      { id: "1629614", name: "Andrew Nembhard", number: "#2", pos: "PG / SG", height: "1.93 m", weight: "87 kg", exp: "4 años", pts: "12.5", reb: "2.8", ast: "4.8", fg: "48.0%", p3: "36.5%", min: "28.0", aiTip: "Director de juego de gran solvencia con bajo ratio de pérdidas." },
      { id: "1641713", name: "Jarace Walker", number: "#25", pos: "PF", height: "2.03 m", weight: "107 kg", exp: "3 años", pts: "9.5", reb: "4.8", ast: "2.1", fg: "47.0%", p3: "36.0%", min: "22.0", aiTip: "Fuerte potencia física en la zona." },
      { id: "1631097", name: "Bennedict Mathurin", number: "#00", pos: "SG / SF", height: "1.96 m", weight: "95 kg", exp: "4 años", pts: "16.8", reb: "4.2", ast: "2.2", fg: "46.0%", p3: "37.0%", min: "28.5", aiTip: "Especialista atacando el aro y provocando tiros libres." }
    ]
  },
  MIL: {
    nbaId: "1610612749", name: "Milwaukee Bucks", conf: "CONFERENCIA ESTE", division: "DIVISIÓN CENTRAL",
    city: "Milwaukee, Wisconsin", arena: "Fiserv Forum", coach: "Doc Rivers", championships: "2 (Último: 2021)",
    logoLocal: "imagenes/bucks.png",
    players: [
      { id: "1629639", name: "Tyler Herro", number: "#14", pos: "SG / PG", height: "1.96 m", weight: "88 kg", exp: "7 años", pts: "22.5", reb: "5.4", ast: "4.8", fg: "45.0%", p3: "40.2%", min: "34.5", aiTip: "Líder anotador de los nuevos Bucks; cuotas altas en triples anotados." },
      { id: "1628398", name: "Kyle Kuzma", number: "#0", pos: "PF", height: "2.06 m", weight: "100 kg", exp: "9 años", pts: "21.0", reb: "7.0", ast: "4.0", fg: "46.0%", p3: "34.5%", min: "33.5", aiTip: "Eje ofensivo primario en lanzamientos de campo." },
      { id: "1626167", name: "Myles Turner", number: "#33", pos: "C", height: "2.11 m", weight: "113 kg", exp: "11 años", pts: "17.2", reb: "7.4", ast: "1.6", fg: "52.5%", p3: "36.5%", min: "29.5", aiTip: "Gran protector de aro; líneas recomendadas de más de 2.0 tapones." },
      { id: "1629018", name: "Gary Trent Jr.", number: "#5", pos: "SG", height: "1.96 m", weight: "93 kg", exp: "8 años", pts: "13.5", reb: "2.6", ast: "1.8", fg: "43.5%", p3: "39.5%", min: "27.0", aiTip: "Tirador abierto en catch-and-shoot." },
      { id: "1631170", name: "Jaime Jaquez Jr.", number: "#11", pos: "SF", height: "1.98 m", weight: "102 kg", exp: "3 años", pts: "14.2", reb: "4.5", ast: "3.0", fg: "49.0%", p3: "34.0%", min: "28.0", aiTip: "Juego al poste y penetraciones con buen juego de pies." }
    ]
  },
  ATL: {
    nbaId: "1610612737", name: "Atlanta Hawks", conf: "CONFERENCIA ESTE", division: "DIVISIÓN SURESTE",
    city: "Atlanta, Georgia", arena: "State Farm Arena", coach: "Quin Snyder", championships: "1 (1958)",
    logoLocal: "imagenes/hawks.png",
    players: [
      { id: "1629027", name: "Trae Young", number: "#11", pos: "PG", height: "1.85 m", weight: "74 kg", exp: "8 años", pts: "26.0", reb: "2.9", ast: "10.9", fg: "43.2%", p3: "37.5%", min: "36.0", aiTip: "Líder de asistencias con alto ritmo de posesión ofensiva." },
      { id: "1630552", name: "Jalen Johnson", number: "#1", pos: "PF", height: "2.06 m", weight: "100 kg", exp: "5 años", pts: "17.5", reb: "9.0", ast: "4.0", fg: "51.8%", p3: "36.2%", min: "34.5", aiTip: "Presencia todoterreno en rebotes y puntos secundarios." },
      { id: "1630700", name: "Dyson Daniels", number: "#5", pos: "PG / SG", height: "2.01 m", weight: "90 kg", exp: "4 años", pts: "11.0", reb: "4.8", ast: "3.6", fg: "45.0%", p3: "33.5%", min: "28.0", aiTip: "Defensor perimetral de élite con gran tasa de robos." },
      { id: "1642258", name: "Zaccharie Risacher", number: "#10", pos: "SF", height: "2.06 m", weight: "95 kg", exp: "2 años", pts: "14.5", reb: "4.2", ast: "2.1", fg: "46.0%", p3: "38.0%", min: "28.0", aiTip: "Amenaza exterior liberada sin balón." },
      { id: "1629638", name: "Nickeil Alexander-Walker", number: "#0", pos: "SG", height: "1.96 m", weight: "93 kg", exp: "7 años", pts: "10.5", reb: "2.8", ast: "2.8", fg: "44.5%", p3: "39.0%", min: "25.0", aiTip: "Especialista defensivo y tiro exterior fiable." }
    ]
  },
  CHA: {
    nbaId: "1610612766", name: "Charlotte Hornets", conf: "CONFERENCIA ESTE", division: "DIVISIÓN SURESTE",
    city: "Charlotte, Carolina del Norte", arena: "Spectrum Center", coach: "Charles Lee", championships: "0",
    logoLocal: "imagenes/hornets.png",
    players: [
      { id: "1630163", name: "LaMelo Ball", number: "#1", pos: "PG", height: "2.01 m", weight: "82 kg", exp: "6 años", pts: "24.5", reb: "5.5", ast: "8.5", fg: "44.0%", p3: "37.0%", min: "34.0", aiTip: "Ritmo frenético; altamente propenso a over en puntos y asistencias." },
      { id: "1629632", name: "Coby White", number: "#0", pos: "PG / SG", height: "1.96 m", weight: "88 kg", exp: "7 años", pts: "19.0", reb: "4.2", ast: "4.8", fg: "45.0%", p3: "38.0%", min: "33.0", aiTip: "Anotador perimetral de rachas." },
      { id: "1628970", name: "Miles Bridges", number: "#0", pos: "PF", height: "2.01 m", weight: "102 kg", exp: "7 años", pts: "19.5", reb: "7.0", ast: "3.1", fg: "46.5%", p3: "35.0%", min: "35.0", aiTip: "Juego físico en la pintura y rebote ofensivo." },
      { id: "1641706", name: "Brandon Miller", number: "#24", pos: "SF", height: "2.06 m", weight: "91 kg", exp: "3 años", pts: "19.2", reb: "4.8", ast: "2.8", fg: "45.5%", p3: "38.5%", min: "33.0", aiTip: "Tirador prolífico con capacidad anotadora en suspensión." },
      { id: "1631109", name: "Mark Williams", number: "#5", pos: "C", height: "2.13 m", weight: "110 kg", exp: "4 años", pts: "12.8", reb: "9.8", ast: "1.2", fg: "65.0%", p3: "0.0%", min: "27.0", aiTip: "Garantía de rebotes y finalizaciones interiores." }
    ]
  },
  MIA: {
    nbaId: "1610612748", name: "Miami Heat", conf: "CONFERENCIA ESTE", division: "DIVISIÓN SURESTE",
    city: "Miami, Florida", arena: "Kaseya Center", coach: "Erik Spoelstra", championships: "3 (Último: 2013)",
    logoLocal: "imagenes/miami-heat-logo-1.png",
    players: [
      { id: "203507", name: "Giannis Antetokounmpo", number: "#34", pos: "PF / C", height: "2.11 m", weight: "110 kg", exp: "13 años", pts: "31.0", reb: "11.8", ast: "6.2", fg: "62.0%", p3: "28.5%", min: "35.5", aiTip: "Llegada estelar a Miami; más del 80% de probabilidad en el Over de puntos en la pintura." },
      { id: "1628389", name: "Bam Adebayo", number: "#13", pos: "C", height: "2.06 m", weight: "116 kg", exp: "9 años", img: "imagenes/adebayo.png", pts: "19.5", reb: "10.5", ast: "4.0", fg: "52.4%", p3: "36.0%", min: "34.0", aiTip: "Dupla dominante interior junto a Giannis; sobre el 65% de over en rebotes." },
      { id: "203952", name: "Andrew Wiggins", number: "#22", pos: "SF", height: "2.01 m", weight: "89 kg", exp: "12 años", pts: "16.5", reb: "5.2", ast: "2.2", fg: "47.0%", p3: "37.5%", min: "31.5", aiTip: "Defensa sobre el mejor anotador rival y tiros en transición." },
      { id: "202691", name: "Klay Thompson", number: "#31", pos: "SG / SF", height: "1.98 m", weight: "100 kg", exp: "14 años", pts: "16.8", reb: "3.5", ast: "2.0", fg: "44.2%", p3: "40.0%", min: "29.0", aiTip: "Tirador de esquinas letal con más de 3.2 triples anotados por partido." }
    ]
  },
  ORL: {
    nbaId: "1610612753", name: "Orlando Magic", conf: "CONFERENCIA ESTE", division: "DIVISIÓN SURESTE",
    city: "Orlando, Florida", arena: "Kia Center", coach: "Jamahl Mosley", championships: "0",
    logoLocal: "imagenes/magic.png",
    players: [
      { id: "1631094", name: "Paolo Banchero", number: "#5", pos: "PF", height: "2.08 m", weight: "113 kg", exp: "4 años", pts: "24.5", reb: "7.5", ast: "5.8", fg: "46.8%", p3: "35.2%", min: "35.2", aiTip: "Atracción de marcas y creación desde el poste; valor en puntos y asistencias." },
      { id: "1630217", name: "Desmond Bane", number: "#22", pos: "SG", height: "1.96 m", weight: "97 kg", exp: "6 años", pts: "23.0", reb: "4.6", ast: "5.0", fg: "46.8%", p3: "39.0%", min: "34.0", aiTip: "Nuevo tirador estelar de Orlando; sobre el 70% en over de triples." },
      { id: "1630532", name: "Franz Wagner", number: "#22", pos: "SF", height: "2.08 m", weight: "100 kg", exp: "5 años", pts: "20.0", reb: "5.2", ast: "3.8", fg: "48.2%", p3: "33.5%", min: "33.0", aiTip: "Penetraciones agresivas en estático." },
      { id: "1630591", name: "Jalen Suggs", number: "#4", pos: "PG / SG", height: "1.96 m", weight: "93 kg", exp: "5 años", pts: "13.5", reb: "3.5", ast: "3.2", fg: "45.0%", p3: "39.0%", min: "28.5", aiTip: "Especialista perimetral con alta tasa de robos." },
      { id: "1641710", name: "Anthony Black", number: "#0", pos: "PG", height: "2.01 m", weight: "91 kg", exp: "3 años", pts: "9.2", reb: "3.8", ast: "3.4", fg: "46.5%", p3: "35.0%", min: "23.0", aiTip: "Gran envergadura para forzar pérdidas rivales." }
    ]
  },
  WAS: {
    nbaId: "1610612764", name: "Washington Wizards", conf: "CONFERENCIA ESTE", division: "DIVISIÓN SURESTE",
    city: "Washington, D.C.", arena: "Capital One Arena", coach: "Brian Keefe", championships: "1 (1978)",
    logoLocal: "imagenes/wizards.png",
    players: [
      { id: "1629027", name: "Trae Young", number: "#11", pos: "PG", height: "1.85 m", weight: "74 kg", exp: "8 años", pts: "25.8", reb: "3.0", ast: "10.5", fg: "43.0%", p3: "37.0%", min: "35.5", aiTip: "Referente absoluto ofensivo en Washington con líneas de más de 9.5 asistencias." },
      { id: "1629028", name: "Deandre Ayton", number: "#2", pos: "C", height: "2.13 m", weight: "113 kg", exp: "8 años", pts: "16.5", reb: "11.2", ast: "1.8", fg: "58.0%", p3: "0.0%", min: "32.0", aiTip: "Consistente doble-doble de puntos y rebotes." },
      { id: "203114", name: "Khris Middleton", number: "#22", pos: "SF", height: "2.01 m", weight: "101 kg", exp: "14 años", pts: "15.5", reb: "4.5", ast: "4.8", fg: "48.5%", p3: "38.0%", min: "28.0", aiTip: "Veteranía anotadora saliendo de bloqueos indirectos." },
      { id: "1642259", name: "Alex Sarr", number: "#20", pos: "C / PF", height: "2.16 m", weight: "101 kg", exp: "2 años", pts: "14.0", reb: "8.0", ast: "2.2", fg: "48.5%", p3: "33.5%", min: "28.0", aiTip: "Top de tapones y protección defensiva del aro." },
      { id: "1630544", name: "Tre Mann", number: "#23", pos: "PG / SG", height: "1.91 m", weight: "86 kg", exp: "5 años", pts: "12.0", reb: "3.2", ast: "3.5", fg: "44.5%", p3: "37.5%", min: "24.0", aiTip: "Manejo ágil y tiro tras drible." }
    ]
  },

  // ---------------------------------------------------------------------------
  // CONFERENCIA OESTE
  // ---------------------------------------------------------------------------
  DEN: {
    nbaId: "1610612743", name: "Denver Nuggets", conf: "CONFERENCIA OESTE", division: "DIVISIÓN NOROESTE",
    city: "Denver, Colorado", arena: "Ball Arena", coach: "Michael Malone", championships: "1 (2023)",
    logoLocal: "imagenes/nuggets.png",
    players: [
      { id: "203999", name: "Nikola Jokić", number: "#15", pos: "C", height: "2.11 m", weight: "129 kg", exp: "11 años", pts: "26.5", reb: "12.5", ast: "9.2", fg: "58.5%", p3: "36.2%", min: "34.5", aiTip: "Mayor probabilidad de triple-doble de la liga (casi un 50% de apariciones)." },
      { id: "1627750", name: "Jamal Murray", number: "#27", pos: "PG", height: "1.93 m", weight: "98 kg", exp: "9 años", pts: "21.5", reb: "4.2", ast: "6.6", fg: "48.2%", p3: "42.0%", min: "32.0", aiTip: "Anotador decisivo en momentos de presión." },
      { id: "203932", name: "Aaron Gordon", number: "#50", pos: "PF", height: "2.03 m", weight: "107 kg", exp: "12 años", pts: "14.2", reb: "6.8", ast: "3.5", fg: "56.0%", p3: "30.0%", min: "31.5", aiTip: "Cortes directos por línea de fondo y asistencias recibidas de Jokić." },
      { id: "1631128", name: "Christian Braun", number: "#0", pos: "SG", height: "1.98 m", weight: "100 kg", exp: "4 años", pts: "13.5", reb: "4.8", ast: "2.2", fg: "49.0%", p3: "38.5%", min: "30.0", aiTip: "Intensidad en contraataque y tiros abiertos." },
      { id: "1629008", name: "Michael Porter Jr.", number: "#1", pos: "SF", height: "2.08 m", weight: "99 kg", exp: "7 años", pts: "17.0", reb: "7.0", ast: "1.5", fg: "48.8%", p3: "40.0%", min: "32.0", aiTip: "Especialista exterior con alta eficacia en catch-and-shoot." }
    ]
  },
  MIN: {
    nbaId: "1610612750", name: "Minnesota Timberwolves", conf: "CONFERENCIA OESTE", division: "DIVISIÓN NOROESTE",
    city: "Minneapolis, Minnesota", arena: "Target Center", coach: "Chris Finch", championships: "0",
    logoLocal: "imagenes/timberwolves.png",
    players: [
      { id: "1630162", name: "Anthony Edwards", number: "#5", pos: "SG", height: "1.93 m", weight: "102 kg", exp: "6 años", pts: "26.5", reb: "5.5", ast: "5.2", fg: "46.8%", p3: "36.5%", min: "35.5", aiTip: "Líneas de anotación individual con alta rentabilidad por encima de 25.5." },
      { id: "1630163", name: "LaMelo Ball", number: "#1", pos: "PG", height: "2.01 m", weight: "82 kg", exp: "6 años", pts: "23.5", reb: "5.8", ast: "8.6", fg: "44.0%", p3: "36.8%", min: "33.5", aiTip: "Dirección vertiginosa; favorece apuestas de ritmo y asistencias." },
      { id: "203944", name: "Julius Randle", number: "#30", pos: "PF", height: "2.03 m", weight: "113 kg", exp: "12 años", pts: "21.5", reb: "8.8", ast: "4.8", fg: "47.2%", p3: "34.0%", min: "34.0", aiTip: "Generador físico en la pintura con fuerte carga en tiros libres." },
      { id: "203497", name: "Rudy Gobert", number: "#27", pos: "C", height: "2.16 m", weight: "117 kg", exp: "13 años", pts: "13.5", reb: "12.8", ast: "1.2", fg: "66.0%", p3: "0.0%", min: "33.5", aiTip: "Líder en rebotes defensivos e intimidación bajo la canasta." },
      { id: "1630183", name: "Jaden McDaniels", number: "#3", pos: "SF", height: "2.06 m", weight: "84 kg", exp: "6 años", pts: "11.5", reb: "3.5", ast: "1.5", fg: "49.0%", p3: "35.0%", min: "30.0", aiTip: "Defensor perimetral de primer nivel sobre la estrella rival." }
    ]
  },
  OKC: {
    nbaId: "1610612760", name: "Oklahoma City Thunder", conf: "CONFERENCIA OESTE", division: "DIVISIÓN NOROESTE",
    city: "Oklahoma City, Oklahoma", arena: "Paycom Center", coach: "Mark Daigneault", championships: "1 (1979)",
    logoLocal: "imagenes/thunder.png",
    players: [
      { id: "1628983", name: "Shai Gilgeous-Alexander", number: "#2", pos: "PG", height: "1.98 m", weight: "88 kg", exp: "8 años", pts: "30.5", reb: "5.6", ast: "6.4", fg: "53.8%", p3: "35.8%", min: "34.2", aiTip: "Líder de regularidad; más de un 85% de partidos por encima de 25 puntos." },
      { id: "1631096", name: "Chet Holmgren", number: "#7", pos: "C / PF", height: "2.16 m", weight: "94 kg", exp: "3 años", pts: "17.4", reb: "8.4", ast: "2.6", fg: "53.5%", p3: "37.5%", min: "30.0", aiTip: "Líneas de tapones y triples desde la cabecera recomendadas." },
      { id: "1631114", name: "Jalen Williams", number: "#8", pos: "SG / SF", height: "1.96 m", weight: "96 kg", exp: "4 años", pts: "19.8", reb: "4.2", ast: "4.8", fg: "54.2%", p3: "43.0%", min: "31.8", aiTip: "Eficacia máxima en lanzamientos de media distancia." },
      { id: "1628392", name: "Isaiah Hartenstein", number: "#55", pos: "C", height: "2.13 m", weight: "113 kg", exp: "7 años", pts: "10.5", reb: "9.2", ast: "3.4", fg: "63.0%", p3: "0.0%", min: "27.0", aiTip: "Pívot pasador de élite y gran reboteador ofensivo." },
      { id: "1629652", name: "Luguentz Dort", number: "#5", pos: "SG / SF", height: "1.93 m", weight: "100 kg", exp: "7 años", pts: "11.2", reb: "3.8", ast: "1.6", fg: "44.0%", p3: "39.5%", min: "28.5", aiTip: "Especialista defensivo perimetral." }
    ]
  },
  POR: {
    nbaId: "1610612757", name: "Portland Trail Blazers", conf: "CONFERENCIA OESTE", division: "DIVISIÓN NOROESTE",
    city: "Portland, Oregon", arena: "Moda Center", coach: "Chauncey Billups", championships: "1 (1977)",
    logoLocal: "imagenes/blazers.png",
    players: [
      { id: "1629630", name: "Ja Morant", number: "#12", pos: "PG", height: "1.88 m", weight: "79 kg", exp: "7 años", pts: "26.5", reb: "5.8", ast: "8.5", fg: "48.0%", p3: "31.0%", min: "34.5", aiTip: "Llegada estelar a Portland; ritmo explosivo y penetraciones con alta tasa de faltas." },
      { id: "1630166", name: "Deni Avdija", number: "#8", pos: "SF / PF", height: "2.06 m", weight: "109 kg", exp: "6 años", pts: "15.5", reb: "7.2", ast: "4.0", fg: "50.0%", p3: "37.0%", min: "31.0", aiTip: "Polivalencia en el rebote defensivo y contraataques." },
      { id: "203924", name: "Jerami Grant", number: "#9", pos: "PF / SF", height: "2.01 m", weight: "95 kg", exp: "12 años", pts: "19.0", reb: "3.8", ast: "2.5", fg: "45.5%", p3: "40.0%", min: "32.5", aiTip: "Anotador exterior fiable desde la línea de tres." },
      { id: "1630703", name: "Scoot Henderson", number: "#00", pos: "PG", height: "1.91 m", weight: "88 kg", exp: "3 años", pts: "15.0", reb: "3.5", ast: "5.8", fg: "42.5%", p3: "34.5%", min: "28.0", aiTip: "Distribuidor vertical en situaciones de contraataque." },
      { id: "1631101", name: "Shaedon Sharpe", number: "#17", pos: "SG", height: "1.96 m", weight: "91 kg", exp: "4 años", pts: "18.0", reb: "4.5", ast: "3.0", fg: "44.5%", p3: "36.0%", min: "31.5", aiTip: "Gran capacidad atlética en definiciones aéreas." }
    ]
  },
  UTA: {
    nbaId: "1610612762", name: "Utah Jazz", conf: "CONFERENCIA OESTE", division: "DIVISIÓN NOROESTE",
    city: "Salt Lake City, Utah", arena: "Delta Center", coach: "Will Hardy", championships: "0",
    logoLocal: "imagenes/jazz.png",
    players: [
      { id: "1628374", name: "Lauri Markkanen", number: "#23", pos: "PF / SF", height: "2.13 m", weight: "109 kg", exp: "9 años", pts: "23.8", reb: "8.2", ast: "2.0", fg: "48.2%", p3: "40.0%", min: "33.5", aiTip: "Tirador letal de 7 pies; más de 3.0 triples por partido de media." },
      { id: "1642270", name: "Ace Bailey", number: "#1", pos: "SF", height: "2.06 m", weight: "91 kg", exp: "1 año", pts: "15.5", reb: "5.2", ast: "2.4", fg: "45.0%", p3: "36.0%", min: "28.0", aiTip: "Novato estelar con gran potencial anotador en 1 contra 1." },
      { id: "1641718", name: "Keyonte George", number: "#3", pos: "PG", height: "1.93 m", weight: "84 kg", exp: "3 años", pts: "16.0", reb: "3.2", ast: "6.2", fg: "42.0%", p3: "35.5%", min: "30.0", aiTip: "Director de juego agresivo en lanzamientos tras bloqueo." },
      { id: "1629012", name: "Collin Sexton", number: "#2", pos: "SG", height: "1.91 m", weight: "86 kg", exp: "8 años", pts: "18.5", reb: "2.6", ast: "4.8", fg: "49.0%", p3: "39.5%", min: "28.5", aiTip: "Penetraciones agresivas y alto porcentaje de acierto." }
    ]
  },
  GSW: {
    nbaId: "1610612744", name: "Golden State Warriors", conf: "CONFERENCIA OESTE", division: "DIVISIÓN PACÍFICO",
    city: "San Francisco, California", arena: "Chase Center", coach: "Steve Kerr", championships: "7 (Último: 2022)",
    logoLocal: "imagenes/gsw.png",
    players: [
      { id: "201939", name: "Stephen Curry", number: "#30", pos: "PG", height: "1.88 m", weight: "84 kg", exp: "17 años", pts: "26.2", reb: "4.5", ast: "5.2", fg: "45.2%", p3: "41.2%", min: "32.8", aiTip: "Proyección constante por encima de 4.0 triples convertidos." },
      { id: "204001", name: "Kristaps Porziņģis", number: "#8", pos: "C / PF", height: "2.18 m", weight: "109 kg", exp: "10 años", pts: "19.5", reb: "7.2", ast: "2.0", fg: "51.5%", p3: "38.0%", min: "29.5", aiTip: "Gran amenaza abriendo el campo junto a Curry; valor en tapones." },
      { id: "203110", name: "Draymond Green", number: "#23", pos: "PF", height: "1.98 m", weight: "104 kg", exp: "14 años", pts: "8.5", reb: "7.0", ast: "6.2", fg: "49.5%", p3: "38.5%", min: "27.0", aiTip: "Combinadas de Rebotes + Asistencias confiables." },
      { id: "201143", name: "Al Horford", number: "#42", pos: "C", height: "2.06 m", weight: "109 kg", exp: "19 años", pts: "8.0", reb: "5.5", ast: "2.8", fg: "48.0%", p3: "39.0%", min: "23.0", aiTip: "Tirador seguro de esquina y pase extra." },
      { id: "202710", name: "Jimmy Butler", number: "#22", pos: "SF", height: "2.01 m", weight: "104 kg", exp: "15 años", pts: "21.0", reb: "5.4", ast: "5.2", fg: "50.0%", p3: "39.5%", min: "33.5", aiTip: "Llegada clave a San Francisco; letal en finales ajustados y faltas recibidas." }
    ]
  },
  LAC: {
    nbaId: "1610612746", name: "LA Clippers", conf: "CONFERENCIA OESTE", division: "DIVISIÓN PACÍFICO",
    city: "Inglewood, California", arena: "Intuit Dome", coach: "Tyronn Lue", championships: "0",
    logoLocal: "imagenes/clippers.png",
    players: [
      { id: "202695", name: "Kawhi Leonard", number: "#2", pos: "SF", height: "2.01 m", weight: "102 kg", exp: "14 años", pts: "23.5", reb: "6.2", ast: "3.6", fg: "52.0%", p3: "41.0%", min: "34.0", aiTip: "Eficiencia pura en tiros de campo y recuperaciones defensivas." },
      { id: "201935", name: "James Harden", number: "#1", pos: "PG", height: "1.96 m", weight: "100 kg", exp: "17 años", pts: "20.2", reb: "5.5", ast: "9.2", fg: "43.5%", p3: "38.0%", min: "35.0", aiTip: "Principal motor ofensivo; valor alto en asistencias." },
      { id: "1627742", name: "Brandon Ingram", number: "#14", pos: "SF", height: "2.03 m", weight: "86 kg", exp: "10 años", pts: "21.2", reb: "5.0", ast: "5.2", fg: "49.0%", p3: "36.0%", min: "33.0", aiTip: "Anotador fluido en suspensión de media distancia." },
      { id: "203078", name: "Bradley Beal", number: "#3", pos: "SG", height: "1.93 m", weight: "94 kg", exp: "14 años", pts: "17.5", reb: "4.0", ast: "4.5", fg: "50.5%", p3: "41.0%", min: "31.5", aiTip: "Anotador perimetral complementario saliendo de bloqueos." },
      { id: "1629060", name: "Rui Hachimura", number: "#28", pos: "PF", height: "2.03 m", weight: "104 kg", exp: "7 años", pts: "13.2", reb: "5.0", ast: "1.2", fg: "52.0%", p3: "41.0%", min: "28.0", aiTip: "Efectivo desde las esquinas y transiciones rápidas." }
    ]
  },
  LAL: {
    nbaId: "1610612747", name: "Los Angeles Lakers", conf: "CONFERENCIA OESTE", division: "DIVISIÓN PACÍFICO",
    city: "Los Angeles, California", arena: "Crypto.com Arena", coach: "JJ Redick", championships: "17 (Último: 2020)",
    logoLocal: "imagenes/lakers.png",
    players: [
      { id: "1629029", name: "Luka Dončić", number: "#77", pos: "PG", height: "2.01 m", weight: "104 kg", exp: "8 años", pts: "33.8", reb: "9.5", ast: "9.8", fg: "49.0%", p3: "38.2%", min: "37.5", aiTip: "Nueva superestrella de los Lakers; líder de uso ofensivo con apuestas PTS+REB+AST siempre recomendadas." },
      { id: "1630559", name: "Austin Reaves", number: "#15", pos: "SG", height: "1.96 m", weight: "89 kg", exp: "5 años", pts: "16.5", reb: "4.2", ast: "5.5", fg: "48.5%", p3: "37.5%", min: "32.0", aiTip: "Generador secundario beneficiado por los pases de Luka." },
      { id: "1631117", name: "Walker Kessler", number: "#24", pos: "C", height: "2.13 m", weight: "111 kg", exp: "4 años", pts: "9.2", reb: "8.8", ast: "1.0", fg: "65.5%", p3: "0.0%", min: "24.5", aiTip: "Candidato a over de tapones (+2.5 por encuentro)." },
      { id: "1630570", name: "Quentin Grimes", number: "#5", pos: "SG", height: "1.96 m", weight: "93 kg", exp: "5 años", pts: "10.8", reb: "3.2", ast: "1.8", fg: "44.0%", p3: "39.0%", min: "26.0", aiTip: "Tirador de tres puntos y defensor de guardia rival." },
      { id: "1629680", name: "Matisse Thybulle", number: "#4", pos: "SF / SG", height: "1.96 m", weight: "91 kg", exp: "7 años", pts: "6.5", reb: "2.5", ast: "1.2", fg: "42.0%", p3: "35.0%", min: "22.0", aiTip: "Especialista en robos y deflexiones defensivas." }
    ]
  },
  PHX: {
    nbaId: "1610612756", name: "Phoenix Suns", conf: "CONFERENCIA OESTE", division: "DIVISIÓN PACÍFICO",
    city: "Phoenix, Arizona", arena: "Footprint Center", coach: "Mike Budenholzer", championships: "0",
    logoLocal: "imagenes/suns.png",
    players: [
      { id: "1626164", name: "Devin Booker", number: "#1", pos: "SG / PG", height: "1.98 m", weight: "93 kg", exp: "11 años", pts: "27.5", reb: "4.8", ast: "7.2", fg: "49.5%", p3: "37.0%", min: "36.2", aiTip: "Anotador absoluto de tres niveles; cuotas altas en anotación individual." },
      { id: "1628970", name: "Miles Bridges", number: "#0", pos: "PF", height: "2.01 m", weight: "102 kg", exp: "7 años", pts: "19.0", reb: "6.8", ast: "3.0", fg: "46.2%", p3: "35.5%", min: "34.0", aiTip: "Aporte atlético y juego interior físico." },
      { id: "1631109", name: "Mark Williams", number: "#5", pos: "C", height: "2.13 m", weight: "110 kg", exp: "4 años", pts: "12.5", reb: "9.5", ast: "1.0", fg: "64.5%", p3: "0.0%", min: "26.5", aiTip: "Protección de aro y capturas seguras de rebote." },
      { id: "1628415", name: "Dillon Brooks", number: "#9", pos: "SF", height: "1.98 m", weight: "102 kg", exp: "9 años", pts: "13.2", reb: "3.5", ast: "1.8", fg: "44.0%", p3: "36.0%", min: "30.0", aiTip: "Intensidad defensiva al límite provocando pérdidas rivales." },
      { id: "1630224", name: "Jalen Green", number: "#4", pos: "SG", height: "1.93 m", weight: "84 kg", exp: "5 años", pts: "20.2", reb: "5.0", ast: "3.5", fg: "43.8%", p3: "35.0%", min: "32.5", aiTip: "Rachas de anotación explosivas ante quintetos exteriores pequeños." }
    ]
  },
  SAC: {
    nbaId: "1610612758", name: "Sacramento Kings", conf: "CONFERENCIA OESTE", division: "DIVISIÓN PACÍFICO",
    city: "Sacramento, California", arena: "Golden 1 Center", coach: "Mike Brown", championships: "1 (1951)",
    logoLocal: "imagenes/kings.png",
    players: [
      { id: "1627734", name: "Domantas Sabonis", number: "#10", pos: "C", height: "2.08 m", weight: "109 kg", exp: "10 años", pts: "19.5", reb: "13.5", ast: "8.0", fg: "59.8%", p3: "37.5%", min: "35.5", aiTip: "Líder de dobles y triples-dobles de la conferencia." },
      { id: "203897", name: "Zach LaVine", number: "#8", pos: "SG", height: "1.96 m", weight: "91 kg", exp: "12 años", pts: "21.5", reb: "4.8", ast: "4.0", fg: "46.5%", p3: "38.2%", min: "34.0", aiTip: "Amenaza exterior letal para complementar la pintura de Sabonis." },
      { id: "201942", name: "DeMar DeRozan", number: "#10", pos: "SF", height: "1.98 m", weight: "100 kg", exp: "17 años", pts: "22.0", reb: "4.1", ast: "5.2", fg: "48.5%", p3: "33.5%", min: "36.0", aiTip: "Especialista en media distancia y tiros libres." },
      { id: "1630168", name: "Keegan Murray", number: "#13", pos: "PF", height: "2.03 m", weight: "102 kg", exp: "4 años", pts: "15.0", reb: "5.6", ast: "1.6", fg: "45.5%", p3: "37.0%", min: "33.0", aiTip: "Tirador de tres puntos y defensor multiposicional." },
      { id: "1627732", name: "Ben Simmons", number: "#25", pos: "PG / PF", height: "2.08 m", weight: "109 kg", exp: "9 años", pts: "7.5", reb: "7.0", ast: "6.5", fg: "58.0%", p3: "0.0%", min: "25.0", aiTip: "Creador de juego en transición y presencia en rebote defensivo." }
    ]
  },
  DAL: {
    nbaId: "1610612742", name: "Dallas Mavericks", conf: "CONFERENCIA OESTE", division: "DIVISIÓN SUROESTE",
    city: "Dallas, Texas", arena: "American Airlines Center", coach: "Jason Kidd", championships: "1 (2011)",
    logoLocal: "imagenes/mavs.png",
    players: [
      { id: "203076", name: "Anthony Davis", number: "#3", pos: "C / PF", height: "2.08 m", weight: "115 kg", exp: "14 años", pts: "25.5", reb: "12.5", ast: "3.5", fg: "56.0%", p3: "28.0%", min: "35.5", aiTip: "Nuevo pilar interior de Dallas; dominio absoluto de pintura y rebotes." },
      { id: "202681", name: "Kyrie Irving", number: "#11", pos: "PG", height: "1.88 m", weight: "88 kg", exp: "15 años", pts: "25.8", reb: "4.9", ast: "5.5", fg: "49.8%", p3: "41.5%", min: "35.0", aiTip: "Finalizador infalible en cuartos decisivos con alto porcentaje de tiro." },
      { id: "1642258", name: "Zaccharie Risacher", number: "#10", pos: "SF", height: "2.06 m", weight: "95 kg", exp: "2 años", pts: "14.2", reb: "4.2", ast: "2.0", fg: "46.0%", p3: "38.0%", min: "28.0", aiTip: "Tirador liberado tras las penetraciones de Kyrie." },
      { id: "1630583", name: "Santi Aldama", number: "#7", pos: "PF", height: "2.13 m", weight: "98 kg", exp: "5 años", pts: "12.8", reb: "6.5", ast: "2.4", fg: "45.5%", p3: "36.8%", min: "27.5", aiTip: "Versatilidad abriendo el campo con triples y rebotes defensivos." },
      { id: "1630230", name: "Naji Marshall", number: "#13", pos: "SF", height: "2.01 m", weight: "100 kg", exp: "6 años", pts: "9.5", reb: "4.0", ast: "2.2", fg: "46.0%", p3: "38.0%", min: "23.0", aiTip: "Intensidad física y trabajo defensivo sobre aleros rivales." }
    ]
  },
  HOU: {
    nbaId: "1610612745", name: "Houston Rockets", conf: "CONFERENCIA OESTE", division: "DIVISIÓN SUROESTE",
    city: "Houston, Texas", arena: "Toyota Center", coach: "Ime Udoka", championships: "2 (Último: 1995)",
    logoLocal: "imagenes/rockets.png",
    players: [
      { id: "1630578", name: "Alperen Şengün", number: "#28", pos: "C", height: "2.11 m", weight: "110 kg", exp: "5 años", pts: "21.5", reb: "9.8", ast: "5.5", fg: "54.0%", p3: "30.0%", min: "33.0", aiTip: "Pívot pasador de élite; proyecciones altas de más de 4.5 asistencias." },
      { id: "201142", name: "Kevin Durant", number: "#35", pos: "SF / PF", height: "2.11 m", weight: "109 kg", exp: "18 años", pts: "26.8", reb: "6.6", ast: "5.0", fg: "52.5%", p3: "41.5%", min: "36.5", aiTip: "Fichaje estelar de Houston; anotación letal en media distancia y triples." },
      { id: "1627832", name: "Fred VanVleet", number: "#5", pos: "PG", height: "1.83 m", weight: "89 kg", exp: "10 años", pts: "16.5", reb: "3.7", ast: "7.8", fg: "42.0%", p3: "38.5%", min: "35.0", aiTip: "Director táctico con excelente control de pérdidas." },
      { id: "1641708", name: "Amen Thompson", number: "#1", pos: "SG / SF", height: "2.01 m", weight: "91 kg", exp: "3 años", pts: "13.5", reb: "6.8", ast: "3.5", fg: "53.5%", p3: "25.0%", min: "28.0", aiTip: "Potencia atlética en transiciones y rebotes ofensivos." },
      { id: "1631095", name: "Jabari Smith Jr.", number: "#10", pos: "PF", height: "2.11 m", weight: "100 kg", exp: "4 años", pts: "14.0", reb: "7.5", ast: "1.6", fg: "46.0%", p3: "37.0%", min: "30.5", aiTip: "Tirador interior abriendo espacios en la esquina." }
    ]
  },
  MEM: {
    nbaId: "1610612763", name: "Memphis Grizzlies", conf: "CONFERENCIA OESTE", division: "DIVISIÓN SUROESTE",
    city: "Memphis, Tennessee", arena: "FedExForum", coach: "Taylor Jenkins", championships: "0",
    logoLocal: "imagenes/grizzlies.png",
    players: [
      { id: "1630217", name: "Desmond Bane", number: "#22", pos: "SG", height: "1.96 m", weight: "97 kg", exp: "6 años", pts: "24.0", reb: "4.8", ast: "5.5", fg: "46.8%", p3: "38.8%", min: "34.5", aiTip: "Líder anotador de Memphis; volumen elevado de tiros de tres." },
      { id: "1628991", name: "Jaren Jackson Jr.", number: "#13", pos: "PF / C", height: "2.08 m", weight: "110 kg", exp: "8 años", pts: "22.5", reb: "6.0", ast: "2.2", fg: "45.5%", p3: "34.0%", min: "32.0", aiTip: "Amenaza constante de tapones y tiros de tres puntos." },
      { id: "203924", name: "Jerami Grant", number: "#9", pos: "SF", height: "2.01 m", weight: "95 kg", exp: "12 años", pts: "18.5", reb: "3.8", ast: "2.4", fg: "45.0%", p3: "39.5%", min: "31.5", aiTip: "Anotador perimetral consistente en tiros de campo." },
      { id: "1630191", name: "Isaiah Stewart", number: "#28", pos: "C", height: "2.03 m", weight: "113 kg", exp: "6 años", pts: "10.5", reb: "7.8", ast: "1.6", fg: "49.0%", p3: "37.5%", min: "27.0", aiTip: "Intensidad bajo los tableros y defensa física." },
      { id: "1642271", name: "Cam Boozer", number: "#12", pos: "PF", height: "2.06 m", weight: "104 kg", exp: "1 año", pts: "14.0", reb: "7.0", ast: "2.5", fg: "48.5%", p3: "35.0%", min: "26.5", aiTip: "Novato de gran impacto en rebotes y juego al poste." }
    ]
  },
  NOP: {
    nbaId: "1610612740", name: "New Orleans Pelicans", conf: "CONFERENCIA OESTE", division: "DIVISIÓN SUROESTE",
    city: "New Orleans, Louisiana", arena: "Smoothie King Center", coach: "Willie Green", championships: "0",
    logoLocal: "imagenes/pelicans.png",
    players: [
      { id: "1629627", name: "Zion Williamson", number: "#1", pos: "PF", height: "1.98 m", weight: "129 kg", exp: "7 años", pts: "24.0", reb: "6.5", ast: "5.2", fg: "58.0%", p3: "25.0%", min: "32.0", aiTip: "Dominio absoluto en la zona restringida; más del 75% en over de tiros de 2 anotados." },
      { id: "1630530", name: "Trey Murphy III", number: "#25", pos: "SF", height: "2.03 m", weight: "93 kg", exp: "5 años", pts: "17.5", reb: "4.8", ast: "2.2", fg: "46.0%", p3: "40.0%", min: "32.0", aiTip: "Tirador de largo alcance con más de 3 triples por partido." },
      { id: "1627749", name: "Dejounte Murray", number: "#5", pos: "PG", height: "1.96 m", weight: "82 kg", exp: "9 años", pts: "21.5", reb: "5.2", ast: "6.8", fg: "46.0%", p3: "36.5%", min: "34.5", aiTip: "Líder director y generador en transiciones rápidas." },
      { id: "1630529", name: "Herb Jones", number: "#2", pos: "SF / SG", height: "2.01 m", weight: "93 kg", exp: "5 años", pts: "11.5", reb: "3.8", ast: "2.6", fg: "49.5%", p3: "41.5%", min: "31.5", aiTip: "Defensor del año perimetral; cuotas muy rentables en robos de balón." },
      { id: "1631097", name: "Bennedict Mathurin", number: "#00", pos: "SG", height: "1.96 m", weight: "95 kg", exp: "4 años", pts: "16.0", reb: "3.8", ast: "2.0", fg: "45.5%", p3: "36.5%", min: "27.5", aiTip: "Anotador agresivo atacando el aro." }
    ]
  },
  SAS: {
    nbaId: "1610612759", name: "San Antonio Spurs", conf: "CONFERENCIA OESTE", division: "DIVISIÓN SUROESTE",
    city: "San Antonio, Texas", arena: "Frost Bank Center", coach: "Gregg Popovich", championships: "5 (Último: 2014)",
    logoLocal: "imagenes/spurs.png",
    players: [
      { id: "1641705", name: "Victor Wembanyama", number: "#1", pos: "C", height: "2.24 m", weight: "95 kg", exp: "3 años", pts: "24.5", reb: "11.8", ast: "4.5", fg: "48.8%", p3: "35.0%", min: "32.5", aiTip: "Líder de tapones de la NBA (3.8+ de media); cuotas en tapones y rebotes muy recomendadas." },
      { id: "1628368", name: "De'Aaron Fox", number: "#5", pos: "PG", height: "1.91 m", weight: "84 kg", exp: "9 años", pts: "25.8", reb: "4.5", ast: "6.5", fg: "47.0%", p3: "37.0%", min: "35.0", aiTip: "Llegada estelar a los Spurs; velocidad deslumbrante en pick-and-roll con Wembanyama." },
      { id: "1642264", name: "Stephon Castle", number: "#5", pos: "SG / PG", height: "1.98 m", weight: "98 kg", exp: "2 años", pts: "13.5", reb: "4.2", ast: "3.8", fg: "46.0%", p3: "34.0%", min: "28.0", aiTip: "Defensa presionante y penetraciones directas." },
      { id: "1642272", name: "Dylan Harper", number: "#2", pos: "PG / SG", height: "1.98 m", weight: "95 kg", exp: "1 año", pts: "14.2", reb: "3.8", ast: "4.2", fg: "45.5%", p3: "36.5%", min: "26.5", aiTip: "Generador novato con gran capacidad de toma de decisiones." },
      { id: "202699", name: "Tobias Harris", number: "#12", pos: "PF", height: "2.03 m", weight: "102 kg", exp: "15 años", pts: "15.0", reb: "5.8", ast: "2.5", fg: "48.0%", p3: "36.0%", min: "29.0", aiTip: "Anotación de apoyo y veterano de vestuario." }
    ]
  }
};

// =============================================================================
// LÓGICA DE INICIALIZACIÓN Y RENDERIZADO
// =============================================================================
document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const teamId = (urlParams.get("id") || "BOS").toUpperCase();

  loadTeamData(teamId);
  setupModalEvents();
});

function loadTeamData(teamId) {
  const team = nbaTeamsFull[teamId] || nbaTeamsFull["BOS"];

  // 1. Textos y encabezados del Banner
  document.getElementById("team-name-hero").textContent = team.name;
  document.getElementById("team-conf-badge").textContent = team.conf;
  document.getElementById("team-div-badge").textContent = team.division;
  document.getElementById("team-city").textContent = team.city;
  document.getElementById("team-arena").textContent = team.arena;
  document.getElementById("team-coach").textContent = team.coach;
  document.getElementById("team-championships").textContent = team.championships;

  // 2. Logo oficial con respaldo SVG oficial de la NBA
  const logoImg = document.getElementById("team-logo-hero");
  const officialLogo = `https://cdn.nba.com/logos/nba/${team.nbaId}/primary/L/logo.svg`;
  logoImg.src = team.logoLocal || officialLogo;
  logoImg.onerror = () => { logoImg.src = officialLogo; };

  // 3. Renderizar la plantilla oficial de 5 jugadores
  const rosterGrid = document.getElementById("roster-grid-container");
  rosterGrid.innerHTML = "";

  team.players.forEach(p => {
    const tile = document.createElement("div");
    tile.className = "player-tile";
    
    // Foto oficial con fondo transparente desde el CDN oficial de la NBA
    const nbaHeadshot = `https://cdn.nba.com/headshots/nba/latest/260x190/${p.id}.png`;
    const photoSrc = p.img || nbaHeadshot;

    tile.innerHTML = `
      <div class="tile-photo-wrap">
        <img src="${photoSrc}" alt="${p.name}" onerror="this.src='https://placehold.co/100x100/161c2d/ffffff?text=${encodeURIComponent(p.name.split(' ').pop())}';">
      </div>
      <div class="tile-info">
        <div class="tile-name">${p.name}</div>
        <div class="tile-sub">${p.number} • ${p.pos}</div>
        <div class="tile-stat">${p.pts} PTS | ${p.reb} REB | ${p.ast} AST</div>
      </div>
    `;

    tile.addEventListener("click", () => openPlayerModal(p, team.name));
    rosterGrid.appendChild(tile);
  });
}

function openPlayerModal(player, teamName) {
  const modal = document.getElementById("player-modal");

  document.getElementById("modal-player-name").textContent = player.name;
  document.getElementById("modal-player-team-role").textContent = `${teamName} • ${player.pos}`;
  document.getElementById("modal-player-num-pos").textContent = `${player.number} ${player.pos}`;
  document.getElementById("modal-height").textContent = player.height;
  document.getElementById("modal-weight").textContent = player.weight;
  document.getElementById("modal-exp").textContent = player.exp;

  document.getElementById("stat-pts").textContent = player.pts;
  document.getElementById("stat-reb").textContent = player.reb;
  document.getElementById("stat-ast").textContent = player.ast;
  document.getElementById("stat-fg").textContent = player.fg;
  document.getElementById("stat-3p").textContent = player.p3;
  document.getElementById("stat-min").textContent = player.min;

  document.getElementById("modal-ai-tip").textContent = player.aiTip;

  const modalImg = document.getElementById("modal-player-img");
  const nbaHeadshot = `https://cdn.nba.com/headshots/nba/latest/1040x760/${player.id}.png`;
  const photoSrc = player.img || nbaHeadshot;

  modalImg.src = photoSrc;
  modalImg.onerror = () => {
    modalImg.src = `https://placehold.co/120x120/161c2d/ffffff?text=${encodeURIComponent(player.name.split(' ').pop())}`;
  };

  modal.style.display = "flex";
}

function setupModalEvents() {
  const modal = document.getElementById("player-modal");
  const closeBtn = document.getElementById("modal-close");

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
}