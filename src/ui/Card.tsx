import React from 'react'
import { AiFillGithub, AiOutlineLink } from 'react-icons/ai'

interface CardProps {
    title : string,
    imgUrl : string,
    details : string
    github: string,
    live : string,
    tech : {
        id : number ,
        name : string,
        background : string,
        text : string

    }[]

}

const Card:React.FC<CardProps> = ({ title, imgUrl, details, tech, github, live }) => {
  return (
    <div className='border border-slate-700 rounded-t-lg rounded-lg w-full  '>

        <div className='border-b border-slate-600 overflow-hidden max-h-[200px] rounded-t-lg  '>
            <img src={imgUrl} alt={`${title} - image`} height={150} className='max-h-[160px] w-full object-center object-cover  hover:scale-110 transition duration-150 ' />
        </div>

<article className='px-3'>


        <div className='flex justify-between  mt-2 py-2'>
            <h2 className='font-primary font-extrabold text-[1.2rem] text-primary'>
                  {title}
            </h2>
            <div className='flex items-center gap-x-2 '>
                <a href={github} className='text-primary cursor-pointer '>
                 
                <AiFillGithub size = {28}/>

                </a>
                <a href={live} className='text-primary cursor-pointer'>
                    <AiOutlineLink size = {28} />
                </a>
            </div>

        </div>

        <div className='flex flex-row gap-x-3 py-2 flex-wrap gap-y-2'>

            {tech.map(item => { 
                return (
                    <button className={`bg-green-50 text-gray-700 rounded-[.2rem]  px-3 py-1  text-[.75rem] font-medium`} >
                    {item.name}
                </button>
                )
            })}
         

        </div>
        <div className=' text-[.9rem] text-slate-200 py-4 font-medium text-justify border-t border-slate-700'>
            <p>
                {details}
            </p>
        </div>
      
        </article>


    </div>
  )
}

export default Card