import React from 'react';
import svg from '../Assets/wave.svg';
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Typewriter } from 'react-simple-typewriter';

function HeroSection() {
    return (
        <div className='heroContainer'>
            <div className='heroInfo flex'>
                <p className='heroName'>I'm 
                    <span className='specialEffect'>
                        <Typewriter
                            words={[' Wasiq Afnan Ansari',
                            ' Web developer',
                            ' Full Stack Developer',
                            ' React Developer']}
                            loop={true}
                            cursor
                            cursorStyle='|'
                            typeSpeed={100}
                            deleteSpeed={70}
                            delaySpeed={1500}
                            
                        />
                    </span>
                </p>
                <p className='heroDetails'><span>Web Developer</span> from India. Let's start scrolling and <span>
                    learn</span> about me</p>
            </div>

            <div className='socialLinks flex'>
                <FacebookSharpIcon  color='primary' className='icons'/>
                <LinkedInIcon color='primary' className='icons'/>
                <GitHubIcon color='primary' className='icons'/>
            </div>
            <img src={svg} />
        </div>
    )
}

export default HeroSection;