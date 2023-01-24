import React from 'react'

const Hero = () => {
  return (
    <>
      <div className="hero h-[465px] sm:h-[365px] bg-hero-img bg-left">
        <div className='hero-overlay bg-opacity-60 bg-gradient-to-r from-black'></div>
          <div className="hero-content text-neutral-content w-full">
            <div className='max-w-md'>
              <h1 className='mb-5 text-5xl font-bold'>
                Promoção!
              </h1>
              <p className='mb-5'>
                Venha agora dar uma olhada nas novas promoções da semana!
              </p>
            </div>
          </div>  
      </div>
    </>
  )
}

export default Hero