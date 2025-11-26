import React from 'react'
import { ArrowDown } from 'lucide-react'
import file from "../assets/Resume_-_Simon_Lephoto.pdf";

export const Hero = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id='home' className='min-h-screen flex items-center bg-gradient-to-r from-blue-40 to-indigo-50 py-20'>
            <div className="container mx-auto text-center space-y-8">
                <div className="space-y-4 animate-fade-in">
                    <p className="text-gradient text-lg font-medium">Hi there, I'm</p>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                        <span className="text-gradient">Simon Lephoto</span>
                    </h1>
                    <h2 className="text-2xl md:text-4xl text-gray-500 font-normal font-poppins">
                        Full Stack Developer
                    </h2>
                </div>

                <p className="text-lg md:text-xl text-gray-500 font-medium max-w-2xl mx-auto leading-relaxed font-poppins">
                    Building intuitive, responsive web applications and solving real-world problems through clean code and thoughtful design.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                    <a
                        href='#contact'
                        onClick={() => scrollToSection('contact')}
                        className='flex items-center bg-gradient-to-r from-[#06C4C5] to-[#2F77F6] h-11 rounded-md px-8 text-white font-medium hover:shadow-md'
                    >
                        Get In Touch
                    </a>
                    <a
                        href={file}
                        target='_blank'
                        className='flex items-center h-11 rounded-md px-8 border border-[#06C4C5]/80 text-gradient font-medium hover:bg-blue-600/20'
                    >
                        Download CV
                    </a>
                </div>

                <div>
                    <button
                        onClick={() => scrollToSection('about')}
                        className="absolute bottom-16 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer hover:text-primary transition-smooth"
                        aria-label="Scroll to about section"
                    >
                        <ArrowDown className="w-6 h-6 text-blue-500" />
                    </button>
                </div>

            </div>
        </section>
    )
}