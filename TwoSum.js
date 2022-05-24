var twoSum = function (nums, target) {
  let total = {}
  for (let i = 0; i < nums.length; i++) {
    if (target - nums[i] in total) {
      return [total[target - nums[i]], i];
    } else {
      total[nums[i]] = i;
    }
  }
  return []
}