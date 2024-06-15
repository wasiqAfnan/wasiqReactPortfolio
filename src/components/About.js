import React , {useEffect} from 'react';
import DownloadSharpIcon from '@mui/icons-material/DownloadSharp';
import AOS from 'aos';
import 'aos/dist/aos.css';

let About = ()=>{
    useEffect(()=>{
        AOS.init();
    },[]);

    return (
        <div style={{backgroundColor:"#f0f0f0",paddingBottom:"3rem"}} id="about">
            <div className='aboutmeContainer flex'
                data-aos="fade-right"
                data-aos-offset="500"
                data-aos-duration="500"
            >
                <span>About Me</span>
                <span className='aboutmeDescription'>As an accomplished web developer proficient in both frontend and backend technologies, including expertise in React, I bring a versatile skill set honed through a Bachelor of Computer Applications (BCA) completed in 2024. My professional journey seamlessly blends creative design with robust functionality, allowing me to craft dynamic digital solutions that captivate and inspire. With a passion for staying abreast of the latest industry trends and advancements, I consistently push the boundaries of innovation in every project. Whether architecting intuitive user interfaces or optimizing backend performance, I approach each task with a meticulous attention to detail and a dedication to delivering excellence. My portfolio showcases a diverse range of projects, highlighting my ability to seamlessly integrate frontend elegance with backend efficiency to create impactful user experiences.</span>
            </div>

            <div className='resumeButton flex'
            data-aos="fade-left"
            data-aos-offset="100"
            data-aos-duration="500"
            >
                <DownloadSharpIcon style={{color:"white",fontSize:"2rem"}}/>
                <a href="#">Download CV</a>
            </div>
        </div>
    )
}

export default About;