import React from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import {useEffect } from "react";
import { getGameId } from '../../redux/action'
import style from "../detail/detail.module.css"

const Detail = () => {
    const { id } = useParams();

    const gameID = useSelector((state) => state.gameID)
    console.log(gameID);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getGameId(id))
    },[])


    return (
        <div className={style.card}>

            <h2 className={style.footer}>ID: {gameID.id}</h2>
            <h2 className={style.cardtitle}>{gameID.name}</h2>
            <img src={gameID.background_image} className={style.cardimage} alt='portada' />
            <h2 className={style.cardsubtitle}>Plataformas</h2>
            <h2 className={style.cardbody}>{gameID.platforms.map((pla) => <p>{pla.platform.name}</p>)}</h2>
            <h2 className={style.cardsubtitle}>Descripcion</h2>
            <h2 className={style.cardbody}>{gameID.description_raw}</h2>
            <h2 className={style.cardsubtitle}>Fecha de Lanzamiento</h2>
            <h2 className={style.cardbody}>{gameID.released}</h2>
            <h2 className={style.cardsubtitle}>Rating</h2>
            <h2 className={style.cardbody}> {gameID.rating}</h2>
            <h2 className={style.cardsubtitle}>Genres</h2>
            <h2 className={style.cardbody}> {gameID.genres.map(gen => gen.name + " ")}</h2>

        </div>
    )
}

export default Detail