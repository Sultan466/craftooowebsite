import React from 'react'
import MainHeader from '../components/pages/MainHeader'
import HeroPage from '../components/pages/HeroPage'
import Whatsapp from '../components/pages/Whatsapp'
const HomePage = () => {
  return (
    <div className='container-fluid  Section_top'>
        <MainHeader/>
        <HeroPage/>
        <Whatsapp/>
    </div>
  )
}

export default HomePage