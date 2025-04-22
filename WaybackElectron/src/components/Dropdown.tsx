import { useState } from "react"

export default function Dropdown({ title, options }: { title: string, options: string[] }) {

   const [expanded, setExpanded] = useState(false)

   const dropdownClassName = expanded
      ? "duration-200 w-auto max-h-80 overflow-x-hidden origin-top scale-y-100 fixed mt-3 flex-col bg-zinc-800 rounded-lg ease-in-out"
      : "duration-200 w-auto max-h-80 overflow-x-hidden origin-top scale-y-0 fixed mt-3 flex-col bg-zinc-800 rounded-lg ease-in-out"

   const dropdownIconClass = expanded
      ? "rotate-180 duration-200 mr-2 text-green-400 group-hover:text-pink-500"
      : "rotate-0 duration-200 mr-2 text-green-400 group-hover:text-pink-500"

   return (<>

      <div className="z-10">

         <div onClick={() => {

            setExpanded(!expanded)

         }} className="duration-200 flex flex-row items-center bg-black bg-opacity-25 px-2 py-2 rounded-lg group hover:bg-zinc-800">

            <svg className={dropdownIconClass} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
               <path fill-rule="evenodd" d="M18.425 10.271C19.499 8.967 18.57 7 16.88 7H7.12c-1.69 0-2.618 1.967-1.544 3.271l4.881 5.927a2 2 0 0 0 3.088 0l4.88-5.927Z" clip-rule="evenodd" />
            </svg>

            <button className="duration-200 w-full h-full mr-2 me-4 text-white outline-none cursor-pointer" >{title}</button>

         </div>

         <div className={dropdownClassName} >

            <ul className="w-full h-full px-5 pt-1.5 pb-1.5">

               {options.map(option => (

                  <li key={option} className="
                        my-2 
                        cursor-default
                        flex
                        items-center
                        group
                        "
                  >

                     <div className="w-full flex items-center">
                        <label>

                           <input className="duration-200 rotate-0 group-hover:rotate-12 checked:bg-green-500 appearance-none w-4 h-4 bg-black bg-opacity-25 rounded-sm" type="checkbox" />

                           <span className="text-left text-white duration-200 group-hover:text-green-500 ml-3">{option}</span>

                        </label>
                     </div>

                  </li>

               ))}

            </ul>

         </div>

      </div>

   </>)

}