import { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar'
import { useParams } from 'react-router-dom';


const View = () => {


  const { id }=useParams();

  const[gamedetail,SetGameDetail]=useState({});
     useEffect(()=>{
         fetch("http://localhost:8080/Audit_detail/"+ id).then(res=>{
            return res.json();
         }).then(res=>{
             SetGameDetail(res);
             console.log(res)
       })
         },[id])
   return (
      
     <div>
      <Navbar/>
         <ul>
           <li>{gamedetail.auditno}</li>
           <li>{gamedetail.company}</li>
           <li>{gamedetail.department}</li>
           <li>{gamedetail.audittype}</li>
           <li>{gamedetail.ncrtype1}</li>
           <li>{gamedetail.qsoreqno}</li>
           <li>{gamedetail.qapsopwi}</li>
           <li>{gamedetail.auditdate}</li>
           <li>{gamedetail.auditor}</li>
           <li>{gamedetail.responsibleperson}</li>
           <li>{gamedetail.ncrtype2}</li>
           <li>{gamedetail.evidence}</li>
           <li>{gamedetail.nonconformity}</li>
           <li>{gamedetail.correction}</li>
           <li>{gamedetail.ncrcategory}</li>
           <li>{gamedetail.rootcause}</li>
           <li>{gamedetail.correctionaction}</li>
           <li>{gamedetail.agreedcompletedate}</li>
         </ul>
         
 
     </div>
  )
}

export default View
