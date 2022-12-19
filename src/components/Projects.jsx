import React from 'react';
import projectsArray from '../data/projects.js';
import Project from './Project';

export default function Projects(){

    return(
        <div className='flex flex-col md:flex-row items-center justify-center m-4'>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
                {projectsArray.map( (project) => (
                    <Project 
                        imgUrl={project.imgUrl}
                        title={project.title}
                        stack={project.stack}
                        link={project.link}
                    />
                ))}
            </div>
        </div>
    )
}