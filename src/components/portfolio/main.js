import {Link} from "react-router-dom"
import "./port.css"
function Portfolio(){
    const listofprojects=[
        {
            id:1,
            project:"userprofile",
            description:"userprofile to creat a profile"
        },
        {
            id:2,
            project:"captial",
            description:"to find the country by captial"

        },
        {
            id:3,
            project:"comment",
            description:"to store comments"

        }

    ]
    return(
        <div className="main-bg">
            <div className="hi">
                <h3>Hi,i'm Om Prakash</h3>
                <p>Frontend Developer</p>
                <button>view my work</button>
            </div>
            <div className="about">
                <h4>About me</h4>
                <p>Hi, I'm Om Prakash Yadav, a self-driven and curious Full Stack Web Developer with a focus on React, Node.js, and Python.

                        I enjoy building clean, responsive, and user-friendly web applications. My recent projects include a task tracker, a blog CMS, and a movie search app—all built using modern web technologies.

                        Currently, I'm learning advanced backend concepts and preparing for full stack web development roles. I value clean code, continuous learning, and teamwork.

                        Outside of coding, I'm into tech news, design systems, and learning how to improve user experience.

                        Let's build something great together!
                </p>
            </div>
            <div className="viewpro">
                <h5>projects</h5>
                <div className="card">
                    {listofprojects.map((each)=>(
                       <div key={each.id} className="cont">
                          <h4 className="gap">{each.project}</h4>
                          
                            <p>{each.description}</p>
                           
                          <Link to ={`/project/${each.id}`}>
                             <button>view</button>
                          </Link>
                        </div>
                    ))}

                    
                        
                </div>
            </div>
            <div className="contact">
                <form className="form">
                    <input type="text" placeholder="name"  className="input"/>
                    <input type="text" placeholder="email" className="input"/>
                    <textarea rows="5" cols="30" className="text" placeholder="message"></textarea>
                    <button>submit</button>
                </form>
            </div>

        </div>    
        
        
    )

} export default Portfolio