import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Staking from './pages/Staking'
import History from './pages/History'
import ReferralProgram from './pages/ReferralProgram'
import Support from './pages/Support'
import Withdraw from './pages/Withdraw'
import Recharge from './pages/Recharge'

const APP = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/staking/:id' element={<Staking />} />
        <Route path='/history' element={<History />} />
        <Route path='/support' element={<Support />} />
        <Route path='/referralprogram' element={<ReferralProgram />} />
        <Route path='/withdraw' element={<Withdraw />} />
        <Route path='/recharge' element={<Recharge />} />
      </Routes>
    </div>
  )
}

export default APP
