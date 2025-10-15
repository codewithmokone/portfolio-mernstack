import React from 'react'
import { Github, Linkedin } from 'lucide-react'

export const Footer = () => {
    return (
        <footer className='bg-gray-900 text-white py-12'>
            <div className='container mx-auto px-4'>
                <div className='flex flex-col md:flex-row justify-between items-center'>
                    <div className='mb-6 md:mb-0'>
                        <h2 className='text-2xl font-bold mb-2'>Portfolio</h2>
                        <p className="mt-2 text-gray-400 max-w-xs">
                            Creating innovative web solutions with modern technologies.
                        </p>
                    </div>
                    <div className='flex flex-col items-center md:items-end'>
                        <div className='flex flex-col gap-4'>
                            <ul className='flex gap-2'>
                                <li> <a href="https://github.com/codewithmokone" target="_blank"
                                    rel="noopener noreferrer">< Github size={24} className="text-gray-700 hover:text-blue-600 transition-colors" /></a></li>
                                <li><a href="https://www.linkedin.com/in/simon-lephoto" target="_blank"
                                    rel="noopener noreferrer">< Linkedin size={24} className="text-gray-700 hover:text-blue-600 transition-colors" /></a></li>
                            </ul>
                            <p className='text-gray-400'>@ {new Date().getFullYear()} Portfolio. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}