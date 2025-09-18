import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { PlusIcon } from 'lucide-react'
import ProjectModal from '../components/ProjectModal';

const API = import.meta.env.VITE_API_URL || "http://localhost:4000";

function Projects() {
    const [projects, setProjects] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const { data } = await axios.get(`${API}/api/portfolio/fetch`);
                setProjects(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        }
        fetchProjects();
    }, []);

    console.log(projects);

    return (
        <main className='p-6 max-w-4xl mx-auto'>
            <div className="sm:flex sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-2xl font-semibold text-gray-900">Projects</h1>
                    <p className="mt-1 text-sm text-gray-500">
                        Manage projects.
                    </p>
                </div>
                <div className="mt-4 sm:mt-0">
                    <button
                        type="button"
                        onClick={() => setIsModalOpen(true)}
                        className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                    >
                        <PlusIcon className="h-4 w-4 mr-2" />
                        Add Project
                    </button>
                </div>
            </div>
            <div className='shadow overflow-hidden rounded-lg mt-4'>
                <div className='overflow-x-auto'>
                    <table className='min-w-full divide-y divide-gray-200'>
                        <thead className='bg-gray-200'>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Image</th>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Title</th>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Category</th>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Description</th>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Stack</th>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Live Demo</th>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Github Link</th>
                        </thead>
                        <tbody>
                            {projects?.map((project, index) => (
                                <tr key={index} >
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        <img
                                            src={`data:${project.image.content};base64,${project.image.data}`}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform hover:scale-105"
                                        />
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{project.title}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{project.category}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{project.desc}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{project.technologies}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">

                                        <a href={project.liveLink} target='_blank'>
                                            Visit
                                        </a>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{project.githubLink}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {isModalOpen ? (
                <ProjectModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                />
            ) : (
                ""
            )

            }
        </main>
    )
}

export default Projects