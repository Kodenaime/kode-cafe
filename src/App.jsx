import React from 'react'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Buy from './components/Buy/Buy'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <Hero />
      <Services />
      <Buy />
      <Banner />
      <Footer />
    </div>
  )
}

export default App