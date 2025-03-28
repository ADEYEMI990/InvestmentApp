import React from 'react'
import Navbar from '../components/Navbar'
import Mainpage from '../components/Mainpage'

const Home = () => {
  return (
    <div className="relative">
      <Navbar />
      <div className="pt-[75px]"> {/* Changed to match Navbar height */}
        <Mainpage />
      </div>
    </div>
  )
}

export default Home