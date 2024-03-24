/**
 * @param {number[]} nums
 * @return {string}
 */
var triangleType = function(nums) {

// let k=0;
//  for (let i=0;i<nums.length;i++){
//    for (let j=i+1;j<nums.length;j++){
//      if(nums[i]==nums[j]){
//        k+=1;
//      }}}
// console.log(k);

//      if (k=3){
//        return('equilateral')
//      }else if (k=2){
//        return('isosceles')
//      }else return ('scalene');
     
  if ((nums[0]==nums[1])&& (nums[1]==nums[2]))
  {
     return('equilateral')
  }else  if (nums[0]===nums[1] || nums[1]===nums[2] || nums[0]==nums[2])
  {
     return('isosceles')
  }else return ('scalene');


    
};

describe('Type of Triangle', () => {

  it('Type of Triangle equilateral', () => {
    const returned = triangleType([2,2,2]);
    expect(returned).toEqual('equilateral');
  });

   it('Type of Triangle isosceles', () => {
    const returned = triangleType([2,3,3]);
    expect(returned).toEqual('isosceles');
  });

  it('Type of Triangle scalene', () => {
    const returned = triangleType([1,2,3]);
    expect(returned).toEqual('scalene');
  });
});
