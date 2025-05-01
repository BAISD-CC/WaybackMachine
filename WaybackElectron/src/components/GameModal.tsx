import { Game } from "../pages/Public";
import { createPortal } from "react-dom";
import { useState, useEffect } from 'react';
import axios from "axios";
import { Carousel } from "flowbite/lib/esm";

import '../animations.css'

import test_icon from "../assets/placeholder-square.jpg";

export default function GameModal({ game, onClose }: { game?: Game | null, onClose: () => void }) {

   const [gameThumbnail, setGameThumbnail] = useState<string | null>(null);
   const getThumbnailPath = "https://wayback-api-prod.codedojoconnect.com/api/media/thumbnail/" + String(game.guid);

   useEffect(() => {

      const fetchThumbnail = async () => {

         try {

            const { data } = await axios.get(getThumbnailPath, { responseType: 'arraybuffer' });
            const blob = new Blob([data], { type: "image/png" });
            const imageUrl = URL.createObjectURL(blob);
            setGameThumbnail(imageUrl);

         } catch (err) {

            console.error("Error fetching thumbnail:", err);
            setGameThumbnail(test_icon);

         }
      };

      fetchThumbnail();

   }, [game.id]);

   const handleLaunchGame = () => {

      console.log(window)

      window.electron.launchGame();

   }

   return createPortal(

      <>

         <div className="duration-200 z-50 fixed top-0 left-0 opacity-100 flex items-center bg-black bg-opacity-50 justify-center w-screen h-screen" onClick={onClose}>

            <div className="animations-scale-up-center flex flex-col justify-center z-50 w-full h-full overflow-y-scroll bg-zinc-800 rounded-lg scale-90 px-16 pt-10" onClick={(e) => e.stopPropagation()}>

               {/* Top */}
               <div className="w-full h-40 flex flex-col justify-center">

                  <span className="text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.4)] text-7xl">{game.name}</span>
                  <span className="text-pink-500 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.4)] text-4xl ">Created In: {game.year}</span>
                  <span className="text-green-500 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.4)] text-2xl ">Genre1, Genre2, Genre3</span>

               </div>
               {/* Middle */}
               <div className="w-full h-full flex flex-row items-center justify-center gap-10">

                  <div className="flex flex-col gap-10">

                     {/* Carousel */}
                     <div className="h-96 bg-black bg-opacity-25 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.4)] p-8 w-fit aspect-video rounded-lg object-fill">
                        <img src={gameThumbnail || test_icon} className="w-full h-full rounded-lg" />
                     </div>

                     {/* Launch */}
                     <div className="w-full h-20 flex items-center justify-center">

                        <button className="duration-200 hover:scale-105 hover:bg-pink-500 bg-green-500 w-1/2 h-full rounded-lg text-white text-6xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.4)]" onClick={() => {
                           handleLaunchGame()
                        }}>PLAY</button>

                     </div>

                  </div>


                  {/* Desc */}
                  <div className="bg-black bg-opacity-25 flex flex-col w-full h-full rounded-lg -mt-24 p-4 gap-5">

                     <div className="flex flex-col h-1/2 max-h-[50%]">

                        <span className="w-full h-fit inline-flex items-end text-green-500 text-4xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.4)]">Description</span>
                        <div className="w-full h-full max-h-fit overflow-y-scroll bg-black bg-opacity-25 rounded-lg px-4 pt-2 text-white text-2xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.4)]">
                           <span>{game.description}</span>
                        </div>

                     </div>

                     <div className="h-1/2 max-h-[50%]">

                        <span className="w-full h-fit inline-flex items-end text-green-500 text-4xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.4)]">Developers</span>
                        <div className="w-full h-full max-h-56 px-4 pt-2 bg-black bg-opacity-25 rounded-lg flex flex-col overflow-y-scroll text-white text-2xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.4)]">
                           <span>test</span>
                        </div>

                     </div>

                  </div>

               </div>

            </div>

         </div>

      </>,
      document.getElementById("wayback-root")

   )

}
