import React from 'react'
import NumberInput from './NumberInput'
import Link from 'next/link'
import AddExercise from './AddExercise';

const ExerciseOneRepMaxes = () => {
    const typesOptions = ['Exercise 1', 'Exercise 2', 'Exercise 3'];
    return (
        <div className='border-b border-[#D9D9D9] pb-[60px] mt-[60px]'>
            <h1 className='text-[#060606] text-[32px] leading-[40px] font-semibold tracking-[0.01em]'>Exercise One Rep Maxes</h1>
            <p className='text-black/60 text-[18px] leading-[30px] font-normal mt-2.5'>Enter your One Rep Max (or estimate) for each exercise. If you're unsure, an estimate is sufficient.</p>

            <button className='my-[30px] text-[#EB3340] text-[18px] leading-[30px] font-normal underline underline-offset-2'>Click here to learn more about one Rep Max Testing</button>

            <div className='flex flex-col gap-[30px]'>
                <div className='flex items-center gap-6'>
                    <h2 className='text-[#212529] text-[16px] leading-[20px] font-medium h-[50px] w-full max-w-[230px] flex items-center'>Squat</h2>
                    <div className='w-full max-w-[384px]'>
                        <NumberInput placeholder="Current" />
                    </div>
                    <div className='w-full max-w-[384px]'>
                        <NumberInput placeholder="Goal" />
                    </div>
                </div>
                <div className='flex items-center gap-6'>
                    <h2 className='text-[#212529] text-[16px] leading-[20px] font-medium h-[50px] w-full max-w-[230px] flex items-center'>Bench</h2>
                    <div className='w-full max-w-[384px]'>
                        <NumberInput placeholder="Current" />
                    </div>
                    <div className='w-full max-w-[384px]'>
                        <NumberInput placeholder="Goal" />
                    </div>
                </div>
                <div className='flex items-center gap-6'>
                    <h2 className='text-[#212529] text-[16px] leading-[20px] font-medium h-[50px] w-full max-w-[230px] flex items-center'>Deadlift</h2>
                    <div className='w-full max-w-[384px]'>
                        <NumberInput placeholder="Current" />
                    </div>
                    <div className='w-full max-w-[384px]'>
                        <NumberInput placeholder="Goal" />
                    </div>
                </div>
            </div>

            <div className='mt-[30px]'>
                <h2 className='text-[#212529] text-[16px] font-medium leading-[20px] mb-2'>Add Additional Exercise:</h2>
                <div className='flex items-center gap-[50px]'>
                    <div className='w-full max-w-[879px]'>
                        <AddExercise options={typesOptions} placeholder="Select an Exercise" />
                    </div>
                    <button className='text-[#EB3340] text-[20px] font-medium leading-[25px] underline underline-offset-2'>Add Exercise</button>
                </div>
            </div>
        </div>
    )
}

export default ExerciseOneRepMaxes 