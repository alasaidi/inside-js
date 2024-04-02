/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let result=0;

    for (let i=0; i< s.length;i++){

if (s[i]==="I" && s[i +1]==="V" ){
        result+=4;
        i+=1;
      }else
      
       if (s[i]==="I" &&  s[i+1]==="X"){
        result+=9;
        i+=1;
      }else
      
      if(s[i]==="X" && s[i+1]==="L" ){
        result+=40;
        i+=1;
      }else

if(s[i]==="X" &&  s[i+1]==="C" ){
        result+=90;
        i+=1;
      }else

      if(s[i]==="C" && s[i+1]==="D" ){
        result+=400;
        i+=1;
      }else
if(s[i]==="C" && s[i+1]==="M" ){
        result+=900;
        i+=1;
      }else
      if(s[i]==="I"){
        result+=1;
      }else
      if(s[i]==="V"){
        result+=5;
      }else
      if(s[i]==="X"){
        result+=10;
      }else
      if (s[i]==="L"){
        result+=50;
      }else
      if(s[i]==="C"){
        result+=100;
      }else
      if(s[i]==="D"){
        result+=500;
      }else
      if(s[i]==="M"){
        result+=1000;
      }

      
    }
    return result;
};



describe('roman To Int test ', () => {

    it('test pass 3  ', () => {
    const returned = romanToInt("III")
    expect(returned).toEqual(3);
  });

   it('test pass  58 ', () => {
    const returned = romanToInt("LVIII")
    expect(returned).toEqual(58);
  });

   it('test pass 1994  ', () => {
    const returned = romanToInt("MCMXCIV")
    expect(returned).toEqual(1994);
  });

  it('test pass 1999  ', () => {
    const returned = romanToInt("MCMXCIX")
    expect(returned).toEqual(1999);
  });
});