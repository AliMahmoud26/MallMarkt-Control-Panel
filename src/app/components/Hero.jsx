import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <section className='hero bg-[url("./public/assets/hero2.jpg")] bg-no-repeat bg-cover h-dvh relative'>
      <div className="overlay"></div>
      <div className="text absolute top-1/4 left-[50px] max-sm:left-[20px] max-sm:top-[100px]">
        <h1 className='uppercase text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r max-sm:text-2xl' style={{ backgroundImage: 'linear-gradient(to right, hsl(176, 68%, 64%), hsl(198, 60%, 50%))'}}>
          Welcome to MallMarkt Dashboard
        </h1>
        <p className='mt-8 mb-12 font-semibold text-[18px] leading-loose text-transparent bg-clip-text bg-gradient-to-r max-sm:text-[10px]' style={{ backgroundImage: 'linear-gradient(to right, hsl(176, 68%, 64%), hsl(198, 60%, 50%))'}}>
          The MallMarkt Dashboard offers a comprehensive platform to easily view, track, and manage your online store&apos;s product statistics. <br /> From sales trends to inventory, access everything through an intuitive interface. Join now to securely manage all your store&apos;s data in <br /> one convenient place and streamline your business operations on the MallMarkt platform.
        </p>
        <Link 
          href='/login' 
          className='mt-8 px-4 py-2 rounded text-white bg-gradient-to-r max-sm:text-sm' 
          style={{ backgroundImage: 'linear-gradient(to right, hsl(176, 68%, 64%), hsl(198, 60%, 50%))'}}>
          Login Now
        </Link>
      </div>
    </section>
  );
};

export default Hero;
