import React from 'react'
import { Outlet } from 'react-router-dom'

function About() {
    return (
        <React.Fragment>
            <div className='text-yellow-500 h-screen'>About</div><Outlet />
        </React.Fragment>
    )
}

export default About