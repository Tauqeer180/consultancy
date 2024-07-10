import React from 'react'
import { InfoCard } from './common/Cards'


let data = [
    {
        heading: "services",
        text: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.",
        link: ""
    },
    {
        heading: "projects",
        text: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.",
        link: ""
    },
    {
        heading: "clients",
        text: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.",
        link: ""
    },

]
export default function MoreInfoSection() {
    return (
        <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1' >
            {data?.map((d, i) => {

                return <div key={i}>

                    <InfoCard data={d} /></div>
            })}
        </div>
    )
}
