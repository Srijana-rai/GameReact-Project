import Header from "./components/Header"
import React, { useState ,useEffect} from "react"
import CardsGrid from "./components/CardsGrid"
import Scoreboard from "./components/Scoreboard";
import "./App.css";
import FetchCountries from "./LearningJs/FetchCountries";
// import Asynchronous from "./LearningJs/Asynchronous";
import FetchPokemon from "./LearningJs/FetchPokemon";

function App() {
  // const [Cards, setCards] = useState([ 
  //   { "id": 1, "name": "weatherman", "image":"https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2JoNXg4bXhlYmw0YXZ2aDkycGhycnl1bTdlaHVvenB0bHY0NjhuNSZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/hWvk9iUU4uBBeyBq0k/giphy.gif" },
  //   { "id": 2, "name": "Garfield", "image":"https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2JoNXg4bXhlYmw0YXZ2aDkycGhycnl1bTdlaHVvenB0bHY0NjhuNSZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/5Szs80FJTKDHQmA1SD/giphy.gif" },
  //   { "id": 3, "name": "Boy 1", "image":"https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3NWZhZDQ4d2dsdnJ4OTY4dXAwazNtYjhvNGRzZ3F5MDZkeXFiaWd3ZyZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/tXL4FHPSnVJ0A/giphy.gif" },
  //   { "id": 4, "name": "Boy 2", "image":"https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3cTcxdzBsYm54MmxsY2FnMGdnMG1zMzVjYXFkd3M4dzFncHRlOGM4eiZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/pEBS2aHPRsomMAIQvv/giphy.gif" },
  //   { "id": 5, "name": "Boy 3", "image":"https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3ZXVqc3NudXI5NzFsMGNtcW5pNmJjZ2JnZGwxdWU0Mm4wMGdlaW8zdSZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/MgRKCBGvlpqTENUzWk/giphy.gif" } // FIXED: Changed ID to 5 and unique name
  // ]);
  


  const [Cards, setCards] = useState([]);
  const [clickedCard, setClickedCard] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0); 
  const [loading, setLoading] = useState(true);


  // useEffect(() => {
  //   const generateGameData = async () => {
  //     try {
  //       setLoading(true);
  //       const response = await fetch(" https://pokeapi.co/api/v2/pokemon/ditto");
  //       const users = await response.json();

  //       const formattedCards = users.slice(0, 5).map((user) => ({
  //         id: user.id,
  //         name: user.username,
  //         image: `https://robohash.org${user.id}?set=set2&size=200x200`
  //       }));
  //         setCards(true);
  //     }
    
        
  //     catch (error) {
  //       console.error("Error generating API game assets:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   generateGameData();
  // }, []);
  

useEffect(() => {
  const generateGameData = async () => {
    try {
      setLoading(true);
      
      // FIX 1: Use the actual REST API endpoint, not the homepage.
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=5");
      
      // FIX 2: Check if the response actually succeeded before parsing.
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();

      // FIX 3: PokeAPI's list doesn't give the ID directly in the 'results' array.
      // We have to extract it from the URL (e.g., "https://pokeapi.co/api/v2/pokemon/25/" -> 25)
      const formattedCards = data.results.map((pokemon) => {
        // This regex grabs the number right before the last slash.
        const idMatch = pokemon.url.match(/\/pokemon\/(\d+)\//);
        const pokemonId = idMatch ? parseInt(idMatch[1], 10) : Math.floor(Math.random() * 1000);
        
        return {
          id: pokemonId,
          name: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1), // Capitalize names
          // FIX 4: Correct official artwork URL.
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`
        };
      });

      setCards(formattedCards);
    } catch (error) {
      console.error("Error generating API game assets:", error);
      // Optional: Set fallback cards here so your UI doesn't stay blank forever.
      // setCards(fallbackCards);
    } finally {
      setLoading(false);
    }
  };

  generateGameData();
}, []);

  
  
  
  
  function handleClickedCard(id) {
  if (!clickedCard.includes(id)) {
    // FIXED: Calculate next score value in a plain variable first
    const nextScore = score + 1; 
    
    setClickedCard([...clickedCard, id]);
    setScore(nextScore);

    // FIXED: Use the plain variable to compare and update bestScore
    if (nextScore > bestScore) {
      setBestScore(nextScore);
    }
  } else {
    setScore(0);
    setClickedCard([]);
  }
    
    shuffleCards();
}

  function shuffleCards() {
  const shuffled = [...Cards].sort(() => Math.random() - 0.5);
  setCards(shuffled);
}

return (
  <>
    <Header />
        <Scoreboard score={score} bestScore={bestScore}/>
    <CardsGrid cards={Cards} cardClick={handleClickedCard} />

    {/* <Asynchronous /> */}
    <FetchPokemon/>


    {/* <FetchCountries/> */}
  </>
);
  
  
  
}

export default App
