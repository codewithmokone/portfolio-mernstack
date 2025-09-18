import axios from 'axios';
import React, { useState } from 'react'

const API = import.meta.env.VITE_API_URL || "http://localhost:4000";

function ProjectModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({});

  const handleSubmit = async () => {
    e.preventDefault();
    try {
      const projectInfo = await axios.post(`${API}/api/portfolio/upload`);
      
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6">
        <h2 className="text-center text-xl font-bold mb-4">Add Project</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className='flex flex-col'>
            <label htmlFor="title" className='font-medium'>Title</label>
            <input
              type="text"
              name='title'
              id='title'
              className='p-2 border mt-2'
              placeholder='Title' />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="description" className='font-medium'>Description</label>
            <input
              type="text"
              name='description'
              id='description'
              className='p-2 border mt-2'
              placeholder='Description' />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="category" className='font-medium'>Category</label>
            <select name="category" id="category" className='p-2 border mt-2'>
              <option value="">Frontend</option>
              <option value="">Mobile</option>
              <option value="">Full Stack</option>
            </select>
          </div>
          <div className='flex flex-col'>
            <label htmlFor="title" className='font-medium'>Github Link</label>
            <input
              type="text"
              name='githubLink'
              id='githubLink'
              className='p-2 border mt-2'
              placeholder='Github Link' />
          </div>
          <div className='flex flex-col'>
            <label
              htmlFor="liveLink" className='font-medium'>Live Link</label>
            <input
              type="text"
              name='liveLink'
              id='liveLink'
              className='p-2 border mt-2'
              placeholder='Live Link' />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="title" className='font-medium'>Upload Image</label>
            <input type="file" className='p-2 border mt-2' placeholder='Description' />
          </div>
          <div className="flex justify-end space-x-3">
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Add
            </button>
            <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ProjectModal