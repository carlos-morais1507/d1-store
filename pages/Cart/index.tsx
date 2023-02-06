import React from 'react'
import { Inter } from '@next/font/google'
import Head from 'next/head'
import { useEffect } from 'react';
import { themeChange } from 'theme-change';

const inter = Inter({ subsets: ['latin'] })

const Cart = () => {
  useEffect(() => {
    themeChange(false)
  }, [])

  return (
    <>
      <Head>
        <title>D1 - Carrinho</title>
      </Head>
      <main className={`${inter.className} sm:mt-[66px] bg-base-200`}>
        <div className='flex items-center justify-center'>
          <div className='flex justify-start flex-col'>
            <h1 className='font-bold text-lg'>Informações de Entrega</h1>
            <div className='bg-base-100 border-2 border-neutral p-4 rounded-xl'>
              <div className="flex gap-3">
                <div>
                  <label className='label'>
                    <span className='label-text'>Nome</span>
                  </label>
                  <input type="text" placeholder='Digite aqui' className='input input-bordered w-full max-w-xs'/>
                </div>
                <div>
                  <label className='label'>
                    <span className='label-text'>Telefone</span>
                  </label>
                  <input type="tel" placeholder='Digite aqui' className='input input-bordered w-full max-w-xs'/>
                </div>
              </div>
              <div className="flex gap-3">
                <div>
                  <label className='label'>
                    <span className='label-text'>Email</span>
                  </label>
                  <input type="email" placeholder='Digite aqui' className='input input-bordered w-full max-w-xs'/>
                </div>
                <div>
                  <label className='label'>
                    <span className='label-text'>Cidade</span>
                  </label>
                  <input type="text" placeholder='Digite aqui' className='input input-bordered w-full max-w-xs'/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Cart