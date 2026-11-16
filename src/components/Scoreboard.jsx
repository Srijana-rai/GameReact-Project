// import React from 'react'

// function Scoreboard({ score, bestScore }) {
//   return (
//     <>
//           <h3>Score:{score}</h3>
//           <h3>Best Score:{bestScore}</h3>
          
//     </>
//   )
// }

// export default Scoreboard

import React from 'react'
function Scoreboard({ score, bestScore }) {
  return (
    <div className="scoreboard"> {/* Added className wrapping div */}
      <h3>Score: {score}</h3>
      <h3>Best Score: {bestScore}</h3>
    </div>
  )
}



export default Scoreboard


