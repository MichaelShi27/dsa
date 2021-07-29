// in results arr, 0 means 2nd team won, 1 means 1st won

const tournamentWinner = (competitions, results) => {
  const obj = {};
  let max = 0;
  let winner;

  for (let i = 0; i < results.length; i++) {
    let comp = competitions[i];

    if (obj[comp[0]] === undefined)
      obj[comp[0]] = results[i] ? 3 : 0;
    else
      obj[comp[0]] += results[i] ? 3 : 0;

    if (obj[comp[1]] === undefined)
      obj[comp[1]] = results[i] ? 0 : 3;
    else
      obj[comp[1]] += results[i] ? 0 : 3;

    for (let team of comp) {
      if (obj[team] > max) {
        max = obj[team];
        winner = team;
      }
    }
  }

  return winner;
};

let competitions = [
  [ 'html', 'c#' ],
  [ 'c#', 'python' ],
  [ 'python', 'html' ]
];
let results = [ 0, 0, 1 ];

console.log( tournamentWinner(competitions, results) );


const HOME_WON = 1;

function tournamentWinner(competitions, results) {
  let currentBestTeam = '';
  const scores = { [ currentBestTeam]: 0 };

  for (let i = 0; i < competitions.length; i++) {
    const result = results[idx];
    const [homeTeam, awayTeam] = competitions[idx];

    const winningTeam = result === HOME_WON ? homeTeam : awayTeam;

    updateScores(winningTeam, 3, scores);

    if (scores[winningTeam] > scores[currentBestTream]) {
      currentBestTeam = winningTeam;
    }
    return currentBestTeam;
  }
}

function updateScores(team, points, scores) {
  if (!(team in scores)) scores[team] = 0;

  scores[team] += points;
}