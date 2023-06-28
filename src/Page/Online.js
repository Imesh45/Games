import React from 'react'
import Navbar from '../Components/Navbar'
import useFetch from '../Api/useFetch';
import Card from '../Components/Card';
import '../Css/online.css'

const Online = () => {

  const{data:Cards,error,isPending}=useFetch('http://localhost:8000/Details'); 
  
  return (
    <div className='interface'>
      <Navbar/>
         <div className='intro'>
      {error && <div>Error</div>}
        {isPending && <div>Loading....</div>}
        
        {Cards && <Card Blogs={Cards}/>}
      
      
     
        </div>
    </div>
  )
}

export default Online
