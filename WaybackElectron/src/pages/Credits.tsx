import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function Credits() {

    return (<>

        <div className="w-screen h-screen flex">

            <Sidebar />

            <div className="flex flex-col items-center p-5 w-full h-full">

                {/* RIGHT SIDE */}
                <div className="animations-slide-left bg-zinc-900 flex flex-col justify-center w-full h-full overflow-y-auto overflow-x-hidden rounded-lg">

                    <div className="flex justify-center items-center w-full h-24">

                        <span className="text-center text-white text-5xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.4)]">Contributors</span>

                    </div>

                    <div className="flex items-center justify-center w-full h-full">

                        {/* Left Side */}
                        <div className="pt-4 flex flex-col w-full h-full bg-red-500">

                            <span className="text-white text-xl text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.4)]">
                                Wayback Development
                            </span>

                            <span className="text-white text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.4)]">
                                Justin Kruskie - Backend
                            </span>

                            <span className="text-white text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.4)]">
                                AJ Gillard - Frontend, Backend
                            </span>

                        </div>

                        {/* Right Side */}
                        <div className="pt-4 flex flex-col w-full h-full bg-blue-500"></div>

                    </div>

                </div>

            </div>

        </div >

    </>)

}