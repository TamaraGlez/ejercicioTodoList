    // function init(){

// selecciono los elementos con los que voy a trabajar
const input = document.querySelector("input");
const addButton = document.querySelector(".btn-add");
const ul = document.querySelector("ul");
// creo un evento click al boton añadir
addButton.addEventListener('click', (event) => {
    // esta funcion nos sirve para que no se actualice cada vez que clikeemos
    event.preventDefault();

    // creo esta constante que almacenara el valor de input
    const textTask = input.value;
        console.log(textTask)

    // creamos los elemento p y li y los colocamos con appenchild en su lugar
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = textTask;

    li.appendChild(p);
    ul.appendChild(li);
});




// // funcion para actualizar el valor del texinput
// function updateTask(newValue) {

//     input$$.textContent = newValue;
//     console.log(newValue)
// }

// // funcion para imprimir cambio del input
// function changeInput(event) {
//     console.log(event.target.value)
//     updateTask(event.target.value)

// };
// input$$.addEventListener('input', changeInput);

// // CREO LOS ELEMENTOS QUE COMPONDRAN LA LISTA DE TAREAS QUE DEBEMOS AÑADIR DENTRO DE UL
// function addTask() {
// const containerAllTask$$ = document.createElement("div");
// const containerTask$$ = document.createElement("div");
// const taskText$$ = document.createElement("p");
// const buttonTask$$ = document.createElement("button");
// // meto cada hijo donde debe estar
// containerAllTask$$.appendChild(containerTask$$);
// containerTask$$.appendChild(taskText$$);
// containerTask$$.appendChild(buttonTask$$);
// // selecciono la lista para meterlo todo aqui
// const ulContainer$$ = document.querySelector(".li-container");
// ulContainer$$.appendChild(containerAllTask$$);
// // ahora meto el contenido del evento input en la p ¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿
// taskText$$ = input$$.addEventListener('input', changeInput);
// // aqui conseguimos que se reinicie el input
// input$$.value = "";

// };






// quiero validar que no se pueda poner espacios en blanco y me está costando con el if input$$.value.length < 0 no funciona, he visto una functio trim, que voy a usar
// button$$.addEventListener("click", () => {

// if(input$$.value === "" || input$$.value.trim() === "") {
//     window.alert("Debes introducir texto")
//     }else {
//         // debo crear una funcion para que añada los elemento del input en la pantalla
//     }

// });

//     };

    // window.onload = init;
