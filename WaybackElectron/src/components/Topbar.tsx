import Dropdown from "./Dropdown";
import { useState, useEffect } from "react";
import axios from "axios";
import { Genre } from "../pages/Public";

import '../animations.css';

export default function Topbar() {

   const categoryDataPath = "https://wayback-api-prod.codedojoconnect.com/api/genres";

   const [genres, setGenres] = useState<string[]>([]);

   useEffect(() => {

      const fetchGenres = async () => {

         const temp: string[] = []

         try {
            const { data } = await axios.get<Genre[]>(
               categoryDataPath
            );

            for (let i = 0; i < data.length; i++) { console.log(data[i]); temp.push(data[i].name) }

            setGenres(temp)

         } catch (err) {
            setGenres(["No Data Available"])
         }

      };

      fetchGenres();

   }, []);

   return (

      <div className="animations-slide-bottom z-40 flex items-center w-full h-16 bg-zinc-900 rounded-lg p-2">

         <Dropdown title="Categories" options={genres} />

      </div>

   );
}
