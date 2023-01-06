import React, { createContext, useState } from 'react'
import './App.css'
import useAxios from './hooks/useAxios'
import SearchPhotos from './components/SearchPhotos'
import ImageList from './components/ImageList'

export const ImageContext = createContext()

function App() {
  const [searchImage, setSearchImage] = useState('')
  const { response, isLoading, error, fetchData } = useAxios(
    `search/photos?page=1&per_page=30&query=cats&client_id=${process.env.REACT_APP_ACCESS_KEY}`
  )

  const value = {
    response,
    isLoading,
    error,
    fetchData,
    searchImage,
    setSearchImage,
  }

  return (
    <ImageContext.Provider value={value}>
      <div className="container">
        <h1 className="title">React Photo Search</h1>
        <SearchPhotos />
        <ImageList />
      </div>
    </ImageContext.Provider>
  )
}

export default App
