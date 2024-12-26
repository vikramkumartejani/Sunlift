import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full bg-black'>
      <div className='w-full max-w-[1600px] mx-auto'>
        <div className='mb-10 flex items-center justify-between gap-5'>
          <p>Copyright © 2024 All rights reserved</p>
          <ul className='flex items-center gap-[35px]'>
            <li><Link href='/privacy-policy'>Privacy Policy</Link></li>
          </ul>
        </div>
        <Image src='/assets/footer-logo.svg' alt='footer-logo' width={1600} height={454} />
      </div>
    </div>
  )
}

export default Footer