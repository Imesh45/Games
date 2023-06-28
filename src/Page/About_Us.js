import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import { Avatar, Box, Checkbox, FormControlLabel, MenuItem, Paper, TextField } from '@mui/material'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import QRCode from 'react-qr-code';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import '../Css/about.css'




const About_Us = () => {
// VGA data collection
const VGA=[{
  Category:'GEFORCE MX',
  series:[{version:"110"},{version:"130"},{version:"150"},{version:"230"},{version:"250"},{version:"330"},{version:"350"},{version:"450"},]
},
{
Category:'GEFORCE GTX',
  series:[{version:"1050"},{version:"1060"},{version:"1070"},{version:"1080"}]
},{
  Category:'GEFORCE RTX',
    series:[{version:"20"},{version:"3050"},{version:"3060"},{version:"3070"},{version:"3080"},{version:"3090"},{version:"30"},{version:"4070"},{version:"4090"},{version:"40"},]
  }
]
//style

const paperstyle={padding:'30px 20px',width:1000,margin:'20px auto'}
const qrstylee={float:'right'}
// page navigate
const navigate=useNavigate();

//input data state
 const[gname,SetGname]=useState('');
 const[type,SetType]=useState('');
 const[mram,SetMRam]=useState();
 const[mvga,SetMVga]=useState();
 const[mseries,SetMSeries]=useState([]);
 const[rram,SetRRam]=useState();
 const[rvga,SetRVga]=useState();
 const[rseries,SetRSeries]=useState([]);
 const[device,SetDevice]=useState([]);
 const[mseriesversion,SetMSeriesVersion]=useState()
 const[rseriesversion,SetRSeriesVersion]=useState()

const changemseries=(e)=>{
   SetMVga(e.target.value);
   SetMSeries(VGA.find(ctr=>ctr.Category===e.target.value).series)
}

const changerseries=(e)=>{
  SetRVga(e.target.value);
  SetRSeries(VGA.find(ctr=>ctr.Category===e.target.value).series)
}
 
const mvgasize=mvga+mseriesversion;
const rvgasize=rvga+rseriesversion;

 const number= 'Name:'+gname+'Type:'+type+'Minimum-RAM:'+mram+'Minimum-VGA:'+mvgasize+'Maximum-RAM:'+rram+"Maximum-VGA:"+rvgasize


// checkbox data state
 const handlecheck =(e)=>{
    let data=device;
    data.push(e.target.value)
    SetDevice(data)
 }

 //submit data
 const handlesubmit=(e)=>{
   e.preventDefault();
    const data={gname,type,mram,mvga,rram,rvga,device,mvgasize,rvgasize,number}
    console.log(data)

 fetch('http://localhost:8000/Details',{
  method:"POST",
  headers:{"content-type":"application/json"},
  body:JSON.stringify(data)
}).then(res=>{
console.log(res)
Swal.fire({
  icon: 'success',
  title: 'Added!',
  text: ` data has been Added.`,
  showConfirmButton: false,
  timer: 1500,
});
navigate("/")
}).catch(err=>{
  console.log(err)
})
 }



  return (
    <>
      <Navbar/>
       
     
       
       <Paper elevation={20} style={paperstyle}>
         <form onSubmit={handlesubmit}>
         <h1>Create Card</h1>
          <Avatar sx={{backgroundColor:'red'}}>
            <AcUnitIcon sx={{color:'yellow',backgroundColor:'red'}}/>
          </Avatar>
          <QRCode value={number} style={qrstylee}/>
         <TextField name='gname' label='Game Name' variant='outlined'  sx={{width:'350px', padding:'10px 10px 10px 10px',borderStyle:'solid'}} onChange={(e)=>SetGname(e.target.value)}/><br/>
         <TextField select label='Type' sx={{width:'350px', padding:'10px 10px 10px 10px'}} variant='outlined'  onChange={(e)=>SetType(e.target.value)} value={type} selected={true}>
           <MenuItem value="Online">Online</MenuItem>
           <MenuItem value="Offline">Offline</MenuItem>
        </TextField><br/>

       {/* Minimum Specification */}
         

        <h3>*Minimum Specification</h3>
        <TextField select label='RAM' sx={{width:'350px', padding:'10px 10px 10px 10px',color:'red'}} variant='outlined'  onChange={(e)=>SetMRam(e.target.value)} value={mram} selected={true} >
           <MenuItem value="4GB">4GB</MenuItem>
           <MenuItem value="6GB">6GB</MenuItem>
           <MenuItem value="8GB">8GB</MenuItem>
           <MenuItem value="12GB">12GB</MenuItem>
           <MenuItem value="16GB">16GB</MenuItem>
        </TextField><br/>

        {/* VGA Select */}
        <TextField select label='VGA' sx={{width:'350px', padding:'10px 10px 10px 10px'}} variant='outlined'   selected={true} onChange={changemseries}>
          {VGA.map((ctr)=>(
                  <MenuItem value={ctr.Category}>{ctr.Category}</MenuItem>
          ))}
        </TextField>
       <br/>
       <TextField select label='VGA' sx={{width:'350px', padding:'10px 10px 10px 10px'}} variant='outlined'  selected={true} onChange={(e)=>SetMSeriesVersion(e.target.value)}>
          {mseries.map((ser)=>(
                  <MenuItem value={ser.version}>{ser.version}</MenuItem>
          ))}
           </TextField><br/>


       {/* Recommand Specification */}
         <Box alignItems='right'>
        <h3>*Recommand Specification</h3>
        <TextField select label='RAM' sx={{width:'350px', padding:'10px 10px 10px 10px'}} variant='outlined'  onChange={(e)=>SetRRam(e.target.value)} value={rram} selected={true}>
           <MenuItem value="4GB">4GB</MenuItem>
           <MenuItem value="6GB">6GB</MenuItem>
           <MenuItem value="8GB">8GB</MenuItem>
           <MenuItem value="12GB">12GB</MenuItem>
           <MenuItem value="16GB">16GB</MenuItem>
        </TextField><br/>
        <TextField select label='VGA' sx={{width:'350px', padding:'10px 10px 10px 10px'}} variant='outlined'   selected={true} onChange={changerseries}>
          {VGA.map((ctr)=>(
                  <MenuItem value={ctr.Category}>{ctr.Category}</MenuItem>
          ))}
        </TextField>
       <br/>
       <TextField select label='VGA' sx={{width:'350px', padding:'10px 10px 10px 10px'}} variant='outlined'  selected={true}  onChange={(e)=>SetRSeriesVersion(e.target.value)}>
          {rseries.map((ser)=>(
                  <MenuItem value={ser.version}>{ser.version}</MenuItem>
          ))}
           </TextField><br/>
       <br/>
       </Box >
    {/* Device */}
  
        <h3>Device</h3>
        <FormControlLabel control={<Checkbox/>} label="Pc"  value="Pc" onChange={handlecheck}/>
        <FormControlLabel control={<Checkbox/>} label="Xbox" value="Xbox" onChange={handlecheck}/>
        <FormControlLabel control={<Checkbox/>} label="Ps5" value="Ps5" onChange={handlecheck}/>
        <FormControlLabel control={<Checkbox/>} label="Mobile" value="Mobile" onChange={handlecheck}/>
         <button>Create</button>
         </form>
         </Paper>
    </>
  )
}

export default About_Us
