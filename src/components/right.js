import React, { useContext } from 'react'
import { resumeInfoContext } from '../components/resume'
import '../components/righty.css'
import '../../src/App.css'
const Righty = React.forwardRef((props, ref) => {
  const resume = useContext(resumeInfoContext);
  const arr = resume.exp;
  const arr2 = resume.project;
  console.log(resume.firstName);
  return (
    <div>
      <div className="whole item2 " ref={ref}>
      <div className="profile">
        <div>
          <div>
            <span><img src="https://www.flaticon.com/svg/vstatic/svg/25/25231.svg?token=exp=1612604563~hmac=1414039916855be81f6cc013072261c5" className="image1"></img></span>
            {resume.github}</div>
          <div>
            <span><img src="https://cdn3.iconfinder.com/data/icons/picons-social/57/51-linkedin-512.png" className="image2"></img></span>
            {resume.linkedin}</div>
        </div>
        <div className="name"><strong>{resume.firstName}</strong></div>
        <div >
          <div>{resume.email}</div>
          <div className="phone">(+91){resume.phoneNumber}</div>
        </div>
      </div>

      <div>
        <div className="title">EDUCATION</div>
        <div class="h1"></div>
        <div className="profile1">
          <div><strong>{resume.collegeName}</strong></div>
          <div><strong>{resume.city1} ,India</strong></div>
        </div>
        <div className="profile1">
          <div>Bachelor of Technology in {resume.branch} <strong>({resume.cgpa1}/10)</strong></div>
          <div><strong>{resume.start1} - {resume.end1}</strong></div>
        </div>
        <div className="profile1">
          <div><strong>{resume.schoolName1}</strong></div>
          <div><strong>{resume.city2} ,India</strong></div>
        </div>
        <div className="profile1">
          <div>Intermediate <strong>({resume.percent}/100)</strong></div>
          <div><strong>{resume.start2} - {resume.end2}</strong></div>
        </div>

        <div className="profile1">
          <div>High School <strong>({resume.cgpa2}/10)</strong></div>
          <div><strong>{resume.start3} - {resume.end3}</strong></div>
        </div>
      </div>



      <div>
        <div className="title">EXPERIENCE</div>
        <div class="h1"></div>

        {arr !== undefined ? arr.map((item, ind) => {
          return (
            <div className="wid">
              <div class="c1">
                <div><strong>{item.role}</strong></div>
                <div> <strong>{item.compName},{item.compAdd}</strong></div>
                <div> <strong>{item.start} - {item.end}</strong></div>
              </div>

              {item.projects.map((project, i) => {
                return (
                  <div className="c3">
                    {project.projectdesc.length >= 1 && <div>
                      <div className="c2">
                        <div className="arrow">➣</div>
                        <div className="role"><strong>{project.title}</strong></div>
                      </div>
                      {project.projectdesc.map((p, j) => {
                        return (<div>
                          <div className="block">
                            <div className="arrow">➣</div>
                            <div className="role c3">{p}</div>
                          </div>
                        </div>)
                      })}
                    </div>}
                  </div>
                )
              })}
            </div>
          )

        }) : null}

      </div>




      <div>
        <div className="title">PROJECTS</div>
        <div class="h1"></div>
        {arr2 !== undefined ? arr2.map((project, ind) => {
          return (
            <div>
                 {project.projectdesc.length >= 1 && <div>
                      <div className="c4">
                        <div><span className="arrow">➣</span>
                        <span className="role"><strong>{project.title}
                        <a href={project.link}> (Project Link)</a></strong></span></div>
                        <div> <strong>{project.start} - {project.end}</strong></div>
                      </div>
                      {project.projectdesc.map((p, j) => {
                        return (<div>
                          <div className="block">
                            <div className="arrow">➣</div>
                            <div className="role">{p}</div>
                          </div>
                        </div>)
                      })}
                    </div>}
            </div>

          );
        }) : null}
      </div>

      <div>
        <div className="title">ACHIEVEMENTS</div>
        <div class="h1"></div>
        {console.log(typeof(resume.Achievement))}
        {
          resume.Achievement!==undefined && resume.Achievement.map((e)=>{
            return( <div className='c4'> 
            <div><span className="arrow">➣</span><span className="role">{e.achieve}</span></div>
              <div><a href={e.link}>({e.link})</a></div>
              </div>)
          })
        }
      </div>

      <div>
        <div className="title">SKILLS</div>
        <div class="h1"></div>
        {
          resume.skilly!==undefined && resume.skilly.map((e)=>{
            return( <div className='c4'> 
            <div><span className="arrow">➣</span><span className="role">{e.achieve}</span></div>
            
              </div>)
          })
        }
      </div>
    </div>
    </div>
    
  )
}
)
export default Righty;
