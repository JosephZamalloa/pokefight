
let pokemon = []
let n=0
let ids

let modal=document.getElementById("modal_1")
let btn_1= document.getElementById("p1")
let btn_2= document.getElementById("p2")
let cerrar=document.getElementById("close")

let player_select=document.getElementById("choose")

let poke_players=[]

//este recibe a los pokemon de la api
getPoke('pokemon/?limit=150')
.then((pokeRes)=>{
    pokemon=pokeRes
    let poke_name=document.getElementById('poke-name')
    renderPoke(pokemon,poke_name)

})

//Botones del modal
btn_1.onclick = function(){
   modal.style.display="block"
    }

btn_2.onclick = function(){
   modal.style.display="block"
    }

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none"
    }
  }

cerrar.onclick = function(){
    modal.style.display= "none"
}

function selecciona(){
  modal.style.display= "none"

  
}


/* function Select_1(player1){

} */