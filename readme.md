# [CALCULADORA BASICA-DOM]
## Seleccionamos los elementos html
```bash
let formulario = document.getElementById('form');
let numero1 = document.getElementById('numero1');
let numero2 = document.getElementById('numero2');
var operador = document.getElementById('operador');

```
## Declaramos nuestras variables
```bash
let  valueNum1 ;
 let valueNum2 ;
 let valueOperador = '';
```
## Creamos los eventos 
```bash
formulario.addEventListener('submit',calcular);
numero1.addEventListener('input', primerNumero);
numero2.addEventListener('input', segundoNumero);
operador.addEventListener('input',operacion);
```
## Creamos la funcion encargada de hacer los calculos
```bash
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
```
## Creamos las funciones  para capturar los datos de entrada

## Authors

- [JOSE-DIAZ -ROJAS](https://github.com/)