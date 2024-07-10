import React from 'react'
import { cn } from './constant'

export default function Button({ children, className, ...rest }) {
    return (
        <button {...rest} className={cn(className, `border border-primary px-12 py-[11px] duration-500 bg-white text-primary hover:bg-primary hover:text-white`)} >{children}</button>
    )
}
