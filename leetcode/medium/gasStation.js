// 134. Gas Station
// https://leetcode.com/problems/gas-station/

// passes, but very slow lol (naive approach), O(n^2)
const canCompleteCircuit = (stations, costs) => {
  const diffs = [];
  for (let i = 0; i < costs.length; i++)
    diffs[i] = stations[i] - costs[i];

  for (let i = 0; i < diffs.length; i++) {
    if (diffs[i] < 0) continue;
    let tank = 0;
    for (let j = i, ct = 0; ct <= diffs.length; j++, ct++) {
      if (j === diffs.length) j = 0;
      if (j === i && ct) return i;

      tank += diffs[j];
      if (tank < 0) break;
    }
  }
  return -1;
};

// passes, but very slow lol (alternate naive approach), O(n^2)
const canCompleteCircuit = (stations, costs) => {
  for (let i = 0; i < stations.length; i++) {
    let tank = 0;

    for (let j = i, ct = 0; ct <= stations.length; j++, ct++) {
      if (j === stations.length) j = 0;
      if (j === i && ct) return i;

      tank += stations[j];
      if (costs[j] > tank) break;
      tank -= costs[j];
    }
  }
  return -1;
};
