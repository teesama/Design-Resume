import React from 'react'
import { LazyLoadImage } from "react-lazy-load-image-component";
import content from "../contents";

import Typical from "react-typical";
import { Link as ScrollLink} from 'react-scroll';

export default function Portfolio() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center font-mitr"
            id="portfolio"
        >
            <h1 className="text-5xl font-bold">Portfoilio</h1>
            <div className="flex flex-wrap gap-2 justify-center">
            {content.portfolio.portfoliolist.map((list, index) => {
                return (
                    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-indigo-700 text-pink-300" key={index}>
                        <img className="w-full" src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Sunset in the mountains" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{list.headder}</div>
                            <p className=" text-gray-200 text-base">
                            {list.content}
                            </p>
                        </div>
                        <div className="px-6 py-4">
                            <span>
                                เข้าชม: <a className=" text-yellow-400 font-bold" target="_blank" href={list.url}>Click</a>
                            </span>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{list.dev_font}</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{list.dev_back}</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{list.dev_db}</span>
                        </div>
                    </div>
                )
            })}
            </div>
            

            <div>
                <ScrollLink to="contact" smooth={true}>
                    <button className="animate-float bg-indigo-500 px-10 py-3 text-xl uppercase mt-10 rounded-lg focus:outline-none">
                        contact
                    </button>
                </ScrollLink>
            </div>
        </div>
    )
}
