import React from 'react'

export const Footer = () => {
    return (
        <footer className='bg-gray-900 text-white py-12'>
            <div className='container mx-auto px-4'>
                <div className='flex flex-col md:flex-row justify-between items-center'>
                    <div className='mb-6 md:mb-0'>
                        <div className='text-2xl font-bold mb-2'>Portfolio</div>
                    </div>
                    <div className='flex flex-col items-center md:items-end'>
                        {/* <div className='flex space-x-4 mb-4'>
                            <a href=""></a>
                            <a href=""></a>
                            <a href=""></a>
                            <a href=""></a>
                        </div> */}
                        <div>
                            <p>@ {new Date().getFullYear()} Portfolio. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}