/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {

  let num=x.toString();
  let j=num.length -1
    for (let i=0;i<j; i++){
        if (num[i]!==num[j]){
          return false
       
      }
       j--
    }
    return true;
};


describe('isPalindrome test', () => {
  it('test pass is Palindrome for 1112111 ', () => {
    const returned = isPalindrome(1112111);
    expect(returned).toEqual(true);
  });

  it('test pass is not Palindrome for 221 ', () => {
    const returned = isPalindrome(221);
    expect(returned).toEqual(false);
  });
});