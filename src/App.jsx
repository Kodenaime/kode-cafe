import React from 'react'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Buy from './components/Buy/Buy'

const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <Hero />
      <Services />
      <Buy />
    </div>
  )
}

export default App