import React, { useState, useContext } from 'react'
import { Button } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';
import { resumeInfoContext } from '../resume'

import './form.css'
function ProjectForm(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  const resume = useContext(resumeInfoContext);
  const [projects, addProject] = useState([{ projectdesc: [""], title: "" ,link:"",start:"",end:""}])

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
  function handleLink(e,project,i)
  {
    const {name,value}=e.target
    const list=[...projects]
    if(name=='link')
    list[i].link=value;
    else if(name=='start')
    list[i].start=value;
    else if(name=='end')
    list[i].end=value;
    addProject(list);
  }
  resume.setProject(projects);
  return (
    <form onSubmit={e => handleSubmit(e)}>
      <Button className="point" onClick={handleProject}>ADD PROJECT</Button>
      {projects.map((project, i) => {
        if (project.projectdesc.length>=1) {
          return (
            <div>
              <label>Project Title</label>
              <input type='text' className="inputs" onChange={(e) => handleTitle(e, project, i)} />
              <label>Project Link</label>
              <input type='url' name='link'className="inputs" onChange={(e) => handleLink(e, project, i)} />
              <label>Start Date</label>
              <input type='text' name='start'className="inputs" onChange={(e) => handleLink(e, project, i)} />
              <label>End Date</label>
              <input type='text' name='end'className="inputs" onChange={(e) => handleLink(e, project, i)} />

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

    </form>
  )
}
export default ProjectForm;
