import React from 'react'
import { Inter } from '@next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

const Signup = () => {
  return (
    <>
      <Head>
        <title>D1 - Cadastre-se</title>
      </Head>
      <main className={`${inter.className} sm:mt-[66px]`}>
        Cadastro
      </main>
    </>
  )
}

export default Signup