

import './App.css'
import Navbar from './components/navbar';
import  MemeCard from './components/MemeCard';
import Footer from  './components/Footer'
const memeapi= "https://meme-api.com/gimme";
const firstmeme ="https://marketplace.canva.com/EAFGlvWuzm8/1/0/1600w/canva-yellow-white-3d-simple-funny-meme-XumAOJ02HrU.jpg";

function App() {


  return (
    <>
    <Navbar />
    <MemeCard Api={memeapi} Imgmeme={firstmeme}/>
    <Footer />
    </>
  )
}

export default App
