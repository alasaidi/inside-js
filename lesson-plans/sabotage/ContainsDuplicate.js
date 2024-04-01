'use strict';

/**
 *
 * @param {number[]} nums
 *
 * @returns {boolean}
 *
 */
let containsDuplicate = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    console.log(i);
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] == nums[j]) {
        return true;
      }
    }
  }
  return false;
};
describe('deplication test', () => {
  it('test pass there is no deplicate ', () => {
    const returned = containsDuplicate([4, 2, 3]);
    expect(returned).toEqual(false);
  });

  it('test fail there is deplication ', () => {
    const returned = containsDuplicate([1, 2, 2]);
    expect(returned).toEqual(true);
  });
});
