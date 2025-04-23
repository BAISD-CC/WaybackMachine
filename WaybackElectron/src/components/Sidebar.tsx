import classLogo from '../assets/code-dojo-full-color-new-2.png';
import { Link } from 'react-router-dom';

export default function Sidebar() {

   return (<>

      <aside id="logo-sidebar" className="z-40 w-64 h-screen transition-transform -translate-x-0" aria-label="Sidebar">
         <div className="h-full px-3 py-4 flex flex-col overflow-y-none bg-gray-50 dark:bg-zinc-900">

            {/* LOGO */}
            <a href="#" className="flex items-center justify-center h-40 mb-5 mt-5 cursor-default">
               <img src={classLogo} className="object-center h-full" alt="Logo" />
            </a>

            <div className="flex flex-col w-full h-full">

               {/* LIST */}
               <ul className="font-medium gap-2 flex flex-col h-full bg-opacity-25 bg-black p-5 rounded-lg">

                  {/* GAMES */}
                  <li>
                     <Link to="/" className="duration-200 flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-700 group">

                        <svg className="duration-200 w-5 h-5 text-gray-800 dark:text-green-400 dark:group-hover:text-pink-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                           <path fill-rule="evenodd" d="M3 6a2 2 0 0 1 2-2h5.532a2 2 0 0 1 1.536.72l1.9 2.28H3V6Zm0 3v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9H3Z" clip-rule="evenodd" />
                        </svg>

                        <span className="ms-3">Games</span>

                     </Link>
                  </li>

                  {/* CONTRIBUTORS */}
                  <li>
                     <Link to="/contributors" className="duration-200 flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-700 group">

                        <svg className="duration-200 w-5 h-5 text-gray-800 dark:text-green-400 dark:group-hover:text-pink-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                           <path fill-rule="evenodd" d="M12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-1.5 8a4 4 0 0 0-4 4 2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-3Zm6.82-3.096a5.51 5.51 0 0 0-2.797-6.293 3.5 3.5 0 1 1 2.796 6.292ZM19.5 18h.5a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-1.1a5.503 5.503 0 0 1-.471.762A5.998 5.998 0 0 1 19.5 18ZM4 7.5a3.5 3.5 0 0 1 5.477-2.889 5.5 5.5 0 0 0-2.796 6.293A3.501 3.501 0 0 1 4 7.5ZM7.1 12H6a4 4 0 0 0-4 4 2 2 0 0 0 2 2h.5a5.998 5.998 0 0 1 3.071-5.238A5.505 5.505 0 0 1 7.1 12Z" clip-rule="evenodd" />

                        </svg>

                        <span className="ms-3">Contributors</span>

                     </Link>
                  </li>

                  {/* CREDITS */}
                  <li className="mt-auto">
                     <Link to="/credits" className="duration-200 flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-700 group">

                        <svg className="duration-200 w-5 h-5 text-gray-800 dark:text-green-400 dark:group-hover:text-pink-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                           <path d="M6 2c-1.10457 0-2 .89543-2 2v4c0 .55228.44772 1 1 1s1-.44772 1-1V4h12v7h-2c-.5523 0-1 .4477-1 1v2h-1c-.5523 0-1 .4477-1 1s.4477 1 1 1h5c.5523 0 1-.4477 1-1V3.85714C20 2.98529 19.3667 2 18.268 2H6Z" />
                           <path d="M6 11.5C6 9.567 7.567 8 9.5 8S13 9.567 13 11.5 11.433 15 9.5 15 6 13.433 6 11.5ZM4 20c0-2.2091 1.79086-4 4-4h3c2.2091 0 4 1.7909 4 4 0 1.1046-.8954 2-2 2H6c-1.10457 0-2-.8954-2-2Z" />
                        </svg>

                        <span className="ms-3">Credits</span>

                     </Link>
                  </li>

               </ul>

               {/* VERSION */}
               <p className="relative mt-4 left-1/3 text-center text-white">v.0.0.04</p>

            </div>

         </div>
      </aside>

   </>)

}