import React from 'react'
import ProdCard from '../ProdCard'

const Featured = () => {
  return (
    <>
    <div className="flex justify-center">
      <div className='grid gap-5 mt-10 sm:grid-cols-2 xl:grid-cols-3'>
        <ProdCard />
        <ProdCard />
        <ProdCard />
        <ProdCard />
      </div>
    </div>
    </>
  )
}

export default Featured