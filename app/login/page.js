import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoIosArrowForward } from "react-icons/io";

const Page = () => {
    return (
        <div className="min-h-screen relative">
            {/* Gradient Background with Image */}
            <div
                className="absolute inset-0 h-full w-full z-0"
                style={{
                    background: "radial-gradient(56.84% 56.84% at 49.97% 47.88%, rgba(247, 207, 207, 0.5) 0%, rgba(213, 158, 158, 0.6) 100%)", // increased opacity
                    zIndex: 0
                }}
            >
                {/* Image overlay with gradient */}
                <img
                    src="/assets/login.png"
                    alt="Login background"
                    className="absolute inset-0 h-full w-full object-cover opacity-80 z-1"  // adjusted opacity
                />
            </div>

            {/* Content */}
            <div className="flex items-center justify-center min-h-screen px-4 lg:px-6 xl:px-10 relative z-20">
                <div
                    className="relative w-full max-w-[695px] bg-white/50 rounded-[30px] m-auto py-[100px]"
                    style={{ backdropFilter: "blur(116px)" }}
                >
                    <div className="max-w-[475px] mx-auto">
                        <div className="flex items-center justify-center">
                            <Image src="/assets/logo.svg" alt="logo" width={262} height={67} />
                        </div>
                        <form className="mt-[50px] flex flex-col gap-2">
                            <label className="text-[#212529] text-[14px] font-normal leading-[17.5px]">Email</label>
                            <div className="border border-[#D8D8D8] bg-[#F8F9FA99] rounded-[72px] h-[52px] flex items-center px-3.5 gap-3">
                                <Image src="/icons/user.svg" alt="user" width={24} height={24} />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="bg-transparent w-full h-full text-black placeholder:text-[#868E96] outline-none text-[16px] leading-[20px] font-normal"
                                />
                            </div>
                            <label className="mt-4 text-[#212529] text-[14px] font-normal leading-[17.5px]">Password</label>
                            <div className="border border-[#D8D8D8] bg-[#F8F9FA99] rounded-[72px] h-[52px] flex items-center px-3.5 gap-3">
                                <Image src="/icons/lock.svg" alt="user" width={24} height={24} />
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="bg-transparent w-full h-full text-black placeholder:text-[#868E96] outline-none text-[16px] leading-[20px] font-normal"
                                />
                            </div>
                            <div className="mt-[18px] mb-6 w-full flex items-end justify-end">
                                <Link
                                    href="/forgot-password"
                                    className="text-[#EB3340] hover:underline transition duration-300 text-[16px] leading-[20px] font-normal tracking-[-0.02em]"
                                >
                                    Forgot Password?
                                </Link>
                            </div>

                            <Link
                                href="/profile"
                                className="bg-black w-full h-[56px] rounded-[43px] text-white text-[18px] leading-[20px] font-medium flex items-center gap-1 justify-center"
                            >
                                Login<IoIosArrowForward size={20} />
                            </Link>
                        </form>

                        <div className="flex items-center justify-center mt-6">
                            <h2 className="pr-1 text-[#7F7F8A] text-[16px] leading-[20px] tracking-[-0.02em] font-normal">
                                Don’t have an account?
                            </h2>{" "}
                            <Link
                                href="sign-up"
                                className="text-[#EB3340] hover:underline transition duration-300 text-[16px] leading-[20px] tracking-[-0.02em] font-semibold"
                            >
                                Sign Up
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
