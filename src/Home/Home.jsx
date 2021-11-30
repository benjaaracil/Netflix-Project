import "./Home.scss";
import React from 'react';
import { AcUnit } from "@material-ui/icons";
import NavBar from "../components/NavBar/NavBar"
import Featured from "../components/Featured/Featured";
import List from "../components/List/List";

export default function Home() {
    return (
        <div className="home">
            <NavBar/>
            <Featured type="movie"/>
            <List/>
            <List/>
            <List/>
        </div>
    )
}
