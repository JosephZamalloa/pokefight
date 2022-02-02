
function renderPoke(poke, targetElement)
{   
    let num=0
    const html = poke.map((pokemon)=>{
      num++
        const selectedpokemon={
          ...pokemon,
          imagen:`https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/other/home/${num}.png?raw=true`
        }
        return `
          <div class="name-order" >  
                <span class="boton-poke" id="${num}" onclick="selecciona()" >${(pokemon.name).charAt(0).toUpperCase()+(pokemon.name).slice(1)} ${num}
                <img src="https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/other/home/${num}.png?raw=true" width="190px">
                </span>
          </div>
        `
    }).join('')
targetElement.innerHTML =html
console.log(pokemon)
}


