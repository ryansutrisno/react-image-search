import React from 'react'

const ImageItem = ({ data, handleClick }) => {
  return (
    <>
      <div className="card" onClick={handleClick}>
        <img
          className="card--image"
          alt={data.alt_description}
          src={data.urls.full}
          width="50%"
          height="50%"
        />
      </div>
    </>
  )
}

export default ImageItem
