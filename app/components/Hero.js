import Image from 'next/image'

const Hero = () => {
  return (
    <div className="relative w-full ">
      <div className="absolute inset-0">
        <img
          src="/assets/hero-bg.png"
          className='w-full h-full'
          alt="Background texture"
        />
      </div>
      <div className=' px-4 lg:px-6 xl:px-10 '>
        <div className="relative z-10 mx-auto max-w-[1600px]">
          <div className="grid grid-cols-1 pt-[216px] items-center gap-12 lg:grid-cols-2">
            <div className="absolute -left-[20px] max-w-[1600px] w-full">
              <img
                src="/assets/hero-arrow.png"
                alt="Fitness training"
              />
            </div>
            <div className="max-w-[1600px] w-full mx-auto py-20 md:py-32">
              <p className="mb-3.5 text-white text-[18px] leading-[22.5px] font-normal tracking-[0.14em]">
                Welcome to Sunlifter Club
              </p>
              <h1 className="mb-3.5 text-white font-workSpace font-bold text-[101px] leading-[112px] tracking-[-0.02em]">
                Making Body Stronger
              </h1>
              <p className="text-white text-[18px] font-normal leading-[28px]">
                Imagine having the freedom to explore weightlifting and exercise programs led by top trainers from around the world, all from the comfort of your own space.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

