    // function init(){
    // capturar elementos para trabajarlos
const input$$ = document.querySelector("input");
    // añado una clase a input para trabajar mejor
    input$$.classList.add("inputText");
const button$$ = document.querySelector(".btn-add");
const liContainer$$ = document.querySelector(".li-container");
const task$$ = document.querySelector(".empty");
// ahora le damos funcionalidad a los elementos primero vamos a hace que el boton añada elementos pero con un criterio para que no añada elementos en vacio
// CREO LOS ELEMENTOS QUE COMPONDRAN LA LISTA DE TAREAS QUE DEBEMOS AÑADIR DENTRO DE UL
function addTask() {
const containerAllTask$$ = document.createElement("div");
const containerTask$$ = document.createElement("div");
const taskText$$ = document.createElement("p");
const buttonTask$$ = document.createElement("button");

containerAllTask$$.appendChild(containerTask$$);
containerTask$$.appendChild(taskText$$);
containerTask$$.appendChild(buttonTask$$);


}





const ulContainer$$ = document.querySelector(".li-container")


// quiero validar que no se pueda poner espacios en blanco y me está costando con el if input$$.value.length < 0 no funciona, he visto una functio trim, que voy a usar
button$$.addEventListener("click", () => {

if(input$$.value === "" || input$$.value.trim() === "") {
    window.alert("Debes introducir texto")
    }else {
        // debo crear una funcion para que añada los elemento del input en la pantalla
    }

});

    // };

    // window.onload = init;
