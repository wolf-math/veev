import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from '../api';

export default function ProjectDetails() {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    api.get(`/api/projects/${id}/`)
      .then((res) => {
        setProject(res.data);
      })
      .catch((err) => {
        console.error('Error fetching project details:', err);
      });
  }, [id]);

  if (!project) return <div>Loading...</div>;

  return (
    <div>
      <h1>{project.name}</h1>
      <p>Status: {project.status}</p>
      <p>Description: {project.description}</p>
      <p>Budget: ${project.budget}</p>
      <p>Cost: ${project.cost}</p>
      <p>Start Date: {new Date(project.start_date).toLocaleString()}</p>
      <p>Estimated Completion: {new Date(project.estimated_completion).toLocaleString()}</p>
      <p>Author: {project.author}</p>
    </div>
  );
}
