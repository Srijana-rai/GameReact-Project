// import React, { useState, useEffect } from 'react'

// function FetchCountries() {

//     const [country, setCountry] = useState([]);
//     const [loading, setLoading] = useState(true);

//     async function fetchCountries() {
//         const response = await fetch('https://restcountries.com/v3.1/all');
//         const result = await response.json();

//         if (response.status === 200) {
//             setCountry(result);
//             setLoading(false);
//         }
//     }

//     useEffect(() => {
//         fetchCountries();
//     },[])
//   return (
//       <>
//           <input type="text" />
//           <button>Search</button>
//           {loading ? (
//               <h1>Loading...</h1>
//           ) : (
//                   country.map((item) => (
//                       <div key={item.id}>
//                           <img
//                               src={item.sprites.other["official-artwork"].front_default}
//                               alt={item.name}
//                           />
//                           <h2>{item.name}</h2>
//                       </div>
//                   ))
//           )}
//     </>
//   )
// }

// export default FetchCountries







import React, { useState, useEffect } from "react";

function FetchCountries() {
  const [country, setCountry] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchCountries() {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const result = await response.json();

    if (response.status === 200) {
      setCountry(result);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        country.slice(0, 5).map((item) => (
          <div key={item.cca3}>
            <img
              src={item.flags.png}
              alt={item.name.common}
              width="150"
            />
            <h2>{item.name.common}</h2>
            <p>Capital: {item.capital?.[0] || "No capital"}</p>
          </div>
        ))
      )}
    </>
  );
}

export default FetchCountries;