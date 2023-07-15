import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getGenres,postUser } from '../../redux/action'
import style from "../form/form.module.css"

const Form = () => {

    const [state, setState] = useState({
        name: "",
        description: "",
        platforms: "",
        background_image: "",
        released: "",
        rating: "",
        genres: []
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(postUser(state))
    }
    const handleChange = (e) => {
        console.log(state);
        if(e.target.name === "genres"){
            setState({
                ...state,
                ...state.genres.push(e.target.value)
              })
        }else{
            setState({
                ...state,
                [e.target.name]:e.target.value
            })
        }
        }

        const borrarGenres = () => {
            setState({
                ...state,
                ...state.genres.pop()
              })
        }

    const genres = useSelector((state) => state.genres)

    const dispatch = useDispatch(

        useEffect(() => {
            dispatch(getGenres())
        }, []))

    //name, description, platforms, background_image, released, rating, genres

    return (
        <div className={style.content}>
            <form onSubmit={handleSubmit}>
                <div className={style.form}>
                    <div className={style.title}>
                        <p>CREAR VIDEOJUEGO</p>
                    </div>
                    <div className={style.ic2}>
                        <input placeholder="Nombre" type="text" className={style.input} id="name" name="name" onChange={handleChange}/>
                        <div className={style.cut}></div>
                        <label className={style.iLabel} for="Name">Nombre</label>
                    </div>

                    <div className={style.ic2}>
                        <textarea placeholder="Descripcion" type="text" className={style.input} id="description" name="description" onChange={handleChange}/>
                        <div className={style.cut}></div>
                        <label className={style.iLabel} for="description">Descripcion</label>
                    </div>
                    <div className={style.ic2}>
                        <input placeholder="Plataformas" type="text" className={style.input} id="platforms" name="platforms" onChange={handleChange}/>
                        <div className={style.cut}></div>
                        <label className={style.iLabel} for="platforms">Plataformas</label>
                    </div>
                    <div className={style.ic2}>
                        <input placeholder="Imagen URL" type="text" className={style.input} id="background_image" name="background_image" onChange={handleChange}/>
                        <div className={style.cut}></div>
                        <label className={style.iLabel} for="background_image">Imagen</label>
                    </div>
                    <div className={style.ic2}>
                        <input placeholder="Lanzamiento" type="date" className={style.input} id="released" name="released" onChange={handleChange}/>
                        <div className={style.cut}></div>
                        <label className={style.iLabel} for="released">Lanzamiento</label>
                    </div>
                    <div className={style.ic2}>
                        <input placeholder="Rating 1 - 5" type="number" min="1" max="5" className={style.input} id="rating" name="rating" onChange={handleChange}/>
                        <div className={style.cut}></div>
                        <label className={style.iLabel} for="rating">Rating</label>
                    </div>
                    <div className={style.ic1}>
                        <select name="genres" multiple className={style.input} id="genres" onChange={handleChange}>
                            {genres.map((gen) => <option value={gen} >{gen}</option>)}
                        </select>
                        <div className={style.cut}></div>
                        {state.genres.map((gen) => <p className={style.subtitle}> -{gen}- </p>)}
                        <label className={style.iLabel} for="genres">Genres</label>
                        <div onClick={borrarGenres} className={style.borrarGen}>Borrar Genres</div>
                    </div>
                    <button className={style.submit} type="submit">CREAR</button>
                </div>
            </form>
        </div>
    )
}

export default Form