import React, { useState, useEffect } from 'react';
import { LazyLoadImage } from "react-lazy-load-image-component";
import content from "../contents";

import Typical from "react-typical";
import { Link as ScrollLink} from 'react-scroll';
import emailjs, { send } from "emailjs-com";

export default function Contact() {

    const [status, setStatus] = useState(false);

    function sendEmail(e) {
        const d_status = document.getElementById('d_status')
        e.preventDefault();
    
    emailjs.sendForm('service_3881k39','template_nxa52gk', e.target, 'user_XiLgKxCUYdnB6hyyG3B0M')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
        d_status.style.display = "block";
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center font-mitr"
            id="contact"
        >
            <h1 className="text-5xl font-bold">Contact me</h1>
            <div className="m-4 hidden transition" id="d_status">
                <div class="flex items-center bg-blue-500 text-white text-sm font-bold px-4 py-3" role="alert">
                    <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/></svg>
                    <p>ส่งข้อมูลเรียบร้อยแล้ว</p>
                </div>
            </div>
            <div className="flex flex-wrap justify-center mt-12">
                <div className="w-full max-w-xs">
                    
                    <div className="Input__header">Send Email To Kasem</div>
                   
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={sendEmail}>
                        <div class="mb-4">
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                placeholder="Name"
                                name="name"
                                required
                            />
                        </div>
                         <div class="mb-4">
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="email"
                                placeholder="Email Address"
                                name="email"
                                required
                            />
                        </div>
                         <div class="mb-4">
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                placeholder="Subject"
                                name="subject"
                                required
                            />
                        </div>
                        <div class="mb-4">
                            <textarea 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Your Message"
                                name="message"
                                required
                            />
                        </div>
                         <div class="mb-4">
                            <input
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer focus:outline-none focus:shadow-outline"
                                type="submit"
                                value="Send Message"
                            />
                        </div>
                    </form>
                </div>
            </div>
            <div>
                <ScrollLink to="stack" smooth={true}>
                    <button className="animate-float bg-indigo-500 px-10 py-3 text-xl uppercase mt-10 rounded-lg focus:outline-none">
                        Stack i use
                    </button>
                </ScrollLink>
            </div>
        </div>
    )
}
