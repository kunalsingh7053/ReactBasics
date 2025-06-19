import React, { useContext } from 'react'
import { Biocontext } from '../wrapper'


const Service = () => {
           const myname =  useContext(Biocontext)
    
  return (
    <div>
      Hii {myname} This is a  Service
    </div>
  )
}

export default Service
