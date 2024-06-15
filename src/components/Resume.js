import React,{useEffect} from 'react';
import ResumeCard from './ResumeCard';
import cImg from '../Assets/ResumeSectionImages/Programming Languages/c-program-icon.png';
import cppImg from '../Assets/ResumeSectionImages/Programming Languages/c-plus-plus-programming-language-icon.png';
import javaImg from '../Assets/ResumeSectionImages/Programming Languages/java-programming-language-icon.png';
import jsImg from '../Assets/ResumeSectionImages/Programming Languages/javascript-programming-language-icon.png';
import htmlImg from '../Assets/ResumeSectionImages/Web Dev/html-icon.png';
import cssImg from '../Assets/ResumeSectionImages/Web Dev/css-icon.png';
import bsImg from '../Assets/ResumeSectionImages/Web Dev/bootstrap-5-logo-icon.png';
import reactImg from '../Assets/ResumeSectionImages/Web Dev/react-js-icon.png';
import nodeImg from '../Assets/ResumeSectionImages/Web Dev/node-js-icon.png';
import expressImg from '../Assets/ResumeSectionImages/Web Dev/express-js-icon.png';
import phpImg from '../Assets/ResumeSectionImages/Programming Languages/php-programming-language-icon.png';
import jspImg from '../Assets/ResumeSectionImages/Web Dev/file-jsp-color-red-icon.png';
import axiosImg from '../Assets/ResumeSectionImages/Other Tools and Technologies/axios.svg';
import gitImg from '../Assets/ResumeSectionImages/Other Tools and Technologies/git-icon.png';
import githubImg from '../Assets/ResumeSectionImages/Other Tools and Technologies/github-icon.png';
import mysqlImg from '../Assets/ResumeSectionImages/Other Tools and Technologies/mysql-icon.png';
import npmImg from '../Assets/ResumeSectionImages/Other Tools and Technologies/npm-icon.png';

import AOS from 'aos';
import 'aos/dist/aos.css';

let Resume = () => {
    useEffect(()=>{
        AOS.init();
    },[]);
    return (
        <>
            <div className='resumeContainer flex' id="resume">
                {/* Programming Languages Cards */}

                <h3 className="resumeHeading" style={{ margin: "5rem"}}>Programming Languages</h3>
                <div className='resumeCardWrapper flex'
                data-aos="fade-up"
                data-aos-offset="500"
                data-aos-duration="500"
                >
                    <ResumeCard image={cImg} name={"C Language"} />
                    <ResumeCard image={cppImg} name={"C++ Language"} />
                    <ResumeCard image={javaImg} name={"Java"} />
                    <ResumeCard image={jsImg} name={"JavaScript"} />
                    <ResumeCard image={phpImg} name={"php"} />
                </div>

                {/* Web Dev Cards */}

                <h3 className="resumeHeading" style={{ margin: "5rem"}}>Web Dev Technologies</h3>
                <div className='resumeCardWrapper flex'
                data-aos="fade-down"
                data-aos-offset="500"
                data-aos-duration="500"
                >
                    <ResumeCard image={htmlImg} name={"HTML5"} />
                    <ResumeCard image={cssImg} name={"CSS3"} />
                    <ResumeCard image={bsImg} name={"Bootstrap"} />
                    <ResumeCard image={reactImg} name={"React JS"} />
                    <ResumeCard image={nodeImg} name={"Node JS"} />
                    <ResumeCard image={expressImg} name={"Expres JS"} />
                    <ResumeCard image={jspImg} name={"Java Server Pages(jsp)"} />
                </div>
                
                {/* Database And Other Tools Cards */}

                <h3 className="resumeHeading" style={{ margin: "5rem"}}>Database and other Technologies</h3>
                <div className='resumeCardWrapper flex'
                data-aos="fade-up"
                data-aos-offset="500"
                data-aos-duration="500"
                >
                    <ResumeCard image={axiosImg} name={"Axios"} />
                    <ResumeCard image={gitImg} name={"Git"} />
                    <ResumeCard image={githubImg} name={"GitHub"} />
                    <ResumeCard image={mysqlImg} name={"MySQL"} />
                    <ResumeCard image={npmImg} name={"NPM"} />
                </div>
            </div>
        </>
    )
}

export default Resume;