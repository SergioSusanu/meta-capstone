import React, {createContext, useState} from 'react'

export const ImagesPathContext = createContext();

const InitialDataProvider = ({children}) => {
  const [imagesPath, setImagesPath] = useState("./assets/images/");

  return (
    <ImagesPathContext.Provider value={{imagesPath}}>{children}</ImagesPathContext.Provider>
  )
}

export default InitialDataProvider