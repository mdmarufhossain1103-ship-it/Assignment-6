import './App.css'
import Navbar from './Components/navbar/Navbar'
import Hero from './Components/hero/Hero'
import User from './Components/user/User'
import Tools from './Components/tools/Tools'
// import { Suspense } from 'react'
// import Step from './Components/step/Step'
// import Popular from './Components/popular/Popular'
// import { useState } from 'react'
// import Workflow from './Components/workflow/Workflow'
// import Footer from './Components/footer/Footer'
// import { ToastContainer } from 'react-toastify';

const getModel= async() => {
  const res = await fetch ("/data.json");
  return res.json();
}
function App() {
  const modelPromise=getModel();
  // const [cart,setCart]=useState([]);
  return (
    <>
    <Navbar></Navbar>
    <Hero></Hero>
    <User></User>
    <Suspense fallback={<p>Data is loading</p>}>
      <Tools modelPromise={modelPromise} ></Tools>
    </Suspense>
    {/* <Step></Step>
    <Popular></Popular>
    <Workflow></Workflow>
    <Footer></Footer>
    <ToastContainer /> */}
    </>
  )
}

export default App
