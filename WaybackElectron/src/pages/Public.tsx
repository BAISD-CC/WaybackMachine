// Components
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import GameSquare from "../components/GameSquare";

// Packages
import { useState, useEffect } from "react";
import axios from "axios";

// Other
import '../animations.css'

// Interface
export interface Game {
   id: number,
   guid: string,
   name: string,
   description: string,
   authors: object[],
   year: number,
   imageurl: string,
   repourl: string,
   exedir: string
}

export interface Genre {
   id: number,
   name: string
}

// Default
export default function Public() {

   const gamesListPath = "https://wayback-api-prod.codedojoconnect.com/api/games";

   const [gamesList, setGamesList] = useState<Game[]>([])

   // Fetch Game Data from Server
   useEffect(() => {

      const fetchGames = async () => {

         try {
            const { data } = await axios.get<Game[]>(
               gamesListPath
            );
            setGamesList(data);
         } catch (err) {
            setGamesList([])
         }
      };

      fetchGames();

   }, []);

   return (

      <>

         <div className="w-screen h-screen flex">

            <Sidebar />

            <div className="flex flex-col items-center p-5 w-full h-full">

               <Topbar />

               {/* RIGHT SIDE */}
               <div className="animations-slide-left bg-zinc-900 flex justify-center w-full h-full overflow-y-auto overflow-x-hidden mt-5 rounded-lg">

                  {/* GAME CONTAINER */}
                  <div className="w-fit h-fit grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">

                     {gamesList.map((_game) => {

                        return (
                           <GameSquare key={_game.id} game={_game} />
                        );

                     })}

                  </div>

               </div>

            </div>

         </div >

      </>

   )

}