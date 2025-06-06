import React from 'react'
import { Card } from './card'

export const Skills = () => {
    return (
        <section id='skills' className='py-20 bg-white'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='text-center mb-12'>
                    <h2 className='text-3xl font-bold text-gray-800'>Skills & Expertise</h2>
                    <div className='w-24 h-1 bg-blue-600 mx-auto mt-4 mb-6'></div>
                    <p className='text-gray-600 max-w-2xl mx-auto'>I've worked with a variety of technologies and tools throughout my career. Here are some if the key skillsI bring to the table.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    <Card />
                </div>
            </div>
        </section>
    )
}