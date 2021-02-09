import React,{useContext} from 'react'
import {resumeInfoContext} from '../resume'
function EducationForm(props){
const handleSubmit=(e)=>{
    e.preventDefault();
}
const resume = useContext(resumeInfoContext);
function handleChange(e) {
    const {name,value}=e.target;
    if(name=='collegeName')
    resume.setCollegeName(value);
    else if(name=='branch')
    resume.setBranch(value);
    else if(name=='city1')
    resume.setCity1(value);
    else if(name=='cgpa1')
    resume.setCgpa1(value);
    else if(name=='startDate1')
    resume.setStart1(value);
    else if(name=='endDate1')
    resume.setEnd1(value);

    else if(name=='schoolName1')
    resume.setSchoolName1(value);
    else if(name=='city2')
    resume.setCity2(value);
    else if(name=='percent')
    resume.setPercent(value);
    else if(name=='startDate2')
    resume.setStart2(value);
    else if(name=='endDate2')
    resume.setEnd2(value);

    else if(name=='schoolName2')
    resume.setSchoolName1(value);
    else if(name=='city3')
    resume.setCity3(value);
    else if(name=='cgpa2')
    resume.setCgpa2(value);
    else if(name=='startDate3')
    resume.setStart3(value);
    else if(name=='endDate3')
    resume.setEnd3(value);

 }
return(
    <form onSubmit={e => handleSubmit(e)}>
        <label>College Name</label>
       <input className="inputs" name='collegeName' type='text'onChange={(e)=>handleChange(e)}/>
       <label>Branch</label>
       <input className="inputs" name='branch' type='text'onChange={(e)=>handleChange(e)}/>
       <div> <label>City</label></div>
       <input className="inputs" name='city1' type='text'onChange={(e)=>handleChange(e)}/>
       <label>Current Cgpa</label>
       <input className="inputs" name='cgpa1' type='text'onChange={(e)=>handleChange(e)}/>
       <label>Start Date</label>
       <input className="inputs" name='startDate1' type='text'onChange={(e)=>handleChange(e)}/>
       <label>End Date</label> 
       <input className="inputs" name='endDate1' type='text'onChange={(e)=>handleChange(e)}/>
       <label>School Name</label>
       <input className="inputs" name='schoolName1' type='text'onChange={(e)=>handleChange(e)}/>
      <div> <label>City</label></div>
       <input className="inputs" name='city2' type='text'onChange={(e)=>handleChange(e)}/>
       <label>Percentage In Intermediate</label>
       <input className="inputs" name='percent' type='text'onChange={(e)=>handleChange(e)}/>
       <label>Start Date</label>
       <input className="inputs" name='startDate2' type='text'onChange={(e)=>handleChange(e)}/>
       <label>End Date</label>
       <input className="inputs" name='endDate2' type='text'onChange={(e)=>handleChange(e)}/>

       <label>School Name</label>
       <input className="inputs" name='schoolName2' type='text'onChange={(e)=>handleChange(e)}/>
       <div> <label>City</label></div>
       <input className="inputs" name='city3' type='text'onChange={(e)=>handleChange(e)}/>
       <label>Percentage In HighSchool</label>
       <input className="inputs" name='cgpa2' type='text'onChange={(e)=>handleChange(e)}/>
       <label>Start Date</label>
       <input className="inputs" name='startDate3' type='text'onChange={(e)=>handleChange(e)}/>
       <label>End Date</label>
       <input className="inputs" name='endDate3' type='text'onChange={(e)=>handleChange(e)}/>

      
    
    </form>
)
}
export default EducationForm;