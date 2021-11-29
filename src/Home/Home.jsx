import "./Home.scss";
import React from 'react';
import { AcUnit } from "@material-ui/icons";
import NavBar from "../components/NavBar/NavBar"
import Featured from "../components/Featured/Featured";

export default function Home() {
    return (
        <div className="home">
            <NavBar/>
            <Featured/>
        </div>
    )
}
