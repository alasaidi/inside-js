/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    
    const ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    const tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    const hrns = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    const ths = ["", "M", "MM", "MMM"];
    return ths[Math.floor(num / 1000)] + hrns[Math.floor((num % 1000) / 100)] + tens[Math.floor((num % 100) / 10)] + ones[num % 10];

};





describe(' Integer to Roman test ', () => {

    it('test pass 3  ', () => {
    const returned = intToRoman(3)
    expect(returned).toEqual("III");
  });

   it('test pass  58 ', () => {
    const returned = intToRoman(58)
    expect(returned).toEqual("LVIII");
  });

   it('test pass 1994  ', () => {
    const returned = intToRoman(1994)
    expect(returned).toEqual("MCMXCIV");
  });

  it('test pass 1999  ', () => {
    const returned = intToRoman(1999)
    expect(returned).toEqual("MCMXCIX");
  });
});