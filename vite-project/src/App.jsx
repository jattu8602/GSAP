import React, { useRef } from 'react'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
const App = () => {

 const boxRef =  useRef()
  useGSAP(()=>{
    gsap.from(".box",{
      rotate:360,
      duration:1,
      delay:0.5,
      scale:0,
      opacity:0,

    },{
      scope:".container",
    })

  })
  return (
    <main>
      {/* <div ref ={gsapRef} className="box">

      </div> */}
      <div className="container">
        <div className="circle"></div>
        <div ref={boxRef} className="box"></div>
      </div>
      <div className="new">
        <div className="circle"></div>
        <div className="box"></div>
      </div>
    </main>
  )
}

export default App

