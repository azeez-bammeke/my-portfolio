import React from "react";
import PROJECTS from "../data/project";


const Projects = (props) => {
        const {title, description, image, link, displayLink} = props.projects;
        return (
            <div style={{display: "inline-block", margin: "5%"}}>
                <h3>{ title }</h3>
                <img src= { image } alt="profile" style={{width: 200, height: 120}}/>
                <p>{ description }</p>
                <a href={link}>{displayLink}</a>
            </div>
        );
}

const Project = () => (
            <div>
                <h2>Highlighted Projects</h2>
                <div>
                    {
                        PROJECTS.map(PROJECT => {
                            return (
                                <Projects key={PROJECT.id} projects={PROJECT}/>
                            );
                        })
                    }
                </div>
            </div>
        );

export default Project;