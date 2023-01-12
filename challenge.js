/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
 var findRightInterval = function(intervals) {
    const n = intervals.length;

const start_index_arr = intervals
  .map((e, i) => [e[0], i])
  .sort((a, b) => a[0] - b[0]);
 };
const lessThan = (a, b) => a < b; // bs & lb // 4ge
