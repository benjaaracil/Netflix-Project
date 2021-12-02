import  "./Featured.scss";
import React from 'react';
import { InfoOutlined, PlayArrow } from "@material-ui/icons";

export default function Featured({type}) {
    return (
        <div className="featured">
            {type && (
                <div className="category">
                    <span>{type === "movie" ? "Movies": "Series"}</span>
                    <select name ="genre" id="genre">
                        <option>Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </div> 
            )}
            <img 
                src="https://ecuadorcomunicacion.com/wp-content/uploads/2020/08/matrix.jpg" 
                alt="" 
                // width="100%"
            />
            <div className="info">
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/d/db/The-matrix-logo.svg" 
                    alt="" 
                />
                <span className="desc">
                El programador informático Thomas Anderson, más conocido en el mundo de los "hacker" como Neo, está en el punto de mira del temible agente Smith. Otros dos piratas informáticos, Trinity y Morfeo, se ponen en contacto con Neo para ayudarlo a escapar. Matrix te posee. Sigue al conejo blanco.
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
