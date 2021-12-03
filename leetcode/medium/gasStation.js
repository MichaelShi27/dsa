// 134. Gas Station
// https://leetcode.com/problems/gas-station/


// passes, but very slow lol (naive approach)
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
