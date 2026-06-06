/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const memoria = {};
    for (let i = 0; i < nums.length; i++) {
        const numeroatual = nums[i];
    const complemento = target - numeroatual;
    if (memoria[complemento] !== undefined) {
        return [memoria[complemento], i];
    }
    memoria[numeroatual] = i;
    }   
}