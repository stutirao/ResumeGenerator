import Carousel from 'react-bootstrap/Carousel'
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'
import ProfileForm from "./Forms/Profile";
import '../Css/carouselform.css'
function ControlledCarousel() {
    const [index, setIndex] = useState(0);
    const[showProfile,setProfile]=useState(false);
    const[showEducation,setEducation]=useState(false);
    const[showExperience,setExperience]=useState(false);
    const[showAchievement,setAchievement]=useState(false);
    const[showSkill,setSkill]=useState(false);
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    const handleClick =()=>{
        setProfile(true);
    }
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}
      nextIcon={<span aria-hidden="true" className="carousel-control-next-icon body" />}
      prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon body" />}
      indicators={false}
      className="body">
        <Carousel.Item >
            <div className="item">
            <Button onClick={handleClick}>Profile</Button>
            <Button size="lg">Education</Button>
            </div>
        </Carousel.Item>
        <Carousel.Item className="">
           <Button>Education</Button>
           <Button>Experience</Button> 
        </Carousel.Item>
        <Carousel.Item className="">
           <Button>Experience</Button>
           <Button>Achievements</Button>
        </Carousel.Item>
        <Carousel.Item className="  " >
           <Button>Achievements</Button>
           <Button>Skills</Button>
        </Carousel.Item>
      
     
      </Carousel>
    );
  }

export default ControlledCarousel;