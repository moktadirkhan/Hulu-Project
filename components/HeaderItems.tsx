import React from 'react'
const HeaderItems = ({Icon,title}) => {
    return (
        <div className="flex flex-col items-center w-12 transition duration-100 transform cursor-pointer group sm:w-20 hover:scale-125 hover:text-white">
        <Icon className='h-8 mb-1 hover:animate-wiggle'/>
        
        <p className='tracking-widest opacity-0 group-hover:opacity-100'>{title}</p>
    </div>

    )
}

export default HeaderItems
