import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './components/layout/Layout'
import Error from './components/error/Error'
import Home from './components/home/Home'
import Gallery from './components/gallery/Gallery'
import Services from './components/services/Services'
import PriceList from './components/pricelist/PriceList'
import Terms from './components/terms/Terms'
import Contact from './components/contact/Contact'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='/galeria' element={<Gallery />} />
          <Route path='/uslugi' element={<Services />} />
          <Route path='/cennik' element={<PriceList />} />
          <Route path='/regulamin' element={<Terms />} />
          <Route path='kontakt' element={<Contact />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App