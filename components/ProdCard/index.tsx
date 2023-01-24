import React from 'react'
import { BsFillStarFill } from 'react-icons/bs'

const ProdCard = () => {
  return (
    <>
      <div className="card w-96 bg-base-100 shadow xl mb-10">
        <figure><img src="https://i.ibb.co/qJL6pyq/Design-sem-nome.png" alt="Design-sem-nome" /></figure>
        <div className='card-body'>
          <h2 className="card-title">Produto 1</h2>
          <div className="card-actions justify-around">
            <button className="btn btn-secondary btn-square"><BsFillStarFill className='text-2xl'/></button>
            <button className="btn btn-primary">Adicionar ao carrinho</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProdCard