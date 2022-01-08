import React from 'react';

import './App.css';
function App() {
    return (
        <div className="App">
            <div className="navbar">  
                <a className="active" href="#home">Home</a> 
                <a href="#projects">Projects</a> 
                <a href="#contact">Contact</a> 
                <a href="#resume">Resume</a>

                <div className="Title">
                    <ResumeTitle name="David White" number="919-624-3650" email="david12white@gmail.com" />
                </div>
            </div>
            <div className="Introduction">
                <img src ="Profile Picture.jpg" alt="Me" />
            </div>

            <div className="Statistics">
                <h1> 4.0 </h1>
                
            </div>
        </div>
    );
}
class ResumeTitle extends React.Component {
    render() {
        return (
            <header>
                <h1>{this.props.name} | {this.props.number} | {this.props.email} </h1>
            </header>
        );
    }
}

export default App;