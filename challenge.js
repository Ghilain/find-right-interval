/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
 var findRightInterval = function(intervals) {
    const n = intervals.length;

const start_index_arr = intervals
  .map((e, i) => [e[0], i])
  .sort((a, b) => a[0] - b[0]);
const getEleStartValue = (i) => start_index_arr[i][0]; // to compare to target

const ans = [];
for (let [, end] of intervals) {
const idx = blu_midValFromFunc(lessThan, getEleStartValue, end, 0, start_index_arr.length - 1);
  ans.push(idx === n ? -1 : start_index_arr[idx][1]);
}
return ans;
};

const lessThan = (a, b) => a < b; // bs & lb // 4ge
const blu_midValFromFunc = (compare, getArrVal, target, left, right) => {
while (left < right) {
  const mid = left + Math.trunc((right - left) / 2);
  if (compare(getArrVal(mid), target)) left = mid + 1;
  else right = mid;
}
return compare(getArrVal(left), target) ? left + 1 : left;
};