import React from 'react'
import Image from 'next/image'
import Comments from './Comments'

function Post() {
    return (
        <div className='flex flex-col gap-4'>
            {/* USER */}
            <div className="flex items-center justify-between">
                <div className='flex items-center gap-4'>
                    <Image src="https://images.pexels.com/photos/1743165/pexels-photo-1743165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        width={40} height={40}
                        alt="" className='w-10 h-10 rounded-full' />
                    <span className='font-medium'>John Snow</span>
                </div>
                <Image src="/more.png"
                    width={16} height={16}
                    alt="" />
            </div>
            {/* DESC */}
            <div className="flex flex-col gap-4">
                <div className='w-full min-h-96 relative'>
                    <Image src="https://images.pexels.com/photos/167684/pexels-photo-167684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        fill className='object-cover rounded-md'
                        alt="" />
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, quia est neque ex, molestiae facere culpa eius, cupiditate harum ratione incidunt natus odio provident. Sed quod magnam impedit a vitae!
                </p>
            </div>
            {/* INTERACTION */}
            <div className="flex items-center justify-between text-sm my-4">
                <div className="flex gap-8">
                    <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-md">
                        <Image src="/like.png"
                            width={16} height={16}
                            alt=""
                            className='cursor-pointer' />
                        <span className='text-gray-300'>|</span>
                        <span className='text-gray-500'>123
                            <span className='hidden md:inline'> Likes</span>
                        </span>
                    </div>

                    <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-md">
                        <Image src="/comment.png"
                            width={16} height={16}
                            alt=""
                            className='cursor-pointer' />
                        <span className='text-gray-300'>|</span>
                        <span className='text-gray-500'>22
                            <span className='hidden md:inline'> Comments</span>
                        </span>
                    </div>
                </div>
                <div className=''>
                    <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-md">
                        <Image src="/share.png"
                            width={16} height={16}
                            alt=""
                            className='cursor-pointer' />
                        <span className='text-gray-300'>|</span>
                        <span className='text-gray-500'>22
                            <span className='hidden md:inline'> Shares</span>
                        </span>
                    </div>
                </div>
            </div>
            <Comments/>

        </div>
    )
}

export default Post