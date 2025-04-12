import React from 'react'
import { Outlet } from 'react-router-dom'

function About() {
    return (<>
        <React.Fragment>
            <div className='text-yellow-500'>About</div>

        </React.Fragment><Outlet /></>
    )
}

export default About