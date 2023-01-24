import React from 'react'
import { Inter } from '@next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

const Cart = () => {
  return (
    <>
      <Head>
        <title>D1 - Carrinho</title>
      </Head>
      <main className={`${inter.className} sm:mt-[66px]`}>
        Cart
      </main>
    </>
  )
}

export default Cart