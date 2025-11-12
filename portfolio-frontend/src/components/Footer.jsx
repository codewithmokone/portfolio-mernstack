import React from 'react'
import { Github, Linkedin } from 'lucide-react'

export const Footer = () => {
    return (
        <footer className='bg-white text-white py-12 border border-gray-300'>
            <div className='container mx-auto px-4'>
                <div className='flex flex-col md:flex-row justify-between items-center'>
                    <div className='mb-6 md:mb-0'>
                        <h2 className='text-2xl font-bold mb-2 text-gradient'>SL</h2>
                    </div>
                    <div className='flex items-center md:items-end'>
                        <p className='text-gray-400'>@ {new Date().getFullYear()} Simon Lephoto. All rights reserved.</p>
                    </div>
                    <div className='flex items-center justify-center'>
                        <ul className='flex gap-2'>
                            <li> <a href="https://github.com/codewithmokone" target="_blank"
                                rel="noopener noreferrer">< Github size={24} className="text-gray-700 hover:text-gradient transition-colors" /></a></li>
                            <li><a href="https://www.linkedin.com/in/simon-lephoto" target="_blank"
                                rel="noopener noreferrer">< Linkedin size={24} className="text-gray-700 hover:text-blue-600 transition-colors" /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}