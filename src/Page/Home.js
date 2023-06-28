import {Typography } from '@mui/material'
import Navbar from '../Components/Navbar'
import '../Css/home.css'
const Home = () => {

  
  return (
     <div>
      <Navbar/>
      <div className='intro'>
      <Typography variant='h3' align='center' fontWeight='bold' m={2} color='warning.main'>
      Introduction of Games
      </Typography>
      <Typography variant='h6' align='center' m={2}>
      Key components of games are goals, rules, challenge, and interaction. Games generally involve mental or physical stimulation, and often both.
     Many games help develop practical skills, serve as a form of exercise, or otherwise perform an educational, simulational, or psychological role.
      </Typography>
      </div>
    </div>  

  )
}

export default Home
