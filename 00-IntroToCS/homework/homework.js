'use strict'

function BinarioADecimal(num) {
  num = num.split('').reverse();
  for(var i = 0;i < num.length;i++){
    num[i] = parseInt(num[i]);
    num[i] = num[i] * Math.pow(2,i);  
  }
  var decimal = num.reduce((acc,item) =>{
  return acc = acc + item;
  },0);
  return decimal;

}

function DecimalABinario(num) {
  // tu codigo aca

}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}