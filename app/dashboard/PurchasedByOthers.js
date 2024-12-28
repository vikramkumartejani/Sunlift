import Link from 'next/link';
import React from 'react'

const PurchasedByOthers = () => {
    const programs = [
        {
            name: "Intermediate Strength Program",
            type: "Strength Training",
            username: "JohnDoe",
            lastactive: "27/11/2024",
            price: "$99.99",
        },
        {
            name: "Intermediate Strength Program",
            type: "Strength Training",
            username: "JohnDoe",
            lastactive: "27/11/2024",
            price: "$99.99",
        },
        {
            name: "Intermediate Strength Program",
            type: "Strength Training",
            username: "JohnDoe",
            lastactive: "27/11/2024",
            price: "$99.99",
        },
        {
            name: "Intermediate Strength Program",
            type: "Strength Training",
            username: "JohnDoe",
            lastactive: "27/11/2024",
            price: "$99.99",
        },
    ];

    return (
        <div className='w-full'>
            <h1 className='text-[#000000] text-[24px] sm:text-[30px] md:text-[40px] lg:text-[60px] lg:leading-[75px] font-semibold tracking-[-0.02em] mb-6 md:mb-[51px]'>Purchased By Others</h1>

            <div className='max-w-[1180px] w-full'>
                <div className="overflow-hidden rounded-2xl border border-[#E9E9E9]">
                    <div className="overflow-x-auto">
                        <table className="min-w-full border-collapse">
                            <thead className="border-b border-[#E9E9E9]">
                                <tr className="text-left h-[60px] lg:h-[72px] uppercase text-nowrap">
                                    <th className="px-6 text-sm font-medium text-[#7F7F8A]">NAME</th>
                                    <th className="px-6 text-sm font-medium text-[#7F7F8A]">TYPE</th>
                                    <th className="px-6 text-sm font-medium text-[#7F7F8A]">Username</th>
                                    <th className="px-6 text-sm font-medium text-[#7F7F8A]">Last Active</th>
                                    <th className="px-6 text-sm font-medium text-[#7F7F8A]">Price</th>
                                    <th className="px-6 text-sm font-medium text-[#7F7F8A]">ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                {programs.map((program, index) => (
                                    <tr key={index} className="border-b border-[#E9E9E9] h-[55px] lg:h-[70px] text-nowrap">
                                        <td className="px-6 text-base text-[#292933]">{program.name}</td>
                                        <td className="px-6 text-base text-[#292933]">{program.type}</td>
                                        <td className="px-6 text-base text-[#292933]">{program.username}</td>
                                        <td className="px-6 text-base text-[#292933]">{program.lastactive}</td>
                                        <td className="px-6 text-base text-[#292933]">{program.price}</td>
                                        <td className="px-6">
                                            <Link href="/routine-preview" className='text-base font-medium underline text-[#EB3340] underline-offset-2 cursor-pointer'>View</Link>
                                            <Link href="/edit-routines" className='ml-[50px] text-base font-medium underline text-[#EB3340] underline-offset-2 cursor-pointer'>Edit</Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PurchasedByOthers