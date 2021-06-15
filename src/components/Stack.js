import React from 'react';
import { LazyLoadImage } from "react-lazy-load-image-component";
import content from "../contents";

import Typical from "react-typical";
import { Link as ScrollLink} from 'react-scroll';

export default function Stack() {

    

    return (
        <div className="min-h-screen flex flex-col items-center justify-center font-mitr"
            id="stack"
        >
            <h1 className="text-5xl font-bold">Stack i use</h1>
            <div className="flex flex-wrap justify-center mt-12">
                {content.stack.tech.map((tech, index) => {
                    return (
                        <span 
                        className={`${index % 2 === 0 ? ' animate-bounce':' animate-pulse'} 
                        w-40 bg-white shadow-2xl m-2 rounded-full flex items-center p-5`}
                        key={index}
                        >
                            <LazyLoadImage src={tech.img} alt={tech.alt} />
                        </span>
                    )
                })}
                <p className="w-11/12 md:max-w-xl text-xl text-center mt-10">{content.stack.desc}</p>
            </div>
            <div>
                <ScrollLink to="about" smooth={true}>
                    <button className="animate-float bg-indigo-500 px-10 py-3 text-xl uppercase mt-10 rounded-lg focus:outline-none">
                        {content.header.btnText}
                    </button>
                </ScrollLink>
            </div>
        </div>
    )
}
