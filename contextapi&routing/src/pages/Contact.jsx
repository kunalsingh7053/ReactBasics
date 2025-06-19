import React from 'react'
import  { useContext } from 'react'
import { Biocontext } from '../wrapper'
const Contact = () => {
               const myname =  useContext(Biocontext)
    
  return (
    <div>
            Hii {myname} This is a  Contact

    </div>
  )
}

export default Contact
