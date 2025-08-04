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
    //Condicionales anidados
    if(numeroUsuario>numeroSecreto){
        alert('El número secreto es menor');
    } else{
        alert('El número secreto es mayor');
    }
    //La condición no se cumplió
    alert('Lo siento, no acertaste el número');
} */

/* ----------Loops o bucles--------------*/





/* 
¡NO COMETAS EL ERROR!
Las variables se definen siempre al inicio
para ser más ordenados, no se deben definir dentro de ciclos,
puesto que se restable cada que realice el ciclo
y no la identificara desde afuera porque aún no se ha declarado
*/

/* let numeroSecreto = 8;
let numeroUsuario = 0;
let intentos = 1;
let palabraIntentos = "intento";

// Se crea un ciclo con el while (mientras) y se asigna una condición para que el bucle se repita,
//mientras se cumpla la condición.

// Una buena practica es la identación con una tabulación, que cumple con la jerarquia del código
//indicandonos ¿qué parte del código se ejecuta primero y cuál es su orden?

while(numeroUsuario != numeroSecreto){
    numeroUsuario = prompt('Me indicas un número entre 1 y 10 por favor: ');

    console.log(numeroUsuario);

    //Condicionales (Comparación)
    //Se realiza la comparación con 2 iguales de las variables que tenemos
    if(numeroUsuario == numeroSecreto){
        //Acertamos, fue verdadera la condición
        
        //Con el templateString o interpolación ${} se puede agregar código
        //Se indica el número correcto y los intentos
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${palabraIntentos}.`);
    } else{
        //Condicionales anidados
        if(numeroUsuario>numeroSecreto){
            alert('El número secreto es menor');
        } else{
            alert('El número secreto es mayor');
        }
        // Metodo explicito de incrementar una variable

        // Se ubica en el else ya que solo aumentara si la persona no logra adivinar,
        //pues se da a la perona una nueva oportunidad

        //También se podría poner antes de condicional, si se inicializa en 0
        
        intentos = intentos + 1;
        //Cambiamos la palabra que nos evite el problema lingüístico por la cantidad de intentos
        palabraIntentos = 'intentos';

        //Validamos el número máximo de intentos y si se cumple forzamos la salida del ciclo con break
        if(intentos > 3){
            alert('Llegaste al número máximo de intentos.');
            break;
        }

        //La condición no se cumplió
        alert('Lo siento, no acertaste el número');

    }
}
*/

/*
    METODO Math()

    Con el metodo Math se pueden usar varias funciones matemáticas, entre las cuáles se encuentra el floor()
    que se encarga de escoger el entero menor  más cercano o igual al número decimal que se indique, también
    tenemos el random() que se encarga de brindarnos un número pseudoaleatorio del 0 al 1 por lo cuál para poder 
    obtener números mayores a cero debemos multiplicarlo por nuestro rango

    */

// DESAFIO
// Modificar el código para que puedas cambiar el rango de los números

//Se definen las variables
let rangoNumero = 10;
let numeroUsuario = 0;
let intentos = 1;
let maximosIntentos = 3;
let numeroSecreto = Math.floor(Math.random()*rangoNumero)+1;

//Se crea el ciclo que se repite mientras el número sea diferente
while(numeroUsuario != numeroSecreto){
    //Convertir el string a tipo number con el parseInt()
    numeroUsuario = parseInt(prompt('Me indicas un número entre 1 y 10 por favor: '));

    //Validar el tipo de dato
    console.log(typeof(numeroUsuario));

    //Se valida que el número sea igual
    if(numeroUsuario == numeroSecreto){
        //Se da una alerta de acierto, inidicando el número y los intentos
        //Se usan operadores ternarios para validar la palabra final para la cantidad de intentos
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}.`);
    }
    else{
        //Se da una pista al usuario de cuál podría ser el número
        if(numeroUsuario>numeroSecreto){
            alert('El número secreto es menor');
        }else{
            alert('El número secreto es mayor');
        }
        
        //intentos += 1;
        intentos++;

        //Validamos el número máximo de intentos y si se cumple forzamos la salida del ciclo con break
        if(intentos > maximosIntentos){
            alert(`Llegaste al número máximo de ${maximosIntentos} intentos.`);
            break;
        }

        //La condición no se cumplió
        alert('Lo siento, no acertaste el número');

    }
}