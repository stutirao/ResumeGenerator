import React, { useState, createContext } from 'react';
export const resumeInfoContext = createContext();
function ResumeProvider({ children }) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState();
    const [email, setEmail] = useState();
    const [github, setGithub] = useState();
    const [linkedin, setLinkedin] = useState();
    
    const [collegeName,setCollegeName]=useState();
    const [branch,setBranch]=useState();
    const [city1,setCity1]=useState();
    const [cgpa1,setCgpa1]=useState();
    const [start1,setStart1]=useState();
    const [end1,setEnd1]=useState();
    
    const [schoolName1,setSchoolName1]=useState();
    const [city2,setCity2]=useState();
    const [percent,setPercent]=useState();
    const [start2,setStart2]=useState();
    const [end2,setEnd2]=useState();
    
    const [schoolName2,setSchoolName2]=useState();
    const [city3,setCity3]=useState();
    const [cgpa2,setCgpa2]=useState();
    const [start3,setStart3]=useState();
    const [end3,setEnd3]=useState();

    const [exp,setExp]=useState();
    const [project,setProject]=useState();
    const [Achievement,setAchievement]=useState();
    const [skilly,setSkilly]=useState();
    return (
        <resumeInfoContext.Provider value={{
            firstName, setFirstName, lastName, setLastName, phoneNumber
            , setPhoneNumber, email, setEmail, github, setGithub,linkedin,setLinkedin,
            collegeName,setCollegeName,branch,setBranch,city1,setCity1,cgpa1,setCgpa1,start1,setStart1,
            end1,setEnd1,schoolName1,setSchoolName1,city2,setCity2,percent,setPercent,start2,setStart2,
            end2,setEnd2,schoolName2,setSchoolName2,city3,setCity3,cgpa2,setCgpa2,start3,setStart3,
            end3,setEnd3,exp,setExp,project,setProject,Achievement,setAchievement,skilly,setSkilly
        }}>
            {children}
        </resumeInfoContext.Provider>
    )
} 
export default ResumeProvider;