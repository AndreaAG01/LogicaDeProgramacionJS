//Crear un mensaje de alerta
//alert('Hola mundo');

//Crear un Input
//prompt('Me indicas un número por favor: ');

/* Definir Variables (const, let, var) --Sirve para almacenar datos-- */
//El = es de asignación
//let numeroUsuario = prompt('Me indicas un número por favor: ');

/* Implementar la ayuda de la consola del navegador */
//Se puede abrir en el navegador con ctrl+shift+i o F12
//Las variables se deben llamar tal cual se definen
//console.log(numeroUsuario);


/** Funcionalidad **/

//Se agrupan las variables
/* let numeroSecreto = 8;
let numeroUsuario = prompt('Me indicas un número entre 1 y 10 por favor: ');

console.log(numeroUsuario);

//Condicionales (Comparación)
//Se realiza la comparación con 2 iguales de las variables que tenemos
if(numeroUsuario == numeroSecreto){
    //Acertamos, fue verdadera la condición
    //Con el templateString o interpolación ${} se puede agregar código
    alert(`Acertaste, el número es: ${numeroUsuario}`);
} else{
    //La condición no se cumplió
    alert('Lo siento, no acertaste el número');
} */

/* 
LIVE SERVER
Es una extensión que recarga el navegador automaticamente cuando se realizan actualizaciones
 */

/* 
Ahora, incluya comandos console.log en diferentes partes del código para verificar
el flujo del programa, los valores de las variables y otra información relevante
durante la fase de desarrollo. 
*/

/* 
let numeroSecreto = 8;
let numeroUsuario = prompt('Me indicas un número entre 1 y 10 por favor: ');

console.log(numeroUsuario);

//Condicionales (Comparación)
//Se realiza la comparación con 2 iguales de las variables que tenemos
if(numeroUsuario == numeroSecreto){
    //Acertamos, fue verdadera la condición
    //Con el templateString o interpolación ${} se puede agregar código
    alert(`Acertaste, el número es: ${numeroUsuario}`);
    console.log('True');
} else{
    //La condición no se cumplió
    alert('Lo siento, no acertaste el número');
    console.log('False');
} 
    */


/* 
alert('Bienvenido al juego del número secreto');

// Agrega un console.log para verificar el valor de "intento" después de la entrada del usuario
let intento = prompt('Elige un número entre 1 y 10');
console.log('Valor de intento:', intento);

let numeroSecreto = 4;

// Agrega un console.log para verificar la comparación entre "intento" y "numeroSecreto"
console.log('Resultado de la comparación:', intento == numeroSecreto);

if (intento == numeroSecreto) {
    alert('Adivinaste');
} else {
    // Agrega un console.log para verificar el valor de "numeroSecreto" cuando el jugador se equivoca
    console.log('Valor del número secreto:', numeroSecreto);
    alert('El número secreto era ' + numeroSecreto);
}
     */


/* Es importante recordar que cuando el proyecto esté disponible para todas las personas,
en lo que llamamos en el contexto del software "entorno de producción", 
los comandos console.log deben eliminarse o desactivarse, ya que pueden 
causar problemas de rendimiento y seguridad.
*/


let numeroSecreto = 8;
let numeroUsuario = prompt('Me indicas un número entre 1 y 10 por favor: ');

console.log(numeroUsuario);

//Condicionales (Comparación)
//Se realiza la comparación con 2 iguales de las variables que tenemos
if(numeroUsuario == numeroSecreto){
    //Acertamos, fue verdadera la condición
    //Con el templateString o interpolación ${} se puede agregar código
    alert(`Acertaste, el número es: ${numeroUsuario}`);
} else{
    if(numeroUsuario>numeroSecreto){
        alert('El número secreto es menor');
    } else{
        alert('El número secreto es mayor');
    }
    //La condición no se cumplió
    alert('Lo siento, no acertaste el número');
}