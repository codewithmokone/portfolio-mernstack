import React, { useState } from "react"
import { HashLink } from "react-router-hash-link"

export const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    }

    return (
        <header className="sticky top-0 z-50 bg-white shadow-sm">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-bold text-gray-800">SL</div>
                {/* Desktop Menu */}
                <nav className="hidden md:flex space-x-8">
                    <a href="#home" className="text-gray-600 hover:text-gray-900 font-medium">Home</a>
                    <a href="#about" className="text-gray-600 hover:text-gray-900 font-medium">About</a>
                    <a href="#skills" className="text-gray-600 hover:text-gray-900 font-medium">Skills</a>
                    <a href="#projects" className="text-gray-600 hover:text-gray-900 font-medium">Projects</a>
                    <a href="#contact" className="text-gray-600 hover:text-gray-900 font-medium">Contact</a>
                </nav>
                {/* Mobile Menu Button */}
                <button className="md:hidden text-gray-500 hover:text-gray-700 focus:outline-none">

                </button>
                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden bg-white border-t">
                        <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
                            <a href="#home" className="text-gray-600 hover:text-gray-900 font-medium">Home</a>
                            <a href="#about" className="text-gray-600 hover:text-gray-900 font-medium">About</a>
                            <a href="#skills" className="text-gray-600 hover:text-gray-900 font-medium">Skills</a>
                            <a href="#projects" className="text-gray-600 hover:text-gray-900 font-medium">Projects</a>
                            <a href="#contact" className="text-gray-600 hover:text-gray-900 font-medium">Contact</a>
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
}