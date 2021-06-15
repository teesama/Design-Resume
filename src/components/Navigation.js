import React from "react";
import content from "../contents";

const Navigation = () => {
    return (
        <div className="w-full z-50" style={{
            background: '#091c29',
        }}>
            <div className="flex items-center justify-between w-10/12 mx-auto py-3 text-white font-mitr">
                <h1 className="text-3xl font-bold">
                    { content.nav.logo }{' '}
                    <span className="w-3 h-3 bg-red-500 inline-block rounded-full"></span>
                </h1>
                <div>
                    {content.nav.links.map((link, inddex) => {
                        return (
                            <span key={inddex} className="text-xl mr-4">
                                <a href={link.to} target="_blank">{link.text}</a>
                            </span>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Navigation;