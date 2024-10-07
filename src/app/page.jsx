import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from './public/assets/logo.png'
import Hero from './components/Hero';
import Features from './components/Features';

const Home = () => {
  return (
    <>
      <main 
      className='px-[50px] py-2 -z-50 text-white bg-gradient-to-r max-sm:px-[15px]' 
      style={{ backgroundImage: 'linear-gradient(to left, hsl(176, 68%, 44%), hsl(198, 60%, 40%))' }}
      >
        <nav className='flex justify-between items-center'>
          <Link href='/' className="logo flex gap-1 items-center">
            <Image src={Logo} alt="Logo" width={40} height={40} />
            <h2 className='text-xl font-medium text-white uppercase max-sm:text-lg'>MallMarkt</h2>
          </Link>
          <ul className='flex gap-8 max-sm:gap-5'>
            <li><a className='transition ease-in-out duration-1000 hover:text-sky-900 max-sm:text-sm' href='#features'>Features</a></li>
            <li><Link className='transition ease-in-out duration-1000 hover:text-sky-900 max-sm:text-sm' href='/login'>Login</Link></li>
          </ul>
        </nav>
      </main>
      
      <Hero />
      <Features />
    </>
  );
};

export default Home;
