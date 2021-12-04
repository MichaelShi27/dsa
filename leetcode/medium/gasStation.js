// 134. Gas Station
// https://leetcode.com/problems/gas-station/

// O(3n) time, O(1) space
const canCompleteCircuit = (stations, costs) => {
  if (getArraySum(costs) > getArraySum(stations)) return -1;

  let sum = 0;
  let startIdx = 0;
  for (let i = 0; i < costs.length; i++) {
    sum += stations[i] - costs[i];
    if (sum < 0) {
      sum = 0;
      startIdx = i + 1;
    }
  }
  return startIdx < costs.length ? startIdx : -1;
};

const getArraySum = arr => arr.reduce( (sum, cur) => sum += cur );

// same as below solution, but not using diffs array since we can calculate diffs as we go
const canCompleteCircuit = (stations, costs) => {
  for (let i = 0; i < costs.length; i++) {
    let tank = 0;
    for (let j = i, ct = 0; ct <= costs.length; j++, ct++) {
      if (j === costs.length) j = 0;
      if (j === i && ct) return i;

      tank += stations[j] - costs[j];
      if (tank < 0) break;
    }
  }
  return -1;
};

// passes, but very slow lol (naive approach), O(n^2)
const canCompleteCircuit = (stations, costs) => {
  const diffs = [];
  for (let i = 0; i < costs.length; i++)
    diffs[i] = stations[i] - costs[i];

  for (let i = 0; i < diffs.length; i++) {
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
