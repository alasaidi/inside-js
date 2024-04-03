/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    debugger
for (let i=0; i<s.length;i++){
  if((s[i]==="(" && s[i+1]!==")")|| (s[i]==="{" && s[i+1]!=="}")||(s[i]==="[" && s[i+1]!=="]") ){
    return false
  }

}
return true
};



describe('Valid Parentheses test', () => {
  it('test pass  ', () => {
    const returned =isValid("()[]{}");
    expect(returned).toEqual(true);
  });

  it('test pass ', () => {
    const returned = isValid("(]");
    expect(returned).toEqual(false);
  });
});