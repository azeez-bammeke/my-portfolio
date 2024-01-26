import React, { Component } from "react";
import Project from "../components/Project"
import SocialProfiles from "../components/SocialProfiles";
import profile from "../assets/my-picture.jpeg";
import Title from "../components/Title";
import "./App.css";


class App extends Component {
    state = { displayBio: false };

    toggleDisplayBio = () => {
        this.setState({displayBio: !this.state.displayBio})
    }

     render() {
        return  (
            <div>
                <img src= { profile } alt="my-profile" className = "profile"/>
              <h1>Hello!</h1>
               <p className = "intro-content">My name is Azeez</p>
                {this.state.displayBio ? <Title/> : null }
                <p>I possess adaptability and a receptiveness to acquiring new knowledge.
                </p>
                { this.state.displayBio ? (
                    <div className= "about-content">
                        <p>With over eight years of seasoned expertise as a software engineer,
                            I have demonstrated a consistent track record in the development of scalable application software.
                        </p>
                        <p>My proficiency encompasses the implementation of best practices, coupled with a profound understanding of design patterns and diverse architectural frameworks.
                            Technologically adept, I have successfully utilized a spectrum of tools and frameworks, including
                            <span className= "skill-content"> JSP Servlet, Spring Boot, Spring Cloud Function, ReactJS, Angular 16+, Docker/Docker Compose, Ansible, AWS, Azure, PCF, Maven, Gradle, MySQL, Redis, Keycloak Authentication Server, Okta, Jenkins, and Git.</span> My commitment to leveraging cutting-edge technologies ensures the delivery of high-quality and innovative solutions.
                         </p>
                        <p>I am well-versed in designing robust and efficient software systems, and my experience extends across various domains, reflecting a comprehensive grasp of industry requirements. I am driven by a passion for staying at the forefront of technological advancements, contributing to the success of projects through meticulous problem-solving and collaborative teamwork.

                            My proficiency extends beyond technical implementation, encompassing a keen understanding of project management and the ability to seamlessly integrate with cross-functional teams. With a proven ability to adapt to evolving industry landscapes, I am poised to contribute effectively to projects demanding excellence in software engineering and development.
                        </p>
                        <button onClick= {this.toggleDisplayBio }>Show less &lt;&lt; </button>
                    </div>
                ) : (<div>
                       <button onClick = { this.toggleDisplayBio }>Read more..</button>
                    </div>)
                }
                <hr/>
                <Project />
                <hr/>
                <SocialProfiles/>
            </div>
        );
     }
}

export default App;