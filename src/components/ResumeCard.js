import React from 'react';

let ResumeCard = (props)=>{
    return (
        <div className='resumeCardContainer flex'>
            <img src={props.image}/>
            <p>{props.name}</p>
        </div>
    )
}

export default ResumeCard;