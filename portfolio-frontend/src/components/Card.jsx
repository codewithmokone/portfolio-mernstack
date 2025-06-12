import React from 'react'
import { CheckCircleIcon, Globe } from 'lucide-react'

export const Card = () => {
    const skillsData = [
        {
            "skill_title": "Frontend Development",
            "skills_list": ["HTML & CSS", "Javascript", "React.js", "Redux", "Tailwind CSS", "Framer Motion"],
            "skill_icon": "<Globe size={24}/>"
        },
        {
            "skill_title": "Backend Development",
            "skills_list": ["Node.js", "Express.js", "RESTful APIs", "MongoDB", "Firebase", "Authentication"],
            "skill_icon": "<Globe size={24}/>"
        },
        {
            "skill_title": "Tools & Others",
            "skills_list": ["Git & GitHub", "Jest & Testing Library", "CI/CD Pipeline", "Webpack", "Figma", "VS Code"],
            "skill_icon": "<Globe size={24}/>"
        },
    ]


    return (
        <>
            {skillsData.map((skill, index) => (
                <div key={index} id='card' className='bg-white p-6 rounded-lg shadow-sm'>
                    <h3 className='text-xl font-bold mb-4 text-gray-800 flex items-center'>
                        {/* <span className='bg-blue-100 text-blue-800 p-2 rounded-full mr-3'>
                            {skill.skill_icon}
                        </span> */}
                        {skill.skill_title}
                    </h3>
                    <ul className='space-y-4'>
                        {skill.skills_list.map((skillset, index) => <li key={index} className='flex items-center'>
                            <CheckCircleIcon size={24} className='text-blue-700' />
                            <span className='text-gray-700 ml-4'>{skillset}</span>
                            </li>         
                        )}
                    </ul>
                </div>
            ))}
        </>
    )
}