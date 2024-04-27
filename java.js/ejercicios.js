/*
Dada la edad una persona, determinar si es mayor de edad
*/

function determinar() {
    //obtener la refencia al input html 
    
    const edadEnHtml = document.getElementById('edad');
    
    const edad = Number(edadEnHtml.value);

    //como quiero validar que exista un valor
    //Guards
    if(!edad)  {
        edadEnHtml.classList.add('error');
        return;
    }else {
        edadEnHtml.classList.remove('error');
    }

    //aca ya tengo la edad
    //si edad < 18 => es menor de edad
    //si edad => 18 => es mayor de edad
    if(edad < 18) {
        
    }
    
}
document.getElementById('calcular')
    .addEventListener('click',determinar);