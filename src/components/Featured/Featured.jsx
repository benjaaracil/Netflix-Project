import  "./Featured.scss";
import React from 'react';
import { InfoOutlined, PlayArrow } from "@material-ui/icons";

export default function Featured() {
    return (
        <div className="featured">
            <img 
                src="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2018/06/series-netflix.jpg?itok=e_UM8TMx" 
                alt="" 
                // width="100%"
            />
            <div className="info">
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/d/db/The-matrix-logo.svg" 
                    alt="" 
                />
                <span className="desc">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, doloremque expedita. Vero, aspernatur culpa incidunt doloremque, explicabo nulla possimus dicta exercitationem, mollitia officia facilis. Voluptate velit laborum possimus exercitationem doloribus!
                </span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrow/>
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined/>
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
