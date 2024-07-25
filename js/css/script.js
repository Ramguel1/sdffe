//Ejecutar función en el evento click
document.getElementById("btn_open").addEventListener("click", open_close_menu);

//Declaramos variables
var side_menu = document.getElementById("menu_side");
var btn_open = document.getElementById("btn_open");
var body = document.getElementById("body");
var s1=document.getElementById("s1");
var s2=document.getElementById("s2");
var s3=document.getElementById("s3");
var s4=document.getElementById("s4");
var s5=document.getElementById("s5");
var s6=document.getElementById("s6");

document.getElementById("s1").addEventListener("click", sellecion);
document.getElementById("s2").addEventListener("click", sellecion2);
document.getElementById("s3").addEventListener("click", sellecion3);
document.getElementById("s4").addEventListener("click", sellecion4);
document.getElementById("s5").addEventListener("click", sellecion5);
document.getElementById("s6").addEventListener("click", sellecion6);


function sellecion(){
        s1.classList.toggle("selected");
        s2.classList.remove("selected");
        s3.classList.remove("selected");
        s4.classList.remove("selected");
        s5.classList.remove("selected");
        s6.classList.remove("selected"); 
   
      
}
function sellecion2(){
    s1.classList.remove("selected");
    s2.classList.toggle("selected");
    s3.classList.remove("selected");
    s4.classList.remove("selected");
    s5.classList.remove("selected");
    s6.classList.remove("selected"); 
  
}
function sellecion3(){
    s2.classList.remove("selected");
    s1.classList.remove("selected");
    s3.classList.toggle("selected");
    s4.classList.remove("selected");
    s5.classList.remove("selected");
    s6.classList.remove("selected"); 
    
}
function sellecion4(){
    s2.classList.remove("selected");
    s1.classList.remove("selected");
    s3.classList.remove("selected");
    s4.classList.toggle("selected");
    s5.classList.remove("selected");
    s6.classList.remove("selected"); 

}
function sellecion5(){
    s2.classList.remove("selected");
    s1.classList.remove("selected");
    s3.classList.remove("selected");
    s4.classList.remove("selected");
    s5.classList.toggle("selected");
    s6.classList.remove("selected"); 

}
function sellecion6(){
    s2.classList.remove("selected");
    s1.classList.remove("selected");
    s3.classList.remove("selected");
    s4.classList.remove("selected");
    s5.classList.remove("selected");
    s6.classList.toggle("selected"); 

}

//Evento para mostrar y ocultar menú
    function open_close_menu(){
        body.classList.toggle("body_move");
        side_menu.classList.toggle("menu__side_move");
    }

//Si el ancho de la página es menor a 760px, ocultará el menú al recargar la página

if (window.innerWidth < 760){

    body.classList.add("body_move");
    side_menu.classList.add("menu__side_move");
}

//Haciendo el menú responsive(adaptable)

window.addEventListener("resize", function(){

    if (window.innerWidth > 760){

        body.classList.remove("body_move");
        side_menu.classList.remove("menu__side_move");
    }

    if (window.innerWidth < 760){

        body.classList.add("body_move");
        side_menu.classList.add("menu__side_move");
    }

});