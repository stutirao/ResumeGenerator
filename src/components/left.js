import React,{useContext} from 'react';
import ProfileForm from '../components/Forms/Profile'
import EducationForm from '../components/Forms/Education'
import ExperienceForm from '../components/Forms/Experience'
import AchievementForm from '../components/Forms/Achievement'
import SkillsForm from '../components/Forms/Skills'
import ProjectForm from '../components/Forms/Project'
import {showInfoContext} from './context'
function Lefty(props)
{
    const show=useContext(showInfoContext);
    
   return(
<div>
   
    {show.showProfile?<ProfileForm/>:null}
    {show.showEducation?<EducationForm/>:null}
    {show.showExperience?<ExperienceForm/>:null}
    {show.showProject?<ProjectForm/>:null}
    {show.showAchievement?<AchievementForm/>:null}
    {show.showSkill?<SkillsForm/>:null}
    
</div>
   )
}
export default Lefty;
