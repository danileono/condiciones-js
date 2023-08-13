/////////////// ejercicio 1
/////////////// ejercicio 1
boxImg1.addEventListener("click", toggleBorder)

function toggleBorder (){
    const boxImg1 = document.querySelector("#boxImg1")
    const border = boxImg1.style.border

    if(border == "solid red"){
        boxImg1.style.border = "solid transparent"
    }
    else{
        boxImg1.style.border = "solid red"
    }

    console.log("border", border);
}


/////////////// ejercicio 2
/////////////// ejercicio 2
const num1 = document.querySelector("#num1")
const num2 = document.querySelector("#num2")
const num3 = document.querySelector("#num3")
const cantidad = document.querySelector("#cantidad")
const btnVerificar = document.querySelector("#btnVerificar")

btnVerificar.addEventListener("click", ()=> {

const a = num1.value
const b = num2.value
const c = num3.value

const suma = Number(a) + Number(b) + Number(c);
console.log(suma);

if (suma <= 10){
    cantidad.innerHTML = " llevas " +  suma + " stickers"
}
else{ 
    cantidad.innerHTML = " llevas demasiados stickers"

}

})



/////////////// ejercicio 3
/////////////// ejercicio 3
const select1 = document.querySelector("#select1")
const select2 = document.querySelector("#select2")
const select3 = document.querySelector("#select3")
const btnIngresar = document.querySelector("#btnIngresar")
const mensajePass = document.querySelector("#mensajePass")

btnIngresar.addEventListener("click", ()=> {

    const d = select1.value
    const e = select2.value
    const f = select3.value
    
    const password = d + e + f;
    console.log(password);
    
    if (password == 911){
        mensajePass.innerHTML = "Password 1 correcto"
    }
    else if (password == 714){
        mensajePass.innerHTML = "Password 2 correcto"
    
    }
    else{
        mensajePass.innerHTML = "Password incorrecto"
    
    }
    
    })