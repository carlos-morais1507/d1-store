import React from 'react'
import { Inter } from '@next/font/google'
import Head from 'next/head'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

const LogIn = () => {
  return (
    <>
      <Head>
        <title>D1 - Login</title>
      </Head>
      <main className={`${inter.className} sm:mt-[66px]`}>
        <div className="hero bg-base-200 sm:h-[calc(100vh-66px)] h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left mr-6 block sm:hidden">
              <h1 className="text-4xl font-bold">Faça login agora!</h1>
              <p className='sm:text-lg mt-5'>Não tem uma conta?</p>
              <Link className='btn btn-primary border-2 border-neutral hover:border-2 hover:border-neutral' href="/Login/Signup">
                Cadastre-se Agora!
              </Link>
            </div>
            <form action='/' className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border-2 border-neutral">
              <div className="card-body">
                <div className="form-control">
                  <label className='label'>
                    <span className='label-text'>Email</span>
                  </label>
                  <input type="email" placeholder='email' className='input input-bordered' required/>
                </div>
                <div className="form-control">
                  <label className='label'>
                      <span className='label-text'>Senha</span>
                    </label>
                    <input type="password" placeholder='senha' className='input input-bordered' required/>
                </div>
                <div className="form-control mt-6">
                  <input type="submit" value="Login"  className='btn btn-primary border-2 border-neutral hover:border-2 hover:border-neutral'/>
                </div>
              </div>
            </form>
            <div className="text-center lg:text-left mr-6 hidden sm:block">
              <h1 className="text-5xl font-bold">Faça login agora!</h1>
              <p className='py-6'>Entre na sua conta usando e-mail e senha!</p>
              <p className='sm:text-lg'>Não tem uma conta?</p>
              <Link className='btn btn-primary border-2 border-neutral hover:border-2 hover:border-neutral' href="/Login/Signup">
                Cadastre-se Agora!
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default LogIn