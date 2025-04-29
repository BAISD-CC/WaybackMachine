import { Game } from "../pages/Public";
import { createPortal } from "react-dom";
import { useState, useEffect } from 'react';
import axios from "axios";
import { Carousel } from "flowbite/lib/esm";

import '../animations.css'

import test_icon from "../assets/placeholder-square.jpg";

export default function GameModal({ game, onClose }: { game?: Game | null, onClose: () => void }) {

   const [gameThumbnail, setGameThumbnail] = useState<string | null>(null);
   const getThumbnailPath = "http://localhost:5111/Route/Media/Api/Media/Thumbnail/" + String(game.id);

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

   return createPortal(

      <>

         <div className="duration-200 z-50 fixed top-0 left-0 opacity-100 flex items-center bg-black bg-opacity-50 justify-center w-screen h-screen" onClick={onClose}>

            <div className="animations-scale-up-center flex flex-col gap-7 justify-center z-50 w-full h-full bg-zinc-800 rounded-lg scale-90 p-10" onClick={(e) => e.stopPropagation()}>

               {/* Top */}
               <div className="gap-5 items-center w-full max-h-[21rem] flex">

                  <div className="aspect-square h-full flex bg-red-300 bg-opacity-50">
                     <img src={gameThumbnail || test_icon} className="w-fit h-fit object-contain" />
                  </div>

                  <div className="w-full h-full flex flex-col items-center px-5 py-4">

                     <div className="w-full h-32 py-8 flex items-center justify-center">
                        <span className="text-6xl text-center text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.4)]" >{game.name}</span>
                     </div>

                     <div className="w-full h-full flex p-5 justify-center">
                        <span className="text-3xl text-center text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.4)]" >{game.description}</span>
                     </div>

                  </div>

               </div>

               {/* Bottom */}
               <div className="gap-5 w-full h-full flex flex-row">

                  {/* Videos n stuff */}
                  <div className="min-h-full aspect-video flex justify-center items-center px-4 bg-orange-300 bg-opacity-50">

                     <div id="carousel-game-thumb" className="w-full h-full overflow-hidden flex items-center gap-4" data-carousel="slide">

                        <button type="button" className="w-12 aspect-square bg-white" data-carousel-prev></button>

                        <div className="bg-white relative w-full aspect-video">

                           <div className="hidden w-full h-full absolute duration-700 bg-red-300 ease-in-out" data-carousel-item>1</div>
                           <div className="hidden w-full h-full absolute duration-700 bg-red-400 ease-in-out" data-carousel-item>2</div>

                        </div>

                        <button type="button" className="w-12 aspect-square bg-white" data-carousel-next></button>

                     </div>

                  </div>

                  {/* Developers */}
                  <div className="max-h-full w-full flex justify-center">

                     <div className="w-2/3 h-full flex flex-col justify-center bg-zinc-500 bg-opacity-25 rounded-lg p-5">

                        <span className="text-white text-5xl text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.4)] mb-4">Developers</span>

                        <div className="w-full h-full grid grid-flow-row">

                           {/* TEMP FOR SHOWCASE */}
                           <div className=" w-full h-12 gap-4 flex flex-row items-center px-4 py-2">

                              <img src={test_icon} className="aspect-square h-full" />

                              <span className="text-lg text-white w-1/2 max-w-[50%] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.4)] leading-5" >AJ Gillard</span>
                              <span className="text-lg text-white w-full drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.4)] leading-5">Lead Programmer</span>

                           </div>

                           {/* TEMP FOR SHOWCASE */}
                           <div className=" w-full h-12 gap-4 flex flex-row items-center px-4 py-2">

                              <img src={test_icon} className="aspect-square h-full" />

                              <span className="text-lg text-white w-1/2 max-w-[50%] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.4)] leading-5" >Tommy Whitaker</span>
                              <span className="text-lg text-white w-full drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.4)] leading-5">Lead Game Designer</span>

                           </div>

                           {/* TEMP FOR SHOWCASE */}
                           <div className=" w-full h-12 gap-4 flex flex-row items-center px-4 py-2">

                              <img src={test_icon} className="aspect-square h-full" />

                              <span className="text-lg text-white w-1/2 max-w-[50%] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.4)] leading-5" >Peyton Sequin</span>
                              <span className="text-lg text-white w-full drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.4)] leading-5">Hand-Drawn Artist</span>

                           </div>

                           {/* TEMP FOR SHOWCASE */}
                           <div className=" w-full h-12 gap-4 flex flex-row items-center px-4 py-2">

                              <img src={test_icon} className="aspect-square h-full" />

                              <span className="text-lg text-white w-1/2 max-w-[50%] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.4)] leading-5" >Hayden Delutzke</span>
                              <span className="text-lg text-white w-full drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.4)] leading-5">Pixel Artist</span>

                           </div>

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
