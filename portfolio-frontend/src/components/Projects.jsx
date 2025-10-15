import React, { useState } from 'react';
import { Github, ExternalLinkIcon } from 'lucide-react';
import { useEffect } from 'react';
import basadiImage from '../assets/images/basadiewasteimage.png'
import ourCodeImage from '../assets/images/ourcodeimage.png'
import theFatChiliCoImage from '../assets/images/thefatchilicoimage.png'

const projects = [
    {
        'image': basadiImage,
        'title': "Basadi Ewaste",
        'link': "www.basadiewaste.co.za",
        'techStack': ['React', 'Tailwindcss']
    },
    {
        'image': ourCodeImage,
        'title': "OurCode",
        'link': "www.ourcode.co.za",
        'techStack': ['React', 'Tailwindcss']
    },
    {
        'image': theFatChiliCoImage,
        'title': "The Fat Chili Co",
        'link': "www.thefatchilico.co.za",
        'techStack': ['React', 'Tailwindcss']
    },
]

export const Projects = () => {

    return (
        <section id='projects' className='min-h-screen flex items-center py-20 bg-white'>
            <div className='container mx-auto px-4 sm:py-6 lg:px-8'>
                <div className='text-center mb-20'>
                    <h2 className='text-3xl font-bold text-gray-800'>My Projects</h2>
                    <div className='w-24 h-1 bg-blue-600 mx-auto mt-4 mb-6'></div>
                    <p className='text-gray-600 max-w-2xl mx-auto'>
                        Here are some of my recent projects. Each one was build to solve
                        a specific problem and showcase different skills and technologies.
                    </p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-4'>
                    {projects && projects.map((project, index) => (
                        <div key={index} className='bg-gray-50 rounded-lg overflow-hidden border border-gray-300 shadows-md hover:shadow-lg transition-shadow'>
                            <div className="h-70 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-fill transition-transform hover:scale-105"
                                />
                            </div>
                            <div className="flex items-center justify-between gap-2 p-6">
                                <div className="flex justify-between items-start">
                                    <h3 className="text-xl font-bold text-gray-800">
                                        {project.title}
                                    </h3>
                                </div>
                                {/* <p className="text-gray-600 mb-4">{project.description}</p> */}
                                {/* <div className="mb-4">
                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack.map((stack, stackIndex) => (
                                            <span
                                                key={stackIndex}
                                                className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                                            >
                                                {stack}
                                            </span>
                                        ))}
                                    </div>
                                </div> */}
                                <div >
                                    <a
                                        href={`https://${project.link}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors"
                                    >
                                        {/* <ExternalLinkIcon size={16} /> */}
                                        {project.link}
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}