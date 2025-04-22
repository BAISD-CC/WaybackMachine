import Dropdown from "./Dropdown";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Topbar() {

   const categoryDataPath = "http://localhost:5111/categories";

   const [genres, setGenres] = useState<string[]>([]);

   useEffect(() => {

      const fetchGenres = async () => {

         try {
            const { data } = await axios.get<string[]>(
               categoryDataPath
            );
            setGenres(data);
         } catch (err) {
            setGenres(["No Data Available"])
         }

      };

      fetchGenres();

   }, []);

   return (

      <div className="flex items-center w-full h-16 bg-zinc-900 rounded-lg p-2">

         <Dropdown title="Categories" options={genres} />

      </div>

   );
}
