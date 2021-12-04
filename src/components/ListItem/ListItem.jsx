import "./ListItem.scss"
import { React, useState, useEffect } from 'react';
import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@material-ui/icons";
// import trailer from "../../videos&images/trailer.mp4";
import api from "../../api"

export default function ListItem({ index, title, img, description, score, id }) { //El index que recibe es de cada <ListItem correspondiente, de esta manera vamos a poder centrar el hover correspondiente a cada cajita (pelicula)
    const [isHovered, setIsHovered] = useState(); //Estado para ver si el mouse está encima de alguna o no... 
    const [video, setVideo] = useState();
    const urlVideos = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=6d576e164fd97d2d38823c27321b1b21&language=en-US`

    useEffect(() => {
        getTrailer()
    }, [])

    const getTrailer = () => {
        return api.get(urlVideos)
        .then((response) => {
            let trailerResponse = response.data.results.find(video => video.type = "Trailer");
            let videoTrailer = `https://www.youtube.com/embed/${trailerResponse.key}?autoplay=1`;
            // console.log(videoTrailer)
            setVideo(videoTrailer)
        })
        .catch((err) => console.error(err))
    }
    getTrailer();



    return (
        <div className="listItem" style={{ left: isHovered && index * 225 - 50 + index * 2.5 }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <img
                src={img}
                alt="" />
            {isHovered && (
                <>
                    {/* <video src={trailer} autoPlay={true} loop /> */}
                    <iframe src={video} allow = "autoplay"/>

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
