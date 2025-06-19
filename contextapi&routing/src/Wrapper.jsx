import React from 'react'
import { createContext } from 'react'

export const Biocontext = createContext()
const Wrapper = ({children}) => {
const myname = prompt("Enter Your Name");
  return <Biocontext.Provider value={myname}>
{children}
    </Biocontext.Provider>;

}

export default Wrapper
