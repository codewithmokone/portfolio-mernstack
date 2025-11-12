import React from 'react'
import { Card } from './card'

export const Skills = () => {
    const skillsData = [
        {
            "skill_title": "Frontend Development",
            "skills_list": ["HTML & CSS", "Javascript", "React.js", "Redux", "Tailwind CSS", "Material UI"],
            "skill_icon": "<Globe size={24}/>"
        },
        {
            "skill_title": "Backend Development",
            "skills_list": ["Node.js", "Express.js", "RESTful APIs", "MongoDB", "Firebase"],
            "skill_icon": "<Globe size={24}/>"
        },
        {
            "skill_title": "Tools & Others",
            "skills_list": ["Git & GitHub", "Vite", "CI/CD Pipeline", "Figma", "VS Code"],
            "skill_icon": "<Globe size={24}/>"
        },
    ]

    return (
        <section id='skills' className='min-h-screen flex items-center py-20 bg-gray-50'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='text-center mb-12'>
                    <h2 className='text-3xl font-bold text-gray-800'>Skills & Expertise</h2>
                    <div className='w-24 h-1 bg-gradient-to-r from-[#06C4C5] to-[#2F77F6] mx-auto mt-4 mb-6'></div>
                    <p className='text-gray-600 max-w-2xl mx-auto'>I've worked with a variety of technologies and tools throughout my career. Here are some if the key skillsI bring to the table.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    <Card skills={skillsData}/>
                </div>
            </div>
        </section>
    )
}