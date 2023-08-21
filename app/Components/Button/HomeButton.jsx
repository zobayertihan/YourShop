'use client'

import React from 'react'
import { useRouter } from 'next/navigation'


const HomeButton = () => {
    const router = useRouter();
    return (
        <div className='flex justify-center items-center mb-10'>
            <button className='text-lg border border-purple-400 bg-violet-400 px-5 py-2 rounded-2xl ' onClick={() => router.push('/')}>Home</button>
        </div>
    )
}

export default HomeButton;