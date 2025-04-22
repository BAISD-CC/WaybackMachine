import { Game } from "../pages/Public";
import test_icon from "../assets/placeholder-square.jpg";
import axios from "axios";
import { useEffect, useState } from "react";

export default function GameSquare({ game }: { game: Game }) {
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

   return (

      <div className="duration-100 flex border-4 border-green-500 hover:border-pink-500 bg-zinc-800 w-72 h-72 m-5 overflow-hidden rounded-lg scale-100 hover:scale-105">

         <div className="flex self-end justify-center items-center w-full h-16 text-center">

            <img
               src={gameThumbnail || test_icon}
               alt="Game Thumbnail"
               className="fixed top-0 left-0 w-full h-full -z-10"
            />

            <p className="text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.4)] leading-6 px-8 pb-5">{game.name}</p>

         </div>

      </div>

   );
}
