const BaseAPI = 'https://pokeapi.co/api/v2/'
const BaseAPIexp = 'https://pokeapi.co/api/v2/pokemon/'
ad_err=document.getElementById("err")
let laexp

let getPokeExp = async (apiPoke) =>
{
    try{
        const result = await fetch(BaseAPIexp+apiPoke+"/")
        const pokexp=await result.json()
        
       laexp= pokexp.base_experience
        
        
    } catch(err){
        console.log(err)
    }

}

const getPoke = async (apiPoke) =>
{
    try{
        const result = await fetch(BaseAPI+apiPoke)
        const poke=await result.json()
        return poke.results
        
    } catch(err){
        modal.style.display="none"
        ad_err.style.display="block"
        console.log(err)
    }

}


