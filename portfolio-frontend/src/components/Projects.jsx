import React from 'react'

const projects = [
    {
        id: 1,
        title: "E-commerce Platform",
        category: "Web Application",
        image: '',
        description: 'A full-feature e-commerce platform with product manager',
        technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
        liveLink: '#',
        githubLink: '#'
    },
    {
        id: 2,
        title: "Weather Dashboard",
        category: "API Integration",
        image: '',
        description: 'An interactive weather dashboard',
        technologies: ['Javascript', 'OpenWeather API', 'Chart.js', 'Geolocation API'],
        liveLink: '#',
        githubLink: '#'
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
    const filteredprojects = activeCategory === 'All' ? projects : projects.filter((project) => project.category === activeCategory)
    return (
        <section id='projects' className='py-20 bg-gray-50'>
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
                    {}
                </div>
            </div>
        </section>
    )
}