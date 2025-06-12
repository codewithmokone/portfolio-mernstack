import React, {useState} from 'react';
import { Github, ExternalLinkIcon } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: "E-commerce Platform",
        category: "Web Application",
        image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1568&q=80",
        description: 'A full-feature e-commerce platform with product manager',
        technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
        liveLink: "#",
        githubLink: "#"
    },
    {
        id: 2,
        title: "Weather Dashboard",
        category: "API Integration",
        image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1568&q=80",
        description: "An interactive weather dashboard",
        technologies: ['Javascript', 'OpenWeather API', 'Chart.js', 'Geolocation API'],
        liveLink: "#",
        githubLink: "#"
    }
]

const categories = [
    'All',
    'Web Application',
    'API Integration',
    'Frontend',
    'Full Stack'
]

export const Projects = () => {
    const [activeCategory, setActiveCategory] = useState('All')
    const filteredprojects = activeCategory === 'All' 
        ? projects 
        : projects.filter((project) => project.category === activeCategory)
    return (
        <section id='projects' className='py-20 bg-white'>
            <div className='container mx-auto px-4 sm:py-6 lg:px-8'>
                <div className='text-center mb-12'>
                    <h2 className='text-3xl font-bold text-gray-800'>My Projects</h2>
                    <div className='w-24 h-1 bg-blue-600 mx-auto mt-4 mb-6'></div>
                    <p className='text-gray-600 max-w-2xl mx-auto'>
                        Here are some of my recent projects. Each one was build to solve
                         a specific problem and showcase different skills and technologies.
                    </p>
                </div>
                <div className='flex flex-wrap justify-center gap-4 mb-12'>
                    {categories.map((category, index) => (
                        <button 
                            key={index}
                            onClick={()=> setActiveCategory(category)}
                            className={`px-4 py-2 rounded-md transition-colors ${activeCategory === category ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                            >
                            {category}
                        </button>
                    ))}
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {filteredprojects.map((project,index) => (
                        <div key={index} className='bg-gray-50 rounded-lg overflow-hidden shadows-md hover:shadow-lg transition-shadow'>
                            <div className="h-48 overflow-hidden">
                                <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform hover:scale-105"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-bold text-gray-800">
                                    {project.title}
                                </h3>
                                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                                    {project.category}
                                </span>
                                </div>
                                <p className="text-gray-600 mb-4">{project.description}</p>
                                <div className="mb-4">
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded"
                                    >
                                        {tech}
                                    </span>
                                    ))}
                                </div>
                                </div>
                                <div className="flex justify-between">
                                <a
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors"
                                >
                                    <ExternalLinkIcon size={16} />
                                    <span>Live Demo</span>
                                </a>
                                <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 text-gray-700 hover:text-gray-900 transition-colors"
                                >
                                    <Github size={16} />
                                    <span>Source Code</span>
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