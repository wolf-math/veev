import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import api from '../api'

import '../styles/Home.css'

export default function Home() {
  const [projects, setProjects] = useState([])

  const getProjects = () => {
    api.get("/api/projects/")
    .then((res) => res.data)
    .then((data) => setProjects(data))
    .catch((err) => alert(err))
  }
 
  useEffect(() => {
    getProjects()
  },[])
  
  console.log(projects)

  return  (
    <>
      <div>
        <h1>All Projects</h1>
      </div>
      <Link to="/create-project">
        <button>Create New Project</button>
      </Link>
      <div>
        {projects.map(project => (
          <div key={project.id} className='project'>
            <h2>
              <Link to={`/project-details/${project.id}`}>
                {project.name}
              </Link>
            </h2>
            <p>Status: {project.status}</p>
            <p>Description: {project.description}</p>
            <p>Budget: ${project.budget}</p>
            <p>Cost: ${project.cost}</p>
          </div>
        ))}
      </div>
    </>
  )
}