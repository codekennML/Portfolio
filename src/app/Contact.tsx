import { BsLinkedin } from "react-icons/bs"
import {AiOutlineTwitter} from "react-icons/ai"
import {FaEnvelope} from "react-icons/fa"

const Contact = () => {
  return (
    <div className="space-y-6 py-12">

      <h2 className='font-bold text-primary text-[1.2rem] tracking-widetext-[3rem] text-center'>Get in touch</h2>


<p className="text-justify text-[] italic">Whether you are interested in turning seemingly meaningless data into a business solution or in meeting up for coffee. </p>


<div className='flex   md:flex-row  gap-x-8 text-white w-full  my-2 justify-center mt-6 '>
      
       
         
           <a href="https://twitter.com/code_kenn" className='flex flex-row items-center gap-x-2 text-primary'>
   
<p>

                        <AiOutlineTwitter size = {25}/>
</p>
          
          <div className=''>

                <p>Twitter</p>
          </div>
   
           </a>
       
           <a href="https://www.linkedin.com/in/codekennml" className='flex flex-row items-center gap-x-2 text-primary' >
            <p>
            <BsLinkedin size = {25}/>
            </p>
            <div className=''>
            <p>LinkedIn</p>
            </div>
        
           </a>

           <a href="mailto:codekennml@gmail.com" className='flex flex-row items-center gap-x-2 text-primary'>
         
            <p>

                     <FaEnvelope size = {25}/>
            </p>
         <div className=''>

                <p>Email</p>
         </div>
         
           </a>
       
       
          
          
        </div>


    </div>
  )
}

export default Contact