/* const exp = require("constants")
 */
let pokemon = []
let n=0
var pos=0
let pk=0

let modal=document.getElementById("modal_1")
let btn_1= document.getElementById("p1")
let btn_2= document.getElementById("p2")
let cerrar=document.getElementById("close")
let player_select=document.getElementById("choose")
let poke_win=document.getElementById("winner")
let cerrarWin=document.getElementById("cls")


let player1={id:0,exp:0}
let player2={id:0,exp:0}

let btn_fight=document.getElementById("fight")
let advice=document.getElementById("advice")



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

  function Get_exp(pokeID)
  {
    
    getPokeExp(pokeID).then((pokeResp)=>{
      console.log("pinga")
    pk=pokeResp
    })
    .catch(error => console.error(error));
    console.log(pk)  
  }


   
window.onclick = function(event) {
    if (event.target == modal||event.target==advice||event.target==poke_win||event.target==ad_err) {
      modal.style.display = "none"
      advice.style.display= "none"
      poke_win.style.display="none"
      ad_err.style.display="none"
    }
  }

cerrar.onclick = function(){
    modal.style.display= "none"
    
}
cerrarWin.onclick = function(){
  poke_win.style.display= "none"
  
}
 
function selecciona(e,targetElement){
  let experience

 

  modal.style.display= "none"
  
  if(targetElement.id=="p1")
  {
    getPokeExp(e).then((pokeResp)=>{
      
    pk=pokeResp
    player1.id=e
    player1.exp=laexp
    
    })
    .catch(error => console.error(error));
     

    
  }
  else if(targetElement.id=="p2")
    {
      getPokeExp(e).then((pokeResp)=>{
        
      pk=pokeResp
      player2.id=e
      player2.exp=laexp
      
      })
      .catch(error => console.error(error));
      

      
    }
    
 

  const html = `
          <div class="sel-player" >  
                
                <img src="https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/other/home/${e}.png?raw=true" width="300px">
                </span>
          </div>
        `
    
targetElement.innerHTML =html
   
}


btn_fight.onclick= function(){
    
    let C1=player1.exp
    let C2=player2.exp
    console.log(C1,C2)
  if(player1.id==0||player2.id==0)
    {  advice.style.display="block"}
else
  if(C1>C2)
            {
                poke_win.style.display="block"
                const html = `
                <span>EL GANADOR ES!!!</span>
                <div class="p_win" >  

                      <img src="https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/other/home/${player1.id}.png?raw=true" width="500px">
                      </span>
                </div>
              `
          
              poke_win.innerHTML =html
              
            }
   else
            {poke_win.style.display="block"
            const html = `
            <span>EL GANADOR ES!!!</span>
            <div class="p_win" >  
            
                  <img src="https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/other/home/${player2.id}.png?raw=true" width="500px">
                  </span>
            </div>
          `

          poke_win.innerHTML =html}

}

