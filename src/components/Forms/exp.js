import React, { useState, useContext } from 'react'
import { Button } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';
import { resumeInfoContext } from '../resume'

import './form.css'
function ExperienceForm(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  const resume = useContext(resumeInfoContext);
  const [projects, addProject] = useState([{ projectdesc: ["a"], title: "b" }])
  const [experience, setExperience] = useState([{ projects, role: "c", compName: "c", compAdd: "d", strt: "e", end: "f" }])
  function handleProject() {
    const values = [...projects];
    values.push({ projectdesc: [""], title: "" })
    addProject(values);
  }
  function removeProject(key, project, p) {
    const list = [...projects];
    const value = list.map((e) => {
      if (e == project) {
        const j = e.projectdesc.findIndex(a => a == p)
        e.projectdesc.splice(j, 1);
        return e;
      }
      return e;
    })
    addProject(value);

  }
  function handleChange(e, project, ind) {
    const { name, value } = e.target;
    const list = [...projects]
    const p = list.map((e) => {
      if (e == project) {
        e.projectdesc[ind] = value;
        return e;
      }
      return e;
    })
    addProject(p);
  }
  function handlePoint(project) {
    const stateCopy = [...projects];
    const found = stateCopy.map(e => {

      if (e == project) {
        e.projectdesc.push("")
        return e
      }
      return e
    });
    addProject(found);
  }
  function handleTitle(e, project, i) {
    const { name, value } = e.target;
    const list = [...projects]
    const l = list.map((item, ind) => {
      if (item === project) {
        item.title = value;
        return item;
      }
      return item;
    })
    addProject(l);
  }
  function addExperience() {
    const value = [...experience]
    value.push({ projects: [{ projectdesc: [""], title: "" }], role: "", compName: "", compAdd: "", strt: "", end: "" })
    setExperience(value)
  }
  resume.setExp(projects);
  return (
    <form onSubmit={e => handleSubmit(e)}>
      <Button className="point" onClick={addExperience}>ADD EEXPERIENCE</Button>
      {experience.map((exp, ind)=>{
       return(
         <div>
             <Button className="point" onClick={handleProject}>ADD PROJECT</Button>
          {exp.projects.map((project, i) => {
          if (project.projectdesc.length) {
            return (
              <div>
                <label>Project Title</label>
                <input type='text' className="inputs" onChange={(e) => handleTitle(e, project, i)} />
                <label>Description Points</label>
                {project.projectdesc.map((p, ind) => {
                  return (
                    <div>
                      <input className="inputs" type='text' onChange={(e) => handleChange(e, project, ind)}
                        value={p} />
                      <a class="trash" onClick={() => removeProject(ind, project, p)}><FaTrash /></a>
                    </div>
                  )
                })}
                <Button className="point" onClick={() => handlePoint(project)}>ADD POINT</Button>
              </div>
            );
          }
        })}
         </div>
       );
      })}
    </form>
  )}

export default ExperienceForm;
