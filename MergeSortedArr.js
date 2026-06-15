var merge = function(nums1, m, nums2, n) {
    let filterArr = nums1.filter((x) => x !== 0);
    //filter method to remove the 0's 
    nums1 = [...filterArr, ...nums2]
    //using the spread operator to merge the two arrays 
    nums1 = nums1.sort((a, b) => a - b)
    //sort method to put the order in ascending order 
    return nums1
};

merge(nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3)