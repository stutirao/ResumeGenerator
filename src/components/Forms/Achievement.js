import { Button } from 'react-bootstrap';
import React, { useState ,useContext} from 'react';
import { FaTrash } from 'react-icons/fa';
import { resumeInfoContext } from '../resume'

function AchievementForm(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  const resume = useContext(resumeInfoContext);

  const [achievements, addAchievement] = useState([{ achieve: null,link:null }]);
  function handleAchievement() {
    const a = [...achievements];
    a.push({ achieve: null,link:null });
    addAchievement(a);
  }
  function handleChange(e, ind) {
    const { name, value } = e.target;
    const list = [...achievements];
    list[ind][name] = value;
    addAchievement(list);
  }
  function removeAchievement(key, achievement) {
    const l = achievements.filter(a => a != achievement)
    addAchievement(l);
  }
  resume.setAchievement(achievements);
  return (
    <form onSubmit={e => handleSubmit(e)}>
      {achievements.map((achievement, ind) => {
        return (
          <div>
            <label>ACHIEVEMENT {ind+1}</label>
            <input className="inputs" name='achieve' type='text' value={achievement.achieve}
              onChange={(e) => handleChange(e, ind)} />
            <label>Certificate Link</label>
            <input className="inputs" name='link' type='url' value={achievement.link}
             onChange={(e) => handleChange(e, ind)}/>
            <a class="trash" onClick={() => removeAchievement(ind, achievement)}><FaTrash /></a>
          </div>
        );
      }
      )}
      <Button onClick={handleAchievement}>Add Achievement</Button>

    </form>
  )
}
export default AchievementForm;