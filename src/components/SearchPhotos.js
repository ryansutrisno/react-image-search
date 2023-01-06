import React, { useState, useContext } from 'react'
import { ImageContext } from '../App'

const SearchPhotos = () => {
  const [searchValue, setSearchValue] = useState('')
  const { fetchData, setSearchImage } = useContext(ImageContext)

  const handleInputChange = (e) => {
    setSearchValue(e.target.value)
  }
  const handleButtonSearch = () => {
    fetchData(
      `search/photos?page=1&query=${searchValue}&client_id=${process.env.REACT_APP_ACCESS_KEY}`
    )
    setSearchValue('')
    setSearchImage(searchValue)
  }
  const handleEnterSearch = (e) => {
    if (e.key === 'Enter') {
      fetchData(
        `search/photos?page=1&query=${searchValue}&client_id=${process.env.REACT_APP_ACCESS_KEY}`
      )
      setSearchValue('')
      setSearchImage(searchValue)
    }
  }

  return (
    <>
      <div className="form">
        {' '}
        <label className="label" htmlFor="query">
          {' '}
          📷
        </label>
        <input
          type="text"
          name="query"
          className="input"
          placeholder="Search..."
          value={searchValue}
          onChange={handleInputChange}
          onKeyDown={handleEnterSearch}
        />
        <button
          type="submit"
          disabled={!searchValue}
          onClick={handleButtonSearch}
          className="button"
        >
          Search
        </button>
      </div>
    </>
  )
}

export default SearchPhotos
