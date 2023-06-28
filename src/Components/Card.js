import { Button, Typography } from '@mui/material'
import React from 'react'
import './Card.css'
import { useNavigate } from 'react-router-dom'


const Card = ({Blogs}) => {

  const navigate =useNavigate()

const viewpage=(id)=>{
    navigate("/View/"+id)
}
  return (
    <div className='card'>
      {Blogs.map((card)=>(
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
         
         <Button variant="contained" onClick={()=>viewpage(card.id)}>View</Button>
         </div>
      ))}
   
    </div>
  )
}

export default Card
