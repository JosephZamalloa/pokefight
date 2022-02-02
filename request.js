const BaseAPI = 'https://pokeapi.co/api/v2/'

const getPoke = async (apiPoke) =>
{
    try{
        const result = await fetch(BaseAPI+apiPoke)
        const poke=await result.json()
        return poke.results
        
    } catch(err){
        console.log(err)
    }

}


