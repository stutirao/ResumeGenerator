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
  const [projects, addProject] = useState([{ projectdesc: [""], title: "",link:"" }])
  const [experience, setExperience] = useState([{ projects, role: "", compName: "", compAdd: "", strt: "", end: "" }])
  function handleProject(exp) {
    const ex = [...experience];
    const pro=[...projects];
    const found = ex.map(e => {
      if (e == exp) {
        e.projects.push({ projectdesc: [""], title: "",link:"" })
        return e;
      }
      return e;
    })
   
    setExperience(found);

  }
  function handlePoint(exp, project, i) {
    const stateCopy = [...experience];
    const found = stateCopy.map(e => {
      if (e == exp) {
        console.log("before", e.projects[i])
        e.projects[i].projectdesc.push("");
        console.log("before", e.projects[i])
        return e;
      }
      return e;
    });
    setExperience(found);
  }

  function removeProject(j,i, ind) {
    const list=[...experience]
    list[j].projects[i].projectdesc.splice(ind,1);
    setExperience(list);
  }
  function removeExperience(exp, ind) {
    const list = [...experience]
    console.log("before", list);
    const j = list.findIndex(a => a == exp)
    const value = list.splice(ind, 1);
    console.log("after", list, j, ind);
    setExperience(list)
  }
  function handleChange(e,j,i,ind) {
    const { name, value } = e.target;
    const list = [...experience]
    list[j].projects[i].projectdesc[ind]=value;
    setExperience(list);
  }

  function handleTitle(e,j, i) {
    const { name, value } = e.target;
    const list = [...experience]
    if(name=='title')
    list[j].projects[i].title=value;
    else if(name=='link')
    setExperience(list);
  }
  function addExperience() {
    const value = [...experience]
    value.push({ projects: [{ projectdesc: [""], title: "" }], role: "", compName: "", compAdd: "", start: "", end: "" })
    setExperience(value)
  }
 function changeExp(e,j)
 {
   const {name,value}=e.target
   const list=[...experience]
   if(name=='role')
   list[j].role=value;
   else if(name=='compName')
   list[j].compName=value;
   else if(name=='compAdd')
   list[j].compAdd=value;
   else if(name=='start')
   list[j].start=value;
   else if(name=='end')
   list[j].end=value;
   setExperience(list)
 }

  resume.setExp(experience);
  return (
    <form onSubmit={e => handleSubmit(e)}>
      <Button className="point" onClick={addExperience}>ADD EEXPERIENCE</Button>
      {experience.map((exp, j) => {
        return (
          <div>
            <div p-10><label><strong>EXPERIENCE {j+1}</strong></label>
              <a class="trash" onClick={() => removeExperience(exp, j)}><FaTrash /></a>
            </div>
            <label>ROLE</label>
            <input name="role" className="inputs" onChange={(e)=>changeExp(e,j)}></input>
            <label>COMPANY NAME</label>
            <input name="compName" className="inputs"onChange={(e)=>changeExp(e,j)}></input>
            <label>COMPANY ADDRESS</label>
            <input name="compAdd" className="inputs"onChange={(e)=>changeExp(e,j)}></input>
            <label>START DATE</label>
            <input name="start" className="inputs"onChange={(e)=>changeExp(e,j)}></input>
            <label>END DATE</label>
            <input name="end" className="inputs"onChange={(e)=>changeExp(e,j)}></input>
            <Button className="point" onClick={() => handleProject(exp)}>ADD PROJECT</Button>
           
            {exp.projects.map((project, i) => {
             
              if (project.projectdesc.length) {
                return (
                  <div>
                    <div p-10><label><strong>NEW PROJECT</strong></label></div>
                    <label>Project Title</label>
                    <input type='text' name='title' className="inputs" onChange={(e) => handleTitle(e, j, i)} />
                    <label>Project Link</label>
                 <input type='url' name='link'className="inputs" onChange={(e) => handleTitle(e,j, i)} />
                    <label>Description Points</label>
                    {project.projectdesc.map((p, ind) => {
                      return (
                        <div>
                          
                          <input className="inputs" type='text' onChange={(e) => handleChange(e, j,i, ind)}
                            value={p} />
                          <a class="trash" onClick={() => removeProject(j,i,ind)}><FaTrash /></a>
                        </div>
                      )
                    })}
                    <Button className="point" onClick={() => handlePoint(exp, project, i)}>ADD POINT</Button>
                  </div>
                );
              }
            })}
          </div>
        );
      })}
    </form>
  )
}

export default ExperienceForm;
