// import React from 'react'
// import Cards from './Cards'

// function CardsGrid({cards,cardClick}) {
//   return (
//     <>
//       {/* Onething to notice cards is a prop which contain Cards and Cards contain the object information cards={Cards} */}

//       {/*      Here, the parentheses allow you to return the JSX directly without writing return. This is equivalent to using {} with an explicit return. */}

//       {cards.map((card) => (
//         <Cards
//           key={card.id}
//           id={card.id}
//           name={card.name}
//           image={card.image}
//           OnClickCard={cardClick}  //function lai props jastai garna mildaina
//         />
//       ))
//       }
//     </>
//   )
// }

// export default CardsGrid



import React from 'react'
import Cards from './Cards'

function CardsGrid({ cards, cardClick }) {
  return (
    <div className="cards-grid"> {/* Added className wrapping div */}
      {cards.map((card) => (
        <Cards 
          key={card.id} 
          id={card.id} 
          name={card.name} 
          image={card.image} 
          OnClickCard={cardClick} 
        />
      ))}
    </div>
  )
}



export default CardsGrid

