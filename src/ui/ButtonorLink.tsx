import React from 'react'
import {cva, VariantProps  } from "class-variance-authority"
import { IconType } from 'react-icons'


const buttonStyles =  cva("relative flex justify-center  items-center gap-x-3 rounded-lg hover:opacity-80 transition ", {

    variants : {
        intent : {
            primary : "bg-green-600 text-gray-800 ",
            outline : " text-blue-100 bg-gray-900/90"
        },

        small : {
         true : "text-sm py-1 font-light ",
         false : "text-md py-3 font-semibold " 
        },

        isRounded : {
            true : "rounded-full"
        },

        full : {
            true :  "w-full"
        }

    }
    , defaultVariants : {
        intent : "primary",
        small : false,
        isRounded : true
    }
})



interface ButtonProps {
    label : string,
    onClick : (e: React.MouseEvent<HTMLButtonElement>) => void
    icon? : IconType,
 
}

export interface Props extends ButtonProps , VariantProps<typeof buttonStyles>{}

const Button = ({ intent,  onClick, label, small, icon:Icon, full } : Props) => {

  return (
  <>

  <button onClick={onClick} className={ buttonStyles({ intent, small, full } )} >

  {Icon && (
        <Icon
          size={24}
          className="
         
            text-blue-600
          "
        />
      )}
      <div className =  "flex flex-row items-center space-x-4 justify-center">
     <p className='hidden sm:block font-bold text-white '>{label}</p>  
    
      </div>
     
  
    </button>
  </>
  )
}



export default Button