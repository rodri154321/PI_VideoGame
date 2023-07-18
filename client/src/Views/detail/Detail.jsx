import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
// import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";
// import { getGameId } from '../../redux/action'
import style from "../detail/detail.module.css"
import axios from 'axios';

const Detail = () => {
    const { id } = useParams();
    const [gameID, setGameID] = useState({})

    // const gameID = useSelector((state) => state.gameID)

    // const dispatch = useDispatch()
    
    useEffect(() => {
        axios(`http://localhost:3001/videogames/${id}`).then(({ data }) => {
           if (data.name) {
            setGameID(data);
           } else {
              alert('No hay personajes con ese ID');
           }
        });
        return setGameID({});
     }, [id]);
    
    //
    return (
        <div className={style.card}>
            <div className={style.id}>
                <h2 className={style.footer}>ID: {gameID.id}</h2>
            </div>
            <h2 className={style.cardtitle}>{gameID.name}</h2>
            <img src={gameID.background_image} className={style.cardimage} alt='portada' />
            <h2 className={style.cardsubtitle}>Plataformas</h2>
            <h2 className={style.cardbody}>{isNaN(id) ? gameID.platforms?.map((pla) => <p>{pla}</p>) : gameID.platforms?.map((pla) => <p>{pla.platform.name}</p>)}</h2>
            <h2 className={style.cardsubtitle}>Descripcion</h2>
            <h2 className={style.cardbody}>{isNaN(id) ? gameID.description : gameID.description_raw}</h2>
            <h2 className={style.cardsubtitle}>Fecha de Lanzamiento</h2>
            <h2 className={style.cardbody}>{gameID.released}</h2>
            <h2 className={style.cardsubtitle}>Rating</h2>
            <h2 className={style.cardbody}> <p>{gameID.rating}</p></h2>
            <h2 className={style.cardsubtitle}>Genres</h2>
            <h2 className={style.cardbody}> {isNaN(id) ? gameID.Genres?.map(gen => gen.name + " ") : gameID.genres?.map(gen => gen.name + " ")}</h2>

        </div>
    )
}

export default Detail