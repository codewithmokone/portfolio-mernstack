import React from 'react'
import { Github, Linkedin } from 'lucide-react'

export const Hero = () => {
    return (
        <section id='home' className='min-h-screen flex items-center bg-gradient-to-r from-blue-50 to-indigo-50 py-20 md:py-32'>
            <div className='container mx-auto px-4 flex flex-col md:flex-row items-center'>
                <div className='md:w-1/2 mb-10 md:mb-0'>
                    <h1 className='text-2xl md:Text-5xl lg:text-6xl font-bold text-gray-900 mb-4'>Hi, I'm <span className='text-blue-600'>Simon Lephoto</span></h1>
                    <h2 className='text-xl md:text-2xl font-medium text-gray-600 mb-6'>Full Stack Developer</h2>
                    <p className="text-gray-600 text-lg mb-8 max-w-lg">I build exceptional and accessible digital experiences for the
                        web. Focused on creating intuitive and high-performance
                        applications.</p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a href="#contact"
                            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center">Get In Touch</a>
                        <a href="#projects"
                            className="border px-4 py-3 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors inline-flex items-center">View My Work</a>
                    </div>
                    <div className='flex gap-6 mt-6'>
                        <a href="#">< Github size={24} className="text-gray-700 hover:text-blue-600 transition-colors" /></a>
                        <a href="#">
                            < Linkedin size={24} className="text-gray-700 hover:text-blue-600 transition-colors" />
                        </a>
                    </div>
                </div>
                <div className='md:w-1/2 flex justify-center'>
                    <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
                        <img src="#" alt="Professional headshot" className="w-full h-full object-cover bg-black" />
                    </div>
                </div>
            </div>
        </section>
    )
}