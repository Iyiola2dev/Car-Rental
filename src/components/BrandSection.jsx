import React from 'react'
import BrandTypes from './BrandTypes'
import BodyTypes from './BodyType'

const BrandSection = () => {
  return (
    <div className='bg-white h-screen w-screen p-20 flex flex-col justify-between gap-10 mt-20'>
        <BrandTypes title="Rent by Brands"/>
        <BodyTypes title="Rent by body type"/>
    </div>
  )
}

export default BrandSection