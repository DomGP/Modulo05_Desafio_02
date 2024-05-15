import React from 'react'
import { useContext } from 'react'
import { PhotosContext } from '../context/PhotosContext'
import Tarjeta from '../components/Tarjeta'

const Favoritas = () => {

  const {photos} = useContext(PhotosContext)
  return (
    <>
      <h1>Favoritas</h1>
      <div className='rowStyle'>
      {
          photos && photos.filter(photo => photo.like == true).map(photo =>(
              <Tarjeta photo={photo} key={photo.id} />
          ))
      }
    </div>
    </>
    
  )
}

export default Favoritas