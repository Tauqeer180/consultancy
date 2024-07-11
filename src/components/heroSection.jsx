import Image from 'next/image'
import React from 'react'
import Button from './common/button'

export default function HeroSection() {
    return (
        <div className=' relative'>
            <Image alt='service' className=' w-full sm:max-h-screen max-h-[348px]' src="https://static.wixstatic.com/media/82fcd3_47a465bb9c6f4b52a0cc83f281806af8~mv2.jpg/v1/fill/w_1127,h_784,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/82fcd3_47a465bb9c6f4b52a0cc83f281806af8~mv2.jpg" height='682' width='1100' />
            <div className=' absolute bottom-0 left-1/2 -translate-x-1/2 bg-white lg:max-w-[835px] md:max-w-[700px] sm:max-w-[600px] max-w-[280px] w-full mx-auto text-center pb-[6px] ' >
                <h2 className=' md:text-[26px] sm:text-sm text-base pt-[35px] sm:pb-3 pb-2' >Developing Innovative Strategies</h2>
                <h1 className='lg:text-6xl md:text-5xl sm:text-4xl text-[22px] font-normal text-primary sm:pb-5 pb-2' >ACHIEVING GROWTH</h1>
                <Button>Free Consultaion</Button>
            </div>
        </div>
    )
}
