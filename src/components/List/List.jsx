import "./List.scss";
import {React, useRef, useState} from 'react';
import ListItem from "../ListItem/ListItem";
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@material-ui/icons";

export default function List({name}) {
    const [slideNumber, setSlideNumber] = useState(0) //Esto nos va a servir para que no se pueda seguir moviendo el "carrusel" si no hay mas elementos hacia la izquierda o derecha
    const [isMove, setIsMoved] = useState(false); //Para desvanecer el botón de ir hacia atras si estamos en el primer elemento...

    const listRef = useRef(); //En vez de usar elementById o algo similar uso el hook useRef de react para hacer referencia a ese componente

    const handleClick = (direction) => {
        setIsMoved(true);
        let distance = listRef.current.getBoundingClientRect().x - 50;
        // console.log(distance) La funcion de la linea 10 nos permite saber la distancia exacta de los elementos en pantalla. 

        if (direction === "left" && slideNumber > 0) {
            setSlideNumber(slideNumber-1) 
            listRef.current.style.transform = `translateX(${230 + distance}px)`    //Boton funcional para que la lista se mueva hacia la derecha (230 px ya que es lo que ocupa un <ListItem/> y el distance que lo declaramos arriba, esto permite que los elementos se muevan siempre la misma cantidad de pixeles)
        }
        else if (direction === "right" && slideNumber < 5){
            setSlideNumber(slideNumber+1)
            listRef.current.style.transform = `translateX(${-230 + distance}px)`
        }
    }

    return (
        <div className="list">
            <span className="listTitle">{name}</span>
            <div className="wrapper">
                <ArrowBackIosOutlined 
                className="sliderArrow left" 
                onClick={() => handleClick("left")}
                style={{display: !isMove && "none"}} //Si no esta movido, osea es false, que no se muestre (por eso el &&)
                />
                <div className="container" ref={listRef}>
                    <ListItem index = {0}/>
                    <ListItem index = {1}/>
                    <ListItem index = {2}/>
                    <ListItem index = {3}/>
                    <ListItem index = {4}/>
                    <ListItem index = {5}/>
                    <ListItem index = {6}/>
                    <ListItem index = {7}/>
                    <ListItem index = {8}/>
                    <ListItem index = {9}/>
                    <ListItem index = {10}/>
                    <ListItem index = {11}/>
                    <ListItem index = {12}/>
                </div>
                <ArrowForwardIosOutlined 
                className="sliderArrow right" 
                onClick={() => handleClick("right")}
                />
            </div>
        </div>
    )
}
