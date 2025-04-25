import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function Credits() {

    return (<>

        <div className="w-screen h-screen flex">

            <Sidebar />

            <div className="flex flex-col items-center p-5 w-full h-full">

                {/* RIGHT SIDE */}
                <div className="animations-slide-left bg-zinc-900 flex flex-col justify-center w-full h-full overflow-y-auto overflow-x-hidden rounded-lg">

                    <div className="flex justify-center items-center w-full h-24 pt-4">

                        <span className="text-center text-white text-5xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.4)]">Credits</span>

                    </div>

                    <div className="flex items-center justify-center gap-8 w-full h-full">

                        {/* Left Side */}
                        <div className="py-4 pl-8 flex flex-col justify-center gap-10 w-full h-full">

                            {/* Development */}
                            <div className="w-full h-fit flex flex-col text-left">

                                <span className="text-white text-3xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.4)]">
                                    <span className="text-green-500">Wayback</span> Development
                                </span>

                                <span className="text-white text-lg drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.4)] ">
                                    Justin Kruskie - Backend
                                </span>

                                <span className="text-white text-lg drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.4)] -mt-1">
                                    AJ Gillard - Frontend, Backend
                                </span>

                            </div>

                            {/* Graphics */}
                            <div className="w-full h-fit flex flex-col text-left">

                                <span className="text-white text-3xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.4)]">
                                    <span className="text-green-500">Wayback</span> Graphics
                                </span>

                                <span className="text-white text-lg drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.4)] ">
                                    Jacob Dewar - Logo, Graphics
                                </span>

                                <span className="text-white text-lg drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.4)] -mt-1">
                                    Graphics '24-'25 Class - Graphics
                                </span>

                            </div>

                            {/* Construction */}
                            <div className="w-full h-fit flex flex-col text-left">

                                <span className="text-white text-3xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.4)]">
                                    <span className="text-green-500">Wayback</span> Construction
                                </span>

                                <span className="text-white text-lg drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.4)] ">
                                    Justin Kruskie - Machine Mockups
                                </span>

                                <span className="text-white text-lg drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.4)] ">
                                    Woodshop '24-'25 Class - Construction
                                </span>

                            </div>

                        </div>

                        {/* Right Side */}
                        <div className="py-4 pr-8 flex flex-col justify-center gap-10 w-full h-full">

                            {/* HM */}
                            <div className="w-full h-fit flex flex-col text-right">

                                <span className="text-white text-3xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.4)]">
                                    <span className="text-green-500">Honorable</span> Mentions
                                </span>

                                <span className="text-white text-lg drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.4)] ">
                                    Computer Prog. '24-'25 Class
                                </span>

                                <span className="text-white text-lg drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.4)] ">
                                    ...
                                </span>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div >

    </>)

}