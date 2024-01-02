import React from 'react'

import Intro from './pages/Intro'
import AboutText from './pages/AboutText'
import AboutPhoto from './pages/AboutPhoto'
import Work from './pages/Work'
import Script from './pages/Script'
import Contact from './pages/Contact'
import Comment from './pages/Comment'
import Header from './components/section/Header'

const App = () => {
  return (
    <>
      <Header />
      <Intro />
      <AboutText />
      <AboutPhoto />
      <Work />
      <Script />
      <Comment />
      <Contact />
    </>
  )
}

export default App