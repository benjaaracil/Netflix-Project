import "./Home.scss";
import {React, useState, useEffect} from 'react';
import NavBar from "../components/NavBar/NavBar"
import Featured from "../components/Featured/Featured";
import List from "../components/List/List";
import axios from "axios";

export default function Home() {
    const [movies, setMovies] = useState();
    const [movies1, setMovies1] = useState();
    const [movies2, setMovies2] = useState();
    let url1 =`https://api.themoviedb.org/3/discover/movie?api_key=6d576e164fd97d2d38823c27321b1b21&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_watch_monetization_types=flatrate`;
    let url2 = `https://api.themoviedb.org/3/discover/movie?api_key=6d576e164fd97d2d38823c27321b1b21&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=2&with_watch_monetization_types=flatrate`;
    let url3 = `https://api.themoviedb.org/3/discover/movie?api_key=6d576e164fd97d2d38823c27321b1b21&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=3&with_watch_monetization_types=flatrate`;
    const requestOne = axios.get(url1);
    const requestTwo = axios.get(url2);
    const requestThree = axios.get(url3);
    
    
    useEffect(() => {
        getMovies()
    }, [])
    
    const getMovies = () => {
        axios.all([requestOne, requestTwo, requestThree]).then(axios.spread((...responses) => {
            const responseOne = responses[0]
            const responseTwo = responses[1]
            const responesThree = responses[2]
            // use/access the results
            setMovies(responseOne.data.results)
            setMovies1(responseTwo.data.results)
            setMovies2(responesThree.data.results)
            // console.log("Primera", responseOne.data.results)
            // console.log("Segunda", responseTwo.data.results) 
        })).catch(errors => {
            // react on errors.
            console.error(errors)
        })
    };
    
    
    return (
        <div className="home">
            <NavBar/>
            <Featured type="movie"/>
            <List movies = {movies} name={"Popular on Netflix"}/>
            <List movies = {movies1} name={"Continue Watching for Benja"}/>
            <List movies = {movies2} name={"Trending now"}/>
        </div>
    )
}
