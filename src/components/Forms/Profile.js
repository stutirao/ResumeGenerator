import React,{useContext} from 'react'
import './form.css'
import {resumeInfoContext} from '../resume'
function ProfileForm(props) {

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const resume = useContext(resumeInfoContext);
    function handleChange(e) {
       const {name,value}=e.target;
       if(name=='firstName')
       resume.setFirstName(value);
       else if(name=='lastName')
       resume.setLastName(value);
       else if(name=='phoneNumber')
       resume.setPhoneNumber(value);
       else if(name=='email')
       resume.setEmail(value);
       else if(name=='github')
       resume.setGithub(value);
       else if(name=='linkedin')
       resume.setLinkedin(value);

    }
return (
        <form onSubmit={e => handleSubmit(e)}>
            <div><label>NAME</label></div>
            <input className="inputs" name='firstName' type='text' onChange={(e)=>handleChange(e)}/>
            
            <label>PHONE NUMBER</label>
            <input className="inputs" name='phoneNumber' type='text' onChange={(e)=>handleChange(e)} />
            <div><label>EMAIL</label></div>
            <input className="inputs" name='email' type='email' onChange={(e)=>handleChange(e)}/>
            <label>GITHUB</label>
            <input className="inputs" name='github' type='url' onChange={(e)=>handleChange(e)}/>
            <label>LINKEDIN</label>
            <input className="inputs" name='linkedin' type='url' onChange={(e)=>handleChange(e)}/>

        </form>
    )
}
export default ProfileForm;