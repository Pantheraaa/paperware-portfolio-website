import React from 'react'
import './Slogan.css'

const Slogan = () => {
  return (
    <div className='slogan'>
      <div className='back-box'></div>
      <div className='img-box' style={{backgroundImage: 'url('+ require('../../Assets/sloganFinal.jpg')+')'}}></div>
    </div>
  )
}

export default Slogan