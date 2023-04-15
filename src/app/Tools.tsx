import React from 'react'
import Container from '../ui/Container'
import htmlLogo from  "../assets/html.svg"
import cssLogo from  "../assets/css-3-logo-svgrepo-com.svg"
import nextLogo from  "../assets/next.svg"
import reactLogo from  "../assets/reactjs.svg"
import typescriptLogo from  "../assets/typescript.svg"
import tensorLogo from  "../assets/tensorflow.svg"
import jsLogo from  "../assets/js.svg"

const Tools = () => {

    const tools =  [
        {
            id : 1, 
            name : "HTML",
            icon : htmlLogo,
        },
        {
            id : 2, 
            name : "CSS3",
            icon : cssLogo,
        },
        {
            id : 3, 
            name : "TailwindCSS",
            icon : "",
        },
        {
            id : 4, 
            name : "Javascript",
            icon : jsLogo,
        },
        {
            id : 5, 
            name : "ReactJS",
            icon : reactLogo,
        },
        {
            id : 6, 
            name : "NextJS",
            icon : nextLogo,
        },
        {
            id : 7, 
            name : "Prisma ORM",
            icon : "",
        },
        {
            id : 8, 
            name : "Zustand",
            icon : "",
        },
        {
            id : 9, 
            name : "Mongoose",
            icon : "",
        },
        {
            id : 10, 
            name : "ExpressJS",
            icon : "",
        },
        {
            id : 11, 
            name : "NodeJS",
            icon : "",
        },
        {
            id : 12, 
            name : "MongoDB",
            icon : "",
        },
        {
            id : 13, 
            name : "Redux Toolkit",
            icon : "",
        },
        {
            id : 14, 
            name : "Typescript",
            icon : typescriptLogo,
        },
        {
            id : 15, 
            name : "Redis",
            icon : "",
        },
        {
            id : 16, 
            name : "Websockets",
            icon : "",
        },
        {
            id : 17, 
            name : "Python",
            icon : "",
        },
        {
            id : 18, 
            name : "Pandas",
            icon : "",
        },
        {
            id : 19, 
            name : "Tensorflow",
            icon : tensorLogo,
        },
        {
            id: 20,
            name : "Seaborn"
        },
        {
            id: 21,
            name : "GraphQL"
        },
        {
            id: 22,
            name : " Apollo Client"
        },
        {
            id: 23,
            name : "Git"
        },
        {
            id: 24,
            name : "Github"
        },
        {
            id: 25,
            name : "Framer Motion"
        },
        {
            id: 26,
            name : "Google Maps"
        },
        {
            id: 27,
            name : "Mapbox"
        },


    ]

  return (

<>

    <h2 className='font-bold text-primary text-[1.2rem] '>Skills </h2>
            <ul className='flex flex-row  flex-wrap gap-4 font-medium list-inside text-green-100  filter brightness-200 text-justify '>  
            {
                tools.map(tool => {
                    return (
                        <li key =  {tool.name} className='list-none '>

{tool.name}
                     
                    </li>
                    )
                })
            }
                  
            </ul>
            </>
  )
}

export default Tools