import React from 'react'
import { Inter } from '@next/font/google'
import Head from 'next/head'
import { useEffect } from 'react';
import { themeChange } from 'theme-change';

const inter = Inter({ subsets: ['latin'] })

const Signup = () => {
  useEffect(() => {
    themeChange(false)
  }, [])

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