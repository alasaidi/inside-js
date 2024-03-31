/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
  let kelvin=0;
  let fahrenheit=0;
  let ans=[];

  kelvin = (celsius + 273.15).toFixed(5);
 

  fahrenheit = (celsius * 1.80 + 32.00).toFixed(5);
  
ans.push(kelvin , fahrenheit);

return ans;
    
};


 describe('convert temperature ', () => {

  it('test pass the temperature in Kelvin is correct  ', () => {
    const returned = convertTemperature(36.50)
    expect(returned).toEqual(["309.65000","97.70000"]);
  });

   it('test pass the temperature in Fahrenheit is correct ', () => {
    const returned = convertTemperature(122.11)
    expect(returned).toEqual(["395.26000","251.79800"]);
  });
  
  
});