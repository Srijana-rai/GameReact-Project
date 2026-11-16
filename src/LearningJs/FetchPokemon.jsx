import React,{useState,useEffect} from 'react'

function FetchPokemon() {

    const [pokemonImage, setPokemonImage] = useState([]);
    // const [pokemonName, setPokemonName] = useState([]);
    const [loading, setLoading] = useState(true);



    async function pokemon() {
        let response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=5");
        if (response.status === 200) {
            const data = await response.json();
            const result = await Promise.all(
                data.results.map(async (item) => {
                    const link = await fetch(item.url);
                    const details = await link.json();

                    return details;

                console.log(data);

                }
            ))
            setPokemonImage(result);
            // setPokemonImage(data);
            setLoading(false);
        }
        


    }
    useEffect(() => {
        pokemon();
    },[])
  return (
      <>
          {loading ? (
              <h1>Loading....</h1>
          ) : (
              pokemonImage.map((pokemon)=>(
           <div key={pokemon.id}>
                      <img
                          src={pokemon.sprites.other["official-artwork"].front_default}
                          alt={pokemon.name}
                      />
                      <p>{pokemon.name}</p>
          </div>
                  ))
          ) 
          }
          
          
          
    </>
  )
}

export default FetchPokemon
