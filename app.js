// CONDICIONAL if sintaxis

//if(condicion){
//    codigo a ejecutarse
//}

//const edad = 15;

//if(edad >= 18){
//    alert('Si te podemos vender bebidas alcoholicas')
//} else {
//    alert('No te podemos vender bebidas alcoholicas')
//}

//Explicación del ejercicio, shop de bebidas alcoholicas. 
//En IF colocamos que si la variable Edad es igual o mayor a 18 muestre el primer mensaje porque se cumple esa condicion, ELSE se coloca al final para colocar qué mensaje mostrar cuando no se cumpla la condición.


//EJEMPLO dentro de una función

// const edad = prompt('Ingresa tu edad:');

// const verificarEdad = (edad) => {
//     if(edad >= 18){
//         alert('Si te podemos vender');
//     } else {
//         alert('No te podemos vender');
//     }
// };

// verificarEdad(edad);



//Necesitamos crear una función que nos muestre la promoción dependiendo la edad del usuario:  18 -25 => promoción 2 x 1 en cervezas.  25 - 35 => promo es whisky.  35 - 45 => promo tequila.

//if-else-if

// const edad = prompt('Ingrese su edad:')

// const mostrarPromos = (edad) => {
//     if(edad >= 18 && edad < 25){
//         alert('Tenemos promoción en cervezas al 2 x 1:')
//     } else if(edad >= 25 && edad < 35){
//         alert('Tenemos promo en whisky al 20% de descuento')
//     } else if(edad >= 35 && edad < 45){
//         alert('Tenemos promo en coñac, el tercero a mitad de precio')
//     } else if(edad >= 45){
//         alert('Tenemos promo en tequila, con tu compra te regalamos sangrita')
//     } else {
//         alert('No te podemos vender nada.')
//     }
// };

// mostrarPromos(edad);



//CICLOS y BUCLES
//sintaxis
//for(inicializacion; limite; aumento){
//    codigo a ejecutarse
//}

// i++ === i = i + 1


//for(let i = 0; i <= 3; i++){
//    console.log(i)
//}


//i      console.log(i)   i = i + 1
//0            0              1
//1            1              2
//2            2              3
//3            3              4
//4            X(no cumple condicion limite


//for(let i = 0; i <= 100; i = i + 10){
//    console.log(i)
//} //otro ejemplo, avanzando de a 10


// index (posicion en la que se encuentra)
// index        012345678  posicion logica
//const nombre = 'Jorgelina';
// length      123456789  posicion visual

//para que nos de la posicion logica de una letra
//console.log(nombre[8])

//console.log(nombre.length)


//const nombre = 'Jorgelina';

//for(let i = 0; i <= nombre.length; i++){
//    console.log(nombre[i])
//}// de esta manera voy a traves de las letras del nombre, voy al valor

//console.log(i) //con este digo la posicion del elemento



//const nombre = 'Jorgelina compañera';

//for(let i = 0; i <nombre.length; i++){
//    console.log('En la posición: ', i, ' el Valor es: ',nombre[i])
//}


//ACÁ SI TENEMOS EL APELLIDO Y EL NOMBRE EN DOS VARIABLES DISTINTAS:
//const firstName = 'alejandra';
//const lastName = 'apellido';

//const nombre = `${firstName} ${lastName}`;

//for(let i = 0; i <nombre.length; i++){
    //    console.log('En la posición: ', i, ' el Valor es: ',nombre[i])

    
const firstName = 'alejandra';
const lastName = 'apellido';

const nombre = `${firstName} ${lastName}`;

for(let i = 0; i < nombre.length; i++){
    if(nombre[i] === 'a'){
        alert(`El nombre si tiene la letra que buscas, en la posición:${i}`)
    } else {
        console.log('La letra que buscas NO se encuentra en la palabra')
    }
}





