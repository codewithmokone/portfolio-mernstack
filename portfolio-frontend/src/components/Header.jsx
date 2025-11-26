import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { ArrowDownToLine, Menu, X } from "lucide-react";
import file from "../assets/Resume_-_Simon_Lephoto.pdf";

export const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    }

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-bold text-gradient">SL</div>
                {/* Desktop Menu */}
                <nav className="hidden md:flex md:items-center space-x-8">
                    <a href="#home" className="text-gray-600 hover:text-blue-500 font-medium">Home</a>
                    <a href="#about" className="text-gray-600 hover:text-blue-500 font-medium">About</a>
                    <a href="#skills" className="text-gray-600 hover:text-blue-500 font-medium">Skills</a>
                    <a href="#projects" className="text-gray-600 hover:text-blue-500 font-medium">Projects</a>
                    <a href="#contact" className="text-gray-600 hover:text-blue-500 font-medium">Contact</a>
                    <a
                        href={file}
                        target="_blank"
                        className='flex items-center gap-2 bg-gradient-to-r from-[#06C4C5] to-[#2F77F6] h-11 rounded-md px-6 text-white hover:shadow-md'
                    >
                        <ArrowDownToLine />CV
                    </a>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-500 hover:text-gray-700 focus:outline-none"
                    onClick={toggleMobileMenu}
                >
                    {mobileMenuOpen ? (
                        <X className="w-6 h-6" />
                    ) : (
                        <Menu className="w-6 h-6" />
                    )}
                </button>
            </div>
            {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 border-t border-border/20 bg-white">
                        <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
                            <a 
                            href="#home" 
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-gray-600 hover:text-gray-900 font-medium"
                            >Home
                            </a>
                            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-gray-600 hover:text-gray-900 font-medium">About</a>
                            <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="text-gray-600 hover:text-gray-900 font-medium">Skills</a>
                            <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="text-gray-600 hover:text-gray-900 font-medium">Projects</a>
                            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-gray-600 hover:text-gray-900 font-medium">Contact</a>
                        </div>
                    </div>
                )}
        </header>
    )
}