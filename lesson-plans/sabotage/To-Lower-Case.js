/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
    return s.toLowerCase();
};


describe(' To Lower Case test ', () => {

    it('test pass   ', () => {
    const returned = toLowerCase("Hello")
    expect(returned).toEqual("hello");
  });
  
   it('test pass   ', () => {
    const returned = toLowerCase("LOVELY")
    expect(returned).toEqual("lovely");
  });
});