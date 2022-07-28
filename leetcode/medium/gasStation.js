// 134. Gas Station
// https://leetcode.com/problems/gas-station/


// from NeetCode: https://www.youtube.com/watch?v=lJwbPZGo05A
// O(2n) time, O(1) space
const canCompleteCircuit = (stations, costs) => {
  let tank = 0;
  // check if we have enough gas to make a cycle at all
  for (let i = 0; i < costs.length; i++)
    tank += stations[i] - costs[i];
  if (tank < 0) return -1;

  tank = 0;
  let startIdx = 0;
  for (let i = 0; i < costs.length; i++) {
    tank += stations[i] - costs[i];
    if (tank < 0) {
      tank = 0;
      startIdx = i + 1;
    } // if tank stays pos, we just keep moving i to end of arr. we don't need to move i back to start to check bc we know a solution exists thanks to 1st if statement
  }
  return startIdx;
};

// similar to above, but one-pass instead of two - we do both loops in above approach at the same time
const canCompleteCircuit = (stations, costs) => {
  let start = 0;
  let total = 0;
  let tank = 0;

  for (let i = 0; i < stations.length; i++) {
    tank += stations[i] - costs[i];
    total += stations[i] - costs[i];
    if (tank < 0) {
      start = i + 1;
      tank = 0;
    }
  }
  return (total < 0) ? -1 : start;
};

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

// one of my old solutions (performs decently)
const canCompleteCircuit = (stations, costs) => {
  let start = 0;
  let cur = 0;
  let ct = 0;
  let tank = 0;
  const len = costs.length;

  while (start < len && ct !== len) {
    let nextStationIdx = cur + 1 === len ? 0 : cur + 1;

    const diff = stations[cur] - costs[cur];
    if ((tank + diff) >= 0) {
      tank += diff;
      ct++;
      cur = nextStationIdx;
    } else {
      tank += costs[start] - stations[start];
      ct--;
      start++;
    }
  }
  return ct === len ? start : -1;
};

// one of old solutions (used to pass, but no longer does with massive input arrays - exceeds time limit)
const canCompleteCircuit = (stations, costs) => {
  let start = 0;
  let cur = 0;
  let tank = 0;
  const len = stations.length;
  let startHasMoved = false;

  while (true) {
    const diff = stations[cur] - costs[cur];
    if ((tank + diff) >= 0) {
      tank += diff;
      cur++;
    } else {
      start++;
      cur = start;
      tank = 0;
      startHasMoved = true;
    }
    if (start === len) start = 0;
    if (cur === len) cur = 0;
    if (startHasMoved && start === 0) return -1; // if we've made a complete circle w/o finding solution
    if ( (tank + stations[cur] - costs[cur]) >= 0 ) {
      if (
        start === cur + 1 ||
        ( start === 0 && cur === len - 1 ) // we've reached the end of the arr w/o ever moving start
      ) return start;
    }
  }
};
