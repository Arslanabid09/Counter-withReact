import React, { useState } from 'react'

const Button = ({
    text = "+",
})=> {
  const [active,setActive] = useState(false)
  const handleToggle = ()=>{
    setActive(!active)
  }
  return (
    <div>
     
        <button className='cursor-pointer border-0 p-2 px-4 font-bold hover:border-4 rounded-full hover:border-blue-950 bg-slate-300'>{text}</button>
    </div>
  )
}

export default Button