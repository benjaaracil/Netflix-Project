import "./ListItem.scss"
import { React, useState } from 'react';
import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@material-ui/icons";
import trailer from "../../videos&images/trailer.mp4"

export default function ListItem({ index }) { //El index que recibe es de cada <ListItem correspondiente, de esta manera vamos a poder centrar el hover correspondiente a cada cajita (pelicula)
    const [isHovered, setIsHovered] = useState(); //Estado para ver si el mouse está encima de alguna o no... 

    return (
        <div className="listItem" style={{ left: isHovered && index * 225 - 50 + index * 2.5 }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <img
                src="https://ecuadorcomunicacion.com/wp-content/uploads/2020/08/matrix.jpg"
                alt="" />
            {isHovered && (
                <>
                    <video src={trailer} autoPlay={true} loop />

                    <div className="itemInfo">
                        <div className="icons">
                            <PlayArrow />
                            <Add />
                            <ThumbUpAltOutlined />
                            <ThumbDownAltOutlined />
                        </div>
                        <div className="itemInfoTop">
                            <span>1 hour 14 mins</span>
                            <span className="limit">+16</span>
                            <span>1999</span>
                        </div>
                        <div className="descr">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Odit sint laborum obcaecati maxime blanditiis, eaque sequi vel at quasi, recusandae pariatur dicta, rem et impedit perferendis dolor. Laborum, quam. Harum.
                        </div>
                        <div className="genre">Action</div>
                    </div>
                </>
            )}
        </div>
    )
}
