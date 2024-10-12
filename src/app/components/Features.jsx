import React from 'react'
import Image from 'next/image'
import {features} from './Data'

const Features = () => {
  return (
    <section className='mt-[80px] my-[50px] mx-[30px]' id='features'>
        <h1 className='max-sm:text-3xl text-center mb-[40px] text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r' sstyle={{ backgroundImage: 'linear-gradient(to right, hsl(176, 68%, 64%), hsl(198, 60%, 50%))'}}>Features</h1>
      <div className="grid grid-cols-3 gap-6 max-md:grid-cols-2 max-sm:grid-cols-1">
        {
          features.map((feature, index) => (
              <div className="p-[20px] w-[400px] shadow-lg shadow-gray-400 rounded-lg w-fit duration-1000 hover:scale-110" key={index}>
                <Image className='rounded-lg' src={feature.img} alt='features-img' width={450} height={100} />
                <div className="bg-white-500">
                  <h2 className='font-bold mt-[16px] mb-[10px] text-xl text-gray-800'>{feature.header}</h2>
                  <p>{feature.content}</p>
                </div>
              </div>
          ))
        }
      </div>
    </section>
  )
}

export default Features