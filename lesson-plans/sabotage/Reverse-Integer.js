/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let num=x.toString();
    
    let result="";
  
    for (let i=num.length-1;i>=0;i--){
      if (num[i]==="-"){
        return (Number(result)*-1);
      }else{
      result+=num[i];}
    }
    return Number(result);
};


describe('reverse integer test', () => {
  it('test pass for 123 ', () => {
    const returned = reverse(123);
    expect(returned).toEqual(321);
  });

  it('test pass for -123 ', () => {
    const returned =reverse(-123);
    expect(returned).toEqual(-321);
  });
});
