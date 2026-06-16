import React from 'react'

const DashbordHeading = ({title,description}) => {
    return (
        <div className='p-5 text-[#2c221e]'>
            <div className='border-b border-[#dfcbaf] space-y-2 pb-4'>
                <h1 className='text-3xl font-black uppercase tracking-tight'>{title}</h1>
                <p className='text-sm font-medium text-[#2c221e]/70 leading-relaxed'>{description}</p>
            </div>
        </div>
    )
}

export default DashbordHeading