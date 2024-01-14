import React from 'react'
import Footer from './components/Footer/Footer'
import HeroSection from './components/HeroSection/HeroSection'
import Navbar from './components/Navbar/Navbar'
import StudentTable from './components/StudentTable/StudentTable'

function App() {
  return (
    <>
      <div className="bg-[#172227] font-[Inter] text-white">
        <Navbar />
        <HeroSection />
        <StudentTable />
        <Footer />
      </div>
    </>
  )
}

export default App
