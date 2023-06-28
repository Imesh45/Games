import { CatchingPokemon } from '@mui/icons-material'
import { AppBar, IconButton, Link, Stack, Toolbar, Typography } from '@mui/material'
import './Navbar.css'


const Navbar = () => {

  return (
   
    <AppBar position='fixed' style={{background:'transparent'}}>
        <Toolbar>
            <IconButton size='large' edge='start' fontWeight='bold' >
                <CatchingPokemon sx={{color:'white'}}/>
            </IconButton>
            <Typography variant='h6' component='div' sx={{flexGrow:1}} fontWeight='bold' >
                 Games
            </Typography>
            <Stack direction='row' spacing={2} >
                <Link href='/' underline='none' variant='h6' fontWeight='bold' className='link' sx={{color:'white'}}>Home</Link>    
                <Link href='/Online' underline='none' variant='h6'fontWeight='bold' sx={{color:'white'}}>Online</Link>   
                <Link href='/Offline' underline='none' variant='h6' fontWeight='bold' sx={{color:'white'}}>Offline</Link>    
                <Link href='/About' underline='none' variant='h6'fontWeight='bold' sx={{color:'white'}}>About Us</Link>    
              
            </Stack>
        </Toolbar>
    </AppBar>
 
  )
}

export default Navbar
