import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'
import React, { useState, useContext,useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import '../Css/carouselform.css'
import { FaPrint } from 'react-icons/fa';
import {showInfoContext} from './context'
import Righty from '../components/right'

function Navbars() {
  const [index, setIndex] = useState(0);
  const show=useContext(showInfoContext);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const handleClick = (e) => {
    console.log(e);
    if(e=='Profile')
   { show.setProfile(true);
    show.setEducation(false);
    show.setExperience(false);
    show.setAchievement(false);
     show.setProject(false);
     show.setSkill(false);
   }
    else if(e=='Education')
    { show.setProfile(false);
      show.setEducation(true);
      show.setExperience(false);
      show.setAchievement(false);
       show.setProject(false);
       show.setSkill(false);
     }
    else if(e=='Experience')
    { show.setProfile(false);
      show.setEducation(false);
      show.setExperience(true);
      show.setAchievement(false);
       show.setProject(false); 
       show.setSkill(false);
     }
    else if(e=='Achievement')
    { show.setProfile(false);
      show.setEducation(false);
      show.setExperience(false);
      show.setAchievement(true);
       show.setProject(false);
       show.setSkill(false);
     }
    else if(e=='Skills')
    { show.setProfile(false);
      show.setEducation(false);
      show.setExperience(false);
      show.setAchievement(false);
       show.setProject(false);
       show.setSkill(true);
     }
     else if(e=='Project')
     { show.setProfile(false);
       show.setEducation(false);
       show.setExperience(false);
       show.setAchievement(false);
        show.setProject(true);
        show.setSkill(false);
      }
  }
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Nav className="mr-auto">
          <Nav.Link href="#home" >
            <Carousel activeIndex={index} onSelect={handleSelect}
              nextIcon={<span aria-hidden="true" className="carousel-control-next-icon body" />}
              prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon body" />}
              indicators={false} interval={null}
              className="body">
                
              <Carousel.Item >
                <Button className="button" onClick={()=>handleClick('Profile')}>Profile</Button >
              </Carousel.Item>

              <Carousel.Item className="">
                <Button className="button" onClick={()=>handleClick('Education')}>Education</Button>
              </Carousel.Item>

              <Carousel.Item className="">
                <Button className="button" onClick={()=>handleClick('Experience')}>Experience</Button >
              </Carousel.Item>
            
              <Carousel.Item className="  " >
                <Button className="button" onClick={()=>handleClick('Project')}>Project</Button>
              </Carousel.Item>

              <Carousel.Item className="  " >
                <Button className="button" onClick={()=>handleClick('Achievement')}>Achievements</Button>
              </Carousel.Item>

              <Carousel.Item className="  " >
                <Button className="button" onClick={()=>handleClick('Skills')}>Skills</Button>
              </Carousel.Item>
             
            </Carousel>
          </Nav.Link>
          {/* <Nav.Link href="#features">Features</Nav.Link> */}

        </Nav>
        <Form inline>
        <a className="print" onClick={handlePrint}><FaPrint/></a>
          <Navbar.Brand href="#home">Resume Maker</Navbar.Brand>
        </Form>
      </Navbar>
      <div style={{ display: "none" }}>
          <Righty ref={componentRef}/>
        </div>
    </div>

  )
}

export default Navbars;
