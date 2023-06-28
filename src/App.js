import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import About_Us from './Page/About_Us';
import Home from './Page/Home';
import Offline from './Page/Offline';
import Online from './Page/Online';
import bgvideo from './Background/background.mp4'
import View from './Page/View';

function App() {
  return (
    <div className='main'>
      <video src={bgvideo} autoPlay loop muted className='video-bg' />
      <div className='context'>
     <BrowserRouter>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/Offline' element={<Offline/>}/>
       <Route path='/Online' element={<Online/>}/>
       <Route path='/About' element={<About_Us/>}/>
       <Route path='/view/:id' element={<View/>}/>

     </Routes>
     </BrowserRouter>
     </div>
    </div>
  );
}

export default App;
