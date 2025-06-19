import React, { useContext } from 'react'
import { Biocontext } from '../wrapper'

const Home = () => {
   const myname =  useContext(Biocontext)
  return (
    <div>
      Hii {myname} This is a Home
    </div>
  )
}

export default Home
