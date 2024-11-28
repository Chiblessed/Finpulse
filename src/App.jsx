import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Reason from './components/Reason'
import Steps from './components/Steps'
import Mission from './components/Mission'
import Plan from './components/Plan'
import Trail from './components/Trail'
import Footer from './components/Footer'
  {/*const handleClick = (link) => {
    setActiveLink(link);
  };
  const listVariants = {
    initial: { opacity: 0, y: -100 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.2, 
      },
    },
  };
*/}
  {/*onst itemVariants = {
    initial: { opacity: 0, y: -20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  }}*/}
  {/*<motion.h1
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{type: "spring", stiffness: 100, damping: 10, delay: 1}}
                className="font-bold text-7xl leading-tight ml-14 mt-[100px] md:mt-0 p-4 space-y-28"
              >*/}
              { /*<motion.h1 
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{type: "spring", 
                stiffness: 100, 
                damping: 10, 
                delay: 0.2}}
            className="text-3xl font-semibold uppercase">
              <span className="text-primary font-bold">Brew </span>Haven
              </motion.h1>}
            {/*menu section*/}
function App() {

  return (
    <>
<div className='overflow-x-hidden'> 
  <Navbar />
  <Hero />
  <Experience />
  <Reason />
  <Steps />
  <Mission />
  <Plan />
  <Trail />
  <Footer />
  </div>      
    </>
  )
}

export default App
