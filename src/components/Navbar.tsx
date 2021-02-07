import React from 'react'
import mgh from '../assets/mgh.png';

export default function Navbar() {
    return (
        <div className="fixed navbar">
            <div className="platform-container flex-between-center">
                <div className="h-20 flex items-center">
                    <img src={mgh} className="h-full object-fit py-3 mr-3" alt=""/>
                    <div>
                        <h1 className="text-lg md:text-xl font-medium">FHIR Specimens Database</h1>
                        <p className="hidden sm:block text-sm">Herrman Lab</p>
                    </div>
                </div>
                <button className="hidden md:block">Learn More</button>
            </div>
        </div>
    )
}
