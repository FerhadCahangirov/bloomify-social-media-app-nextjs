import Link from 'next/link'
import React from 'react'
import Image from "next/image";
import MobileMenu from './MobileMenu';

function Navbar() {
    return (
        <div className='h-24 flex justify-between items-center'>
            {/* LEFT */}
            <div className='md:hidden lg:block w-[20%]'>
                <Link href="/" className='font-bold text-xl text-blue-600'>BLOOMIFY</Link>
            </div>
            {/* CENTER */}
            <div className='hidden md:flex w-[50%] text-sm'>
                {/* LINKS */}
                <div className="flex gap-6 text-gray-600">
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src="/home.png"
                            alt="Homepage"
                            width={16}
                            height={16}
                            className="w-4 h-4"
                        />
                        <span>Homepage</span>
                    </Link>
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src="/friends.png"
                            alt="Friends"
                            width={16}
                            height={16}
                            className="w-4 h-4"
                        />
                        <span>Friends</span>
                    </Link>
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src="/stories.png"
                            alt="Stories"
                            width={16}
                            height={16}
                            className="w-4 h-4"
                        />
                        <span>Stories</span>
                    </Link>
                </div>
            </div>

            {/* RIGHT */}
            <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end">

                <MobileMenu />
            </div>

        </div>
    )
}

export default Navbar