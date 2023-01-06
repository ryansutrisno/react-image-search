import React, { useContext, useState, useRef } from 'react'
import { CircularProgress } from '@mui/material'
import { ImageContext } from '../App'
import ImageItem from './ImageItem'
import ModalImage from './ModalImage'
import { useOnClickOutside } from '../helpers/useOnClickOutside'

const ImageList = () => {
  const ref = useRef()
  const [openModal, setOpenModal] = useState(false)
  const [image, setImage] = useState(null)
  const [description, setDescription] = useState('')
  const { response, isLoading, searchImage } = useContext(ImageContext)
  useOnClickOutside(ref, () => setOpenModal(false))

  const handleClickModal = (url, alt) => {
    setImage(url)
    setDescription(alt)
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
  }

  if (isLoading) return <CircularProgress size="2rem" />
  return (
    <>
      {searchImage && <h1>Results for {searchImage || '-'}</h1>}
      <div className="card-list" ref={ref}>
        {!isLoading &&
          response?.map((data) => (
            <ImageItem
              data={data}
              key={data.id}
              handleClick={handleClickModal}
            />
          ))}
      </div>
      {/* <ModalImage
        open={openModal}
        onCloseModal={handleCloseModal}
        image={image}
        description={description}
      /> */}
    </>
  )
}

export default ImageList
