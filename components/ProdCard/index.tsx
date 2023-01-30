import React, { useState } from 'react'
import { BsFillStarFill, BsFillHeartFill, BsHeart } from 'react-icons/bs'
import { prod__dprice, prod__nprice, promo__value } from '@/store/StoreVars'

const ProdCard = () => {
  const [liked, setLiked] = useState(false);

  function switchLiked() {
    setLiked(!liked);

    console.log(liked);
  }

  return (
    <>
      <div className="card w-96 bg-base-100 shadow xl mb-10 border-2 border-neutral">
        <figure>
          <a href="#"><img src="https://i.ibb.co/qJL6pyq/Design-sem-nome.png" alt="Design-sem-nome" className='hover:brightness-50 transition-all duration-150'/></a>
        </figure>
        <div className='card-body'>
          <div className="card-title">
            <h2 className="text-2xl">Produto 1</h2>
            <span className='badge badge-primary p-2'><BsFillStarFill className='mr-1'/> 3,5</span>
          </div>
          <div className='flex'>
            <h1 className={`mb-2 ${(prod__dprice > prod__nprice) ? "line-through text-error" : "text-info"}`}>R${prod__dprice.toFixed(2)}</h1>
            <h1 className={`ml-3 text-green-600 no-underline ${(prod__dprice > prod__nprice) ? "block" : "hidden"}`}>
              R${prod__nprice.toFixed(2)}
              <span className='badge badge-secondary p-2 ml-2'>Poupe {promo__value.toFixed(0)}%</span>
            </h1>
          </div>
          <div className="card-actions justify-around">
            <button className="btn btn-secondary btn-square" onClick={() => switchLiked()}>{(liked) ? <BsFillHeartFill className='text-2xl'/> : <BsHeart className='text-2xl'/> }</button>
            <button className="btn btn-primary">Adicionar ao carrinho</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProdCard