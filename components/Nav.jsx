'use client';
import Link from 'next/link';
import Image from 'next/image';
import {signIn, signOut, useSession, getProviders} from 'next-auth/react';
import { useEffect, useState } from 'react';

const Nav = () => {
  const isLoggedIn = true;
  const [providers, setProviders] = useState(null);
  const [toggleDropdown, settoggleDropdown] = useState(false);
  useEffect(()=>{
    const setProviders = async()=>{
      const res = await getProviders();
      setProviders(res);
    }
    setProviders();
  },[])
  return (
    <nav className='w-full flex-between mb-16 pt-3'>
      <Link href='/' className='flex gp-2 flex-center'>
        <Image 
          src='/assets/images/logo.svg' 
          alt='Promptoverse logo' 
          width={30} 
          height={30} 
          className='object-contain'/>
          <p className='logo_text mr-1'>Promptoverse</p>
      </Link>

      {/* Desktop navigation */}
      <div className='sm:flex hidden'>
        {isLoggedIn ? (
          //if signed in
          <div className='flex gap-3 md:gap-5'>
            <Link href='/create-prompt' className='black_btn'>
              Create Post
            </Link>
            <button
              type='button'
              onClick={signOut}
              className='outline_btn'
            >
              Sign Out
            </button>

            <Link href='/profile'>
              <Image 
                src='/assets/images/logo.svg' 
                alt='Profile image'
                width={30}
                height={30}
              />
            </Link>
          </div>
        ):
         //if not signed in 
          <>
          {/* Shows all providers and gives option to sign in. We only use google auth */}
            {providers && Object.values(providers).map((provider)=>{
              return (
                <button 
                  type='button'
                  key={provider.name}
                  onClick={()=>signIn(provider.id)}
                  className='black_btn'
                >
                  Sign In
                </button>
              )
            })}
          </>
        }
      </div>

      {/* mobile navigation */}
      <div className='sm:hidden flex relative'>
        {isLoggedIn ? (
          <div className='flex'>
            <Image 
                src='/assets/images/logo.svg' 
                alt='Profile image'
                width={30}
                height={30}
                onClick={()=>settoggleDropdown((prev)=>!prev)}
              />
              {toggleDropdown && (
                <div className='dropdown'>
                  <Link 
                    href='/profile' 
                    className='dropdown_link' 
                    onClick={()=>settoggleDropdown(false)}>
                      My Profile
                  </Link>
                  <Link 
                    href='/create-prompt' 
                    className='dropdown_link' 
                    onClick={()=>settoggleDropdown(false)}>
                      Create Prompt
                  </Link>
                  <button 
                    type='button'
                    onClick={()=>{settoggleDropdown(false);
                    signOut()}}
                    className='mt-5 w-full black_btn'
                    >
                      Sign Out
                  </button>
                </div>
              )}
          </div>
        ):
          <>
            {providers && Object.values(providers).map((provider)=>{
              return (
                <button
                  type='button'
                  className='black_btn'
                  key={provider.name}
                  onClick={()=>signIn(provider.id)}
                >
                  Sign In
                </button>
              )
            })}
          </>
        }
      </div>
    </nav>
    
    )
}

export default Nav


//1:11:09