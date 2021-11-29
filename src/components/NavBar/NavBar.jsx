import "./NavBar.scss"
import React from 'react';

export default function NavBar() {
    return (
        <div className="navbar">
            <div className="container">
                <div className="left">
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
                        alt="" 
                    />
                    <span>Homepage</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>New and Popular</span>
                    <span>Homepage</span>
                </div>
                <div className="right"></div>
            </div>
        </div>
    )
}
