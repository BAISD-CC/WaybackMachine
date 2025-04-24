import { useState } from "react";
import { Game } from "../pages/Public";

export default function GameModal({ game }: { game?: Game | null }) {

   const [isShown, setIsShown] = useState(false);

   const divClassState = isShown
      ? "duration-200 z-50 fixed left-0 opacity-100 flex items-center bg-black bg-opacity-25 justify-center w-screen h-screen"
      : "duration-200 z-50 fixed left-0 opacity-0 pointer-events-none flex items-center bg-black bg-opacity-25 justify-center w-screen h-screen"

   return (<>

      <div className={divClassState}>

         <div className="z-50 w-full h-full bg-zinc-800 rounded-lg scale-90">
            test or sum
         </div>

      </div>


   </>)

}