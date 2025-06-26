import { createContext, useState } from "react";

export const Recipecontext = createContext(null);

const Recipeprovider = (props) => {
  const [data, setdata] = useState([]);
console.log(data);
  return (
    <Recipecontext.Provider value={{ data, setdata }}>
      {props.children}
    </Recipecontext.Provider>
  );
};

export default Recipeprovider;
