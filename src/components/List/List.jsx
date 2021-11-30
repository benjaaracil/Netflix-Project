import "./List.scss";
import React from 'react';
import ListItem from "../ListItem/ListItem";
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@material-ui/icons";

export default function List() {
    return (
        <div className="list">
            <span className="listTitle">Continue to watch</span>
            <div className="wrapper">
                <ArrowBackIosOutlined className="sliderArrow left"/>
                <div className="container">
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                </div>
                <ArrowForwardIosOutlined className="sliderArrow right"/>
            </div>
        </div>
    )
}
