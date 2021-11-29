import "./NavBar.scss"
import React from 'react';
import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";

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
                    <span>My List</span>
                </div>
                <div className="right">
                    <Search/>
                    <span>KID</span>
                    <Notifications/>
                    <img src="https://lh3.googleusercontent.com/ogw/ADea4I7U6GjOyfNZtuj5Q0aehXxaUTrshmML3AVua12xcQ=s192-c-mo" alt="" />
                    <ArrowDropDown/>
                </div>
            </div>
        </div>
    )
}
