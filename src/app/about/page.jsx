import Image from 'next/image'
import React from 'react'

export default function Page() {
    return (
        <div className=" max-w-7xl lg:px-11 sm:px-4 mx-auto pb-20">
            <h2 className='sm:pb-11 pb-2 sm:pt-20 pt-16 text-center md:text-6xl sm:text-4xl text-3xl uppercase tracking-wider' >About</h2>

            <div className="grid sm:grid-cols-2 grid-cols-1 items-center" >
                <div className="px-4 sm:px-2 sm:pe-16" >
                    <p className=' text-base font-light pb-4' >I&apos;m a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                    <p className=' text-base font-light max-sm:pb-4' >I&apos;m a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p>


                </div>
                <div>
                    <Image alt='banner' width="490" className="w-full" height="635" src="https://static.wixstatic.com/media/82fcd3_0fdc534469f5472699491ca8fc95574a~mv2.jpg/v1/fill/w_489,h_634,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/82fcd3_0fdc534469f5472699491ca8fc95574a~mv2.jpg" />
                </div>

            </div>

        </div>
    )
}
