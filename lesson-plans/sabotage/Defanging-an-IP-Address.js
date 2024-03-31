/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
  

let ip="";
debugger;
for (let i=0;i<address.length;i++){
if (address[i]==="."){
  ip+="[.]";
}else{ip+=address[i]}} return ip
};





describe('Defanging an IP Address test ', () => {

    it('test pass the IP Address is valid  ', () => {
    const returned = defangIPaddr("255.255.1.1")
    expect(returned).toEqual("255[.]255[.]1[.]1");
  });
  
   it('test pass the IP Address is valid  ', () => {
    const returned = defangIPaddr("255.1.1.100")
    expect(returned).toEqual("255[.]1[.]1[.]100");
  });
});