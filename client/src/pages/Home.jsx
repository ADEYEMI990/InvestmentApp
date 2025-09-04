import React from 'react'
import Navbar from '../components/Navbar'
import Mainpage from '../components/Mainpage'

const Home = () => {
  return (
    <div className="relative">
      {/* Navbar fixed at the top */}
      <Navbar />

      {/* Offset content by navbar height */}
      <main className="pt-16">
        <Mainpage />
      </main>
    </div>
  )
}

export default Home
