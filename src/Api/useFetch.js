import { useEffect, useState } from "react";

const useFetch=(url)=>{
    
const[data,setData]=useState(null);
const[isPending,setIsPending]=useState(true);
const[error,setError]=useState(null);

useEffect(()=>{
    setTimeout(() => {
        
        fetch(url)
        .then(res=>{  
            return res.json()
        })
       
    .then((data)=>{
          setData(data);
          console.log(data);
          setIsPending(false);
          setError(null);
    })
    .catch((err)=>{
        setIsPending(false);
        setError(err.message);
    })
    }, 100);     
},[url])

return{data,error,isPending}
}
export default useFetch