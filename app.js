let formulario = document.getElementById('form');
let numero1 = document.getElementById('numero1');
let numero2 = document.getElementById('numero2');
var operador = document.getElementById('operador');


 

 let  valueNum1 ;
 let valueNum2 ;
 let valueOperador = '';


formulario.addEventListener('submit',calcular);
numero1.addEventListener('input', primerNumero);
numero2.addEventListener('input', segundoNumero);
operador.addEventListener('input',operacion);


function calcular(e){
e.preventDefault();
let result=0;
let resultado = document.getElementById('resultado');
switch(valueOperador){ // operacion (+ - * /)
case '+':{
     result = valueNum1+valueNum2;
console.log(`el resultado es : ${result}`);
break;
}
case '-':{
     result = valueNum1-valueNum2;
    console.log(`el resultado es : ${result}`);
break;
}
case '*':{
     result = valueNum1*valueNum2;
    console.log(`el resultado es : ${result}`);
break;
}
case '/':{
     result= valueNum1/valueNum2;
    console.log(`el resultado es : ${result}`);
break;
}
default: 
console.log(" hay algun error, corrijalo.");
break;
}
resultado.textContent =`El resultado es: ${result}`;
}
function primerNumero(e){
valueNum1 = parseInt(e.target.value);
}
function segundoNumero(e){
valueNum2 = parseInt(e.target.value);
}

function operacion(e){
valueOperador = e.target.value;
}