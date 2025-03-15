[LeetCode - The World's Leading Online Programming Learning Platform](https://leetcode.com/problems/running-sum-of-1d-array/)

주어진 배열 nums의 누계 합(running sum)을 `runningSum[i] = sum(nums[0]...nums[i])`으로 정의합니다. nums의 누계 합을 반환합니다.

**Example 1:**

```
Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
```

**Example 2:**

```
Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
```

**Example 3:**

```
Input: nums = [3,1,2,10,1]
Output: [3,4,6,16,17]
```

```jsx
const runningSum = (nums) => {
  // do something
};

console.log(runningSum([1, 1, 1, 1, 1])); // [1, 2, 3, 4, 5]
console.log(runningSum([1, 2, 3, 4])); // [1, 3, 6, 10]
console.log(runningSum([3, 1, 2, 10, 1])); // [3, 4, 6, 16, 17]
```
