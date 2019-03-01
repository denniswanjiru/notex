import React from 'react'
import Nav from './Nav';

export default function About() {
  return (
    <div className="container">
      <div className="layout">
        <Nav />
        <h3>JavaScript from front to Back</h3>
        <div>
          <img src="" alt=""/>
          <div>
            <h4>Dennis Wanjiru</h4>
            <p>UI/UX Enthusiast and JavaScript Advocate</p>
          </div>
        </div>
        <div>
          <img src="" alt=""/>
          <div>
            <h4>Ronald Ndirangu</h4>
            <p>Robotics Enthusiast</p>
          </div>
        </div>
        <div>
          <img src="" alt=""/>
          <div>
            <h4>Duncan Warukira</h4>
            <p>Philosopher, Gopher and IDK</p>
          </div>
        </div>
      </div>
    </div>
  )
}
