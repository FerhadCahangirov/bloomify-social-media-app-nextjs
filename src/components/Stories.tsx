import React from 'react'
import Image from "next/image";

function Stories() {
    return (
        <div className='p-4 bg-white rounded-lg shadow-md overflow-scroll text-sm scrollbar-hide'>
            <div className='flex gap-8'>
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                    <Image src="https://images.pexels.com/photos/14735466/pexels-photo-14735466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='' width={80} height={80} className="w-20 h-20 rounded-full ring-2" />
                    <span className='font-medium'>Ricky</span>
                </div>
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                    <Image src="https://images.pexels.com/photos/14735466/pexels-photo-14735466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='' width={80} height={80} className="w-20 h-20 rounded-full ring-2" />
                    <span className='font-medium'>Ricky</span>
                </div>
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                    <Image src="https://images.pexels.com/photos/14735466/pexels-photo-14735466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='' width={80} height={80} className="w-20 h-20 rounded-full ring-2" />
                    <span className='font-medium'>Ricky</span>
                </div>
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                    <Image src="https://images.pexels.com/photos/14735466/pexels-photo-14735466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='' width={80} height={80} className="w-20 h-20 rounded-full ring-2" />
                    <span className='font-medium'>Ricky</span>
                </div>
                
                
            </div>
        </div>
    )
}

export default Stories