// import React, { useState } from 'react'

// function Cards({ name, image,id,OnClickCard }) {
  
//   return (
//     <>
//       <div onClick={()=>OnClickCard(id)}>
//         <img src={image} alt={name} />
//         <p>{name}</p>
//       </div>
//     </>
//   )
// }

// export default Cards


import React,{useState} from 'react'
function Cards({ name, image, id, OnClickCard }) {
  return (
    <div className="card-item" onClick={() => OnClickCard(id)}> {/* Added card-item className */}
      <img src={image} alt={name} />
      <p>{name}</p>
    </div>
  )
}



export default Cards


