import React from 'react'

export const About = () => {
    return (
        <section id='about' className='py-20 bg-white'>
            <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Developer working"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              My Journey
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Hi, I’m [Your Name] — a passionate Full Stack Developer with a solid foundation in both front-end and back-end development. I recently graduated with a degree in [Your Degree, e.g., BSc in Computer Science] from [Your University], where I developed a strong interest in building intuitive, responsive web applications and solving real-world problems through code.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              During my studies, I honed my skills in technologies like JavaScript, React, Node.js, Express, and MongoDB, while also gaining experience with HTML, CSS, SQL, Git, and modern development tools. I’ve worked on several academic and personal projects that showcase my ability to design, develop, and deploy full-stack applications from the ground up.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              What sets me apart is my curiosity and eagerness to learn. I’m always exploring new frameworks, keeping up with the latest trends in web development, and looking for opportunities to grow. Whether it’s collaborating with a team or tackling a solo project, I take pride in writing clean, maintainable code and delivering thoughtful user experiences.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
                Right now, I’m looking for exciting opportunities where I can contribute, learn from experienced developers, and continue building impactful digital solutions.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Education</h4>
                <p className="text-gray-600">
                  Diploma In IT - Rosebank College
                  <br />
                  Certificate In React Development - MLab 
                  <br />
                  University of Technology
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Location</h4>
                <p className="text-gray-600">
                  Benoni
                  <br />
                  Johannesburg
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
        </section>
    )
}