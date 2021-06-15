import React from 'react';
import { LazyLoadImage } from "react-lazy-load-image-component";
import content from "../contents";
import Typical from "react-typical";
import { Link as ScrollLink} from 'react-scroll';
import Carousel from 'react-elastic-carousel';


const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
]

export default function Education() {
    return (
        <div className="min-h-screen flex flex-col p-4 items-center justify-center font-mitr"
            id="education"  style={{
                background: '#164261',
            }}
        >
            <h1 className="text-5xl font-bold text-white">Education</h1>
            <div className="w-11/12 mx-auto flex flex-col md:flex-row justify-between mt-12">
                <Carousel>
                    {content.education.educationlist.map((list, index) => {
                        return (
                            // <div key={index}>{list.major}</div>
                            <div className="flex-row justify-between md:flex mt-5 bg-gray-800 md:p-10 m-1 p-5 md:m-1 w-8/12 text-white rounded-md shadow-2xl" key={index}>
                                <div className="w-11/12">
                                    <h2 className="">สถานศึกษา: <p className="text-yellow-400">{list.college}</p></h2>
                                    <h3 className="">สาขา: <p className="text-yellow-400">{list.major}</p></h3>
                                    <h3>GPA: <p className="text-yellow-400">{list.gpa}</p></h3>
                                </div>
                                <div className=" self-center">
                                    <LazyLoadImage className="" width={150} src={list.img} alt={list.alt} />
                                    
                                </div>
                                
                            </div>
                        )
                    })}
                </Carousel>
            </div>
            <div>
                <ScrollLink to="portfolio" smooth={true}>
                    <button className="animate-float bg-indigo-500 px-10 py-3 text-xl uppercase mt-10 rounded-lg focus:outline-none">
                        Portfolio
                    </button>
                </ScrollLink>
            </div>
        </div>
    )
}
