import React, { useContext } from 'react'
import { Biocontext } from '../wrapper'


const About = () => {
       const myname =  useContext(Biocontext)
    
  return (
    <div>
            Hii {myname} This is a About
    </div>
  )
}

export default About
