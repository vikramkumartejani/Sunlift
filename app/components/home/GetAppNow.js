import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

const GetAppNow = () => {
  return (
    <div className='w-full px-4 lg:px-6 xl:px-10 relative '>
      <div className='max-w-[1600px] mx-auto flex items-center justify-between xl:flex-row flex-col gap-6 sm:gap-10 w-full pt-12 md:pt-[100px] relative z-30'>
        <div>
          <img src='/assets/mobiles.svg' alt='mobiles'/>
        </div>
        <div className='xl:max-w-[666px] pb-12 md:pb-[100px] xl:pb-0'>
          <h1 className='text-[24px] sm:text-[50px] md:text-[60px] md:leading-[70px] font-semibold font-workSpace tracking-[-0.02em] text-black'>Get <span className='text-[#EB3340]'>Sunlifter.Club</span> App now</h1>
          <p className='mt-2.5 sm:mt-[22px] text-black/65 text-[14px] sm:text-[18px] sm:leading-[28px] font-normal'>Imagine having the freedom to explore weightlifting and exercise programs led by top trainers from around the world, all from the comfort of your own space.</p>
          <Link
            href="/"
            className="mt-8 sm:mt-[50px] bg-black w-[155px] sm:w-[209px] h-[39px] sm:h-[56px] rounded-[43px] text-white text-[14px] sm:text-[18px] sm:leading-[20px] font-normal sm:font-medium flex items-center gap-1 justify-center"
          >
            Download Now <IoIosArrowForward className='text-[16px] sm:text-[18px]' />
          </Link>
        </div>
      </div>
      <img src='/assets/right-image.svg' alt='right-image' className='w-[132px] absolute right-0 top-1/2 -translate-y-4/4 sm:translate-y-1/4' />
    </div>
  )
}

export default GetAppNow