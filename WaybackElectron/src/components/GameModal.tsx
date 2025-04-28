import { Game } from "../pages/Public";
import { createPortal } from "react-dom";

import '../animations.css'

import test_icon from "../assets/placeholder-square.jpg";

export default function GameModal({ game, onClose }: { game?: Game | null, onClose: () => void }) {

   return createPortal(

      <>

         <div className="duration-200 z-50 fixed top-0 left-0 opacity-100 flex items-center bg-black bg-opacity-50 justify-center w-screen h-screen" onClick={onClose}>

            <div className="animations-scale-up-center flex flex-col gap-7 justify-center z-50 w-full h-full bg-zinc-800 rounded-lg scale-90 p-10" onClick={(e) => e.stopPropagation()}>

               {/* Top */}
               <div className="gap-5 items-center w-full max-h-[21rem] flex">

                  <div className="aspect-square h-full flex bg-red-300 bg-opacity-50">
                     <img src={test_icon} className="w-fit h-fit object-contain" />
                  </div>

                  <div className="w-full h-full flex flex-col items-center px-5 py-4">

                     <div className="w-full h-32 py-8 flex items-center justify-center">
                        <span className="text-6xl text-center text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.4)]" >{game.name}</span>
                     </div>

                     <div className="w-full h-full flex p-5 justify-center">
                        <span className="text-3xl text-center text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.4)]" >{game.description}{game.description}{game.description}</span>
                     </div>

                  </div>

               </div>

               {/* Bottom */}
               <div className="gap-5 items-center w-full h-full flex">

                  <div className="h-full aspect-video bg-orange-300 bg-opacity-50"></div>

                  <div className="h-full w-full bg-purple-300 bg-opacity-50"></div>

               </div>

            </div>

         </div>

      </>,
      document.getElementById("wayback-root")

   )

}
