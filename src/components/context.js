import React, { useState ,createContext} from 'react';
export const showInfoContext=createContext();
function ShowProvider({children})
{
    const [showProfile, setProfile]=useState(true);
    const [showEducation, setEducation]=useState(false);
    const [showExperience, setExperience]=useState(false);
    const [showAchievement, setAchievement]=useState(false);
    const [showSkill, setSkill]=useState(false);
    const [showProject, setProject]=useState(false);
    return(

        <showInfoContext.Provider value={{showProfile,setProfile,showEducation,setEducation,
        showExperience,setExperience,showAchievement,setAchievement,showSkill,setSkill,showProject,
        setProject}}>
             {children}
        </showInfoContext.Provider>
    )
} 
export default ShowProvider;