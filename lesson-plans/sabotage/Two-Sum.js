/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let result=[];

for (let i=0;i<nums.length;i++){
  for(let j=i+1;j<nums.length;j++){
    if ((nums[i]+nums[j]) == target){
      result.push(i,j);
      return result
    }

  }
}

     
};




describe('Two Sum test ', () => {

    it('test pass for 9  ', () => {
    const returned = twoSum([2,7,11,15],9)
    expect(returned).toEqual([0,1]);
  });

   it('test pass for 6 ', () => {
    const returned = twoSum([3,2,4],6)
    expect(returned).toEqual([1,2]);
  });

   it('test pass for 6  ', () => {
    const returned = twoSum([3,3],6)
    expect(returned).toEqual([0,1]);
  });

});