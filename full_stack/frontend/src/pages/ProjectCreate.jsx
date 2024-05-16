import { useState } from "react";
import { Navigate } from "react-router-dom";
import api from '../api'; 

export default function ProjectCreate() {
  const [info, setInfo] = useState({
    name: "",
    status: "planning",  // Default value
    description: "",
    budget: "",
    cost: "",
    start_date: "",
    estimated_completion: "",
  });

  const [redirect, setRedirect] = useState(false)

  const createProject = e => {
    e.preventDefault();

    // Format the dates
    const formattedInfo = {
      ...info,
      start_date: new Date(info.start_date).toISOString(),
      estimated_completion: new Date(info.estimated_completion).toISOString()
    };

    // Log the data being sent
    console.log("Creating project with data:", formattedInfo);

    api.post("/api/projects/", formattedInfo)
      .then((res) => {
        if (res.status === 201) {
          alert("Project created");
          setRedirect(true)
        } else {
          alert("Project wasn't created");
        }
      })
      .catch((err) => {
        // Log the error response
        console.error("Error creating project:", err.response.data);
        alert("Error creating project: " + JSON.stringify(err.response.data));
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo(prevInfo => ({
      ...prevInfo,
      [name]: value
    }));
  };

  if (redirect) {
    return <Navigate to="/" />; // Navigate to home page on successful creation
  }

  return (
    <div>
      <h1>Create Project</h1>
      <form onSubmit={createProject}>
        <label htmlFor="name">Name</label>
        <br />
        <input
          type="text"
          id="name"
          name="name"
          required
          onChange={handleChange}
          value={info.name}
        />
        <br />

        <label htmlFor="status">Status</label>
        <br />
        <select
          id="status"
          name="status"
          required
          onChange={handleChange}
          value={info.status}
        >
          <option value="planning">Planning</option>
          <option value="inProgress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
        <br />

        <label htmlFor="description">Description</label>
        <br />
        <input
          type="text"
          id="description"
          name="description"
          required
          onChange={handleChange}
          value={info.description}
        />
        <br />

        <label htmlFor="budget">Budget</label>
        <br />
        <input
          type="number"
          step="0.01"
          id="budget"
          name="budget"
          required
          onChange={handleChange}
          value={info.budget}
        />
        <br />

        <label htmlFor="cost">Cost</label>
        <br />
        <input
          type="number"
          step="0.01"
          id="cost"
          name="cost"
          required
          onChange={handleChange}
          value={info.cost}
        />
        <br />

        <label htmlFor="start_date">Start Date</label>
        <br />
        <input
          type="datetime-local"
          id="start_date"
          name="start_date"
          required
          onChange={handleChange}
          value={info.start_date}
        />
        <br />

        <label htmlFor="estimated_completion">Estimated Completion</label>
        <br />
        <input
          type="datetime-local"
          id="estimated_completion"
          name="estimated_completion"
          required
          onChange={handleChange}
          value={info.estimated_completion}
        />
        <br />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
