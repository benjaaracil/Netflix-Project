import "./ListItem.scss"
import { React, useState } from 'react';
import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@material-ui/icons";
import trailer from "../../videos&images/trailer.mp4";

export default function ListItem({ index, title, img, description, score }) { //El index que recibe es de cada <ListItem correspondiente, de esta manera vamos a poder centrar el hover correspondiente a cada cajita (pelicula)
    const [isHovered, setIsHovered] = useState(); //Estado para ver si el mouse está encima de alguna o no... 

    return (
        <div className="listItem" style={{ left: isHovered && index * 225 - 50 + index * 2.5 }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <img
                src={img}
                alt="" />
            {isHovered && (
                <>
                    <video src={trailer} autoPlay={true} loop />

                    <div className="itemInfo">
                        <div className="icons">
                            <PlayArrow className="icon"/>
                            <Add className="icon"/>
                            <ThumbUpAltOutlined className="icon"/>
                            <ThumbDownAltOutlined className="icon"/>
                        </div>
                        <div className="itemInfoTop">
                            <span>{title}</span>
                            <span className="limit">+16</span>
                            <span>Score: {score}</span>
                        </div>
                        <div className="descr">
                            {description}
                        </div>
                        <div className="genre">Action</div>
                    </div>
                </>
            )}
        </div>
    )
}
