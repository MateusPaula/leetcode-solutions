/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let array = [];
    let acc = init;
    nums.forEach((num) => {
        const response = fn(acc, num);
        array.push(response);
        acc = response;
    })
    return acc;
};