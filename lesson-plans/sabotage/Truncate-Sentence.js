/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
  /**
 split= convert the string into an array using spaces or anything ('');
 slice= give new array counting from (a,b) a is the beginning number and b is the end 
 join = do the opposite of split is convert the array into a string using what in ('') to devide them  
 */
   return s.split(" ").slice(0,k).join(' ');

};


  describe('truncate Sentence test', () => {

  it('test pass for k =4', () => {
    const returned = truncateSentence("Hello how are you Contestant",4)
    expect(returned).toEqual("Hello how are you");
  });

   it('test pass dor k=3', () => {
    const returned = truncateSentence("chopper is not a tanuki",3)
    expect(returned).toEqual("chopper is not");
  });
  
  
});