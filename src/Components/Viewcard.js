import { Typography } from '@mui/material'
import React from 'react'

const Viewcard = ({Cards}) => {
  return (
    <div className='card'>

    {Cards.map((card)=>(
         <div className='blog' key={card.id}>
       <Typography color='warning.main' variant='h6'>
         Game Name: {card.gname}
       </Typography>
       <Typography color='warning.main'>
        Game Type:  {card.type}
       </Typography>
      
       <Typography variant='h5'>
       Minimum Specification 
       </Typography>
      
       <Typography color='warning.main'>
          RAM:{card.mram}
       </Typography>
       <Typography color='warning.main'>
         Graphic Card: {card.mvgasize}
       </Typography>
      <Typography variant='h5'>
      Recommand Specification
      </Typography> 
       <Typography color='warning.main'>
         RAM: {card.rram}
       </Typography>
       <Typography color='warning.main'>
         Graphic Card: {card.rvgasize}
       </Typography>
       <Typography color='warning.main'>
         FOR: {card.device[0]}/{card.device[1]}/{card.device[2]}/{card.device[3]}
       </Typography>
       
       
       </div>
    ))}
 
  </div>
  )
}

export default Viewcard
