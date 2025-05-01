import { Link, useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";

import { Contributor } from "./Public"
import { useEffect, useState } from "react";
import axios from "axios";

export default function Contributors() {

    const { specificContributor } = useParams();

    const [contributor, setContributor] = useState<Contributor>()

    if (specificContributor != 'none') {

        const getContributorPath = "https://wayback-api-prod.codedojoconnect.com/api/contributors/" + specificContributor

        useEffect(() => {

            const fetchContributor = async () => {

                try {

                    const { data } = await axios.get<Contributor>(
                        getContributorPath
                    );

                    setContributor(data);

                } catch (e) {

                    setContributor(null);
                    console.warn("Contributor not found.\n|" + e + "|");

                }

            }

            fetchContributor();

        }, []);

        if (contributor != null) {

            return (<>

                <div className="w-screen h-screen flex">

                    <Sidebar />

                    <div className="flex flex-col items-center p-5 w-full h-full">

                        {/* RIGHT SIDE */}
                        <div className="animations-slide-left bg-zinc-900 flex justify-center w-full h-full overflow-y-auto overflow-x-hidden rounded-lg">

                            {contributor.name}

                        </div>

                    </div>

                </div >

            </>)

        } else {
            return (<p>Contributor Not Found</p>)
        }

    } else {

        return (<>

            <div className="w-screen h-screen flex">

                <Sidebar />

                <div className="flex flex-col items-center p-5 w-full h-full">

                    {/* RIGHT SIDE */}
                    <div className="animations-slide-left bg-zinc-900 flex justify-center w-full h-full overflow-y-auto overflow-x-hidden rounded-lg">



                    </div>

                </div>

            </div >

        </>)

    }

}