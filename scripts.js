let pokemon = []
let n=0
var pos=0
let modal=document.getElementById("modal_1")
let btn_1= document.getElementById("p1")
let btn_2= document.getElementById("p2")
let cerrar=document.getElementById("close")
let player_select=document.getElementById("choose")
let poke_players=[]

//Botones del modal
btn_1.onclick = function(){
   modal.style.display="block"
   pos=1
    //este recibe a los pokemon de la api
  getPoke('pokemon/?limit=150')
  .then((pokeRes)=>{
    pokemon=pokeRes
    let poke_name=document.getElementById('poke-name')
    renderPoke(pokemon,poke_name,pos)

    })
    }

btn_2.onclick = function(){
   modal.style.display="block"
   pos=2
    //este recibe a los pokemon de la api
  getPoke('pokemon/?limit=150')
  .then((pokeRes)=>{
    pokemon=pokeRes
    let poke_name=document.getElementById('poke-name')
    renderPoke(pokemon,poke_name,pos)

    })
  }


   
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none"
    }
  }

cerrar.onclick = function(){
    modal.style.display= "none"
}

function selecciona(e,targetElement){
  modal.style.display= "none"
  
  const html = `
          <div class="sel-player" >  
                
                <img src="https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/other/home/${e}.png?raw=true" width="300px">
                </span>
          </div>
        `
    
targetElement.innerHTML =html
  
  
}


/* function Select_1(player1){

} */