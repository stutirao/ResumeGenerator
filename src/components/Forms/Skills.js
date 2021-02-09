import { Button } from 'react-bootstrap';
import React, { useState,useContext } from 'react';
import { FaTrash } from 'react-icons/fa';
import { resumeInfoContext } from '../resume'

function SkillForm(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  const resume = useContext(resumeInfoContext);

  const [skills, setSkill] = useState([{ achieve: null }]);
  function handleSkill() {
    const a = [...skills];
    a.push({ achieve: null });
    setSkill(a);
  }
  function handleChange(e, ind) {
    const { name, value } = e.target;
    const list = [...skills];
    list[ind][name] = value;
    setSkill(list);
  }
  function removeSkill(key, skill) {
    const l = skills.filter(a => a != skill)
    setSkill(l);
  }
  resume.setSkilly(skills);
  return (
    <form onSubmit={e => handleSubmit(e)}>
      <label>Skills</label>
      {skills.map((skill, ind) => {
        return (
          <div>
            <input className="inputs" name='achieve' type='text' value={skill.achieve}
              onChange={(e) => handleChange(e, ind)} />
            <a class="trash" onClick={() => removeSkill(ind, skill)}><FaTrash /></a>
          </div>
        );
      }
      )}
      <Button onClick={handleSkill}>Add skill</Button>

    </form>
  )
}
export default SkillForm;