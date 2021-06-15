import React from 'react';
import { LazyLoadImage } from "react-lazy-load-image-component";
import content from "../contents";
import Typical from "react-typical";
import { Link as ScrollLink} from 'react-scroll';

export default function About() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center font-mitr"
            id="about"
        >
            <h1 className="text-5xl font-bold">About me!</h1>
            <div className="w-10/12 md:w-8/12 flex flex-wrap justify-center mt-12">
                <figure className="flex flex-col bg-gray-100 rounded-xl p-5 md:p-0 shadow-2xl">
                {/* <LazyLoadImage className="rounded-full shadow-2xl animate-pulse" src={content.header.img}  effect="blur"/> */}
                    {/* <LazyLoadImage className="  min-h-full  object-contain shadow-2xl" src={content.about.aboutlist.background} effect="blur"/> */}
                    {/* <img className="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/assets/profile2.jpg" alt width={384} height={512} /> */}
                    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                        <blockquote>
                            <p className="text-lg font-semibold text-left">
                               {content.about.aboutlist.aboutme}
                            </p>
                        </blockquote>
                        <figcaption className="font-medium">
                            <div className="text-cyan-600">
                                {content.about.aboutlist.firstname} {content.about.aboutlist.lastname}
                            </div>
                            <div className="text-gray-500">
                            {content.about.aboutlist.position}, {content.about.aboutlist.position_detail}
                            </div>
                        </figcaption>
                    </div>
                    
                </figure>

            </div>
            <div>
                <ScrollLink to="education" smooth={true}>
                    <button className="animate-float bg-indigo-500 px-10 py-3 text-xl uppercase mt-10 rounded-lg focus:outline-none">
                        {content.header.btnText}
                    </button>
                </ScrollLink>
            </div>  
        </div>
    )
}
