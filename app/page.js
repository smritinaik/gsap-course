import React from 'react'
import GsapTo from './components/GsapTo'
import GsapFrom from './components/Gsapfrom'
import GsapFromTo from './components/GsapFromTo'
import GsapStagger from './components/t GsapStagger '
import GsapScrollTrigger from './components/GsapScrollTrigger'
import GsapText from './components/GsapTextEffect'

const page = () => {
  return (
    <>
    <GsapText/>
    
    <GsapTo/>
    <GsapFrom/>
    <GsapFromTo/>
    <GsapStagger/>
    <GsapScrollTrigger/>
    </>
  )
}

export default page