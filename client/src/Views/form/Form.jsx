import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { postUser } from '../../redux/action'
import style from "../form/form.module.css"

const Form = () => {

    const dispatch = useDispatch()

    const [state, setState] = useState({
        name: "",
        description: "",
        platforms: [],
        background_image: "",
        released: "",
        rating: "",
        genres: []
    })

    const [errors, setErrors] = useState({
        name: "Nombre obligatorio",
        description: "Descripcion requerida",
        platforms: "ingrese al menos una plataforma",
        background_image: "imagen requerida",
        released: "ingrese fecha",
        rating: "",
        genres: "ingrese al menos un genero"
    })

    const validate = (input, name) => {
        console.log(name)
        if (name === "name") {
            if (input.name !== "") setErrors({ ...errors, name: "" })
            else setErrors({ ...errors, name: "Nombre requerido" })
            return;
        }
        if (name === "description") {
            if (input.description !== "") setErrors({ ...errors, description: "" })
            else setErrors({ ...errors, description: "Descripcion requerida" })
            return;
        }
        if (name === "background_image") {
            if (input.background_image !== "") setErrors({ ...errors, background_image: "" })
            else setErrors({ ...errors, background_image: "imagen requerida" })
            return;
        }
        if (name === 'released') {
            const regex = /\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])*/g
            if (regex.test(input.released)) setErrors({ ...errors, released: "" })
            else setErrors({ ...errors, released: "Fecha de Lanzamiento tiene un formato erroneo" })
        }
        if (name === 'rating') {
            if (input.rating > 5) setErrors({ ...errors, rating: "debe ser menor o igual que 5" })
            else if (input.rating < 1) setErrors({ ...errors, rating: "debe ser mayor o igual que 1" })
            else setErrors({ ...errors, rating: "" })
        }
        if (name === "platforms") {
            if (input.platforms !== []) setErrors({ ...errors, platforms: "" })
            else setErrors({ ...errors, platforms: "ingrese al menos una plataforma" })
            return;
        }
        if (name === "genres") {
            if (input.genres !== []) setErrors({ ...errors, genres: "" })
            else setErrors({ ...errors, genres: "ingrese al menos un genero" })
            return;
        }
    }

    const disable = () => {
        let disabled = true;
        for (let error in errors) {
            if (errors[error] === "") disabled = false;
            else {
                disabled = true;
                break;
            }
        }
        return disabled;
    }

    const handleSubmit = (e) => {

        dispatch(postUser(state))
    }
    const handleChange = (e) => {
        console.log(state);
        if (e.target.name === "genres") {
            setState({
                ...state,
                ...state.genres.push(e.target.value)
            })
        } else if (e.target.name === "platforms") {
            setState({
                ...state,
                ...state.platforms.push(e.target.value)
            })
        } else {
            setState({
                ...state,
                [e.target.name]: e.target.value
            })
        }
        validate({
            ...state,
            [e.target.name]: e.target.value
        }, e.target.name)
    }

    const borrarGenres = () => {
        setState({
            ...state,
            ...state.genres.pop()
        })
    }

    const borrarPlatforms = () => {
        setState({
            ...state,
            ...state.platforms.pop()
        })
    }

    const genres = useSelector((state) => state.genres)
    const platforms = useSelector((state) => state.platforms)



    //name, description, platforms, background_image, released, rating, genres

    return (
        <div className={style.content}>
            <form onSubmit={handleSubmit}>
                <div className={style.form}>
                    <div className={style.title}>
                        <p>CREAR VIDEOJUEGO</p>
                    </div>
                    <div className={style.ic2}>
                        <input placeholder="Nombre" type="text" className={style.input} id="name" name="name" onChange={handleChange} />
                        <div className={style.cut}></div>
                        <label className={style.iLabel} for="Name">Nombre</label>
                        <span className={style.errors}>{errors.name}</span>
                    </div>

                    <div className={style.ic2}>
                        <textarea placeholder="Descripcion" type="text" className={style.input} id="description" name="description" onChange={handleChange} />
                        <div className={style.cut}></div>
                        <label className={style.iLabel} for="description">Descripcion</label>
                        <span className={style.errors}>{errors.description}</span>
                    </div>
                    <div className={style.ic1}>
                        <input placeholder="Imagen URL" type="text" className={style.input} id="background_image" name="background_image" onChange={handleChange} />
                        <div className={style.cut}></div>
                        <label className={style.iLabel} for="background_image">Imagen</label>
                        <span className={style.errors}>{errors.background_image}</span>
                        {state.background_image !== '' ?
                        <div className={style.img}>
                            <img className={style.imagen} src={state.background_image} alt="imagen juego" />
                        </div> : ""}
                    </div>
                    <div className={style.ic2}>
                        <input placeholder="Lanzamiento" type="date" className={style.input} id="released" name="released" onChange={handleChange} />
                        <div className={style.cut}></div>
                        <label className={style.iLabel} for="released">Lanzamiento</label>
                        <span className={style.errors}>{errors.released}</span>
                    </div>
                    <div className={style.ic2}>
                        <input placeholder="Rating 1 - 5" type="number" step="0.1" min="1" max="5" className={style.input} id="rating" name="rating" onChange={handleChange} />
                        <div className={style.cut}></div>
                        <label className={style.iLabel} for="rating">Rating</label>
                        <span className={style.errors}>{errors.rating}</span>
                    </div>
                    <div className={style.ic1}>

                        <select name="platforms" multiple className={style.input} id="platforms" onChange={handleChange}>
                            {platforms.map((pla) => <option value={pla} >{pla}</option>)}
                        </select>
                        <div className={style.cut}></div>
                        {state.platforms.map((pla) => <p className={style.subtitle}> -{pla}- </p>)}
                        <label className={style.iLabel} for="plaplatforms">Platforms</label>
                        <span className={style.errors}>{errors.platforms}</span>
                        <div onClick={borrarPlatforms} className={style.borrarGen}>Borrar Platforms</div>
                    </div>

                    <div className={style.ic1}>
                        <select name="genres" multiple className={style.input} id="genres" onChange={handleChange}>
                            {genres.map((gen) => <option value={gen} >{gen}</option>)}
                        </select>
                        <div className={style.cut}></div>
                        {state.genres.map((gen) => <p className={style.subtitle}> -{gen}- </p>)}
                        <label className={style.iLabel} for="genres">Genres</label>
                        <span className={style.errors}>{errors.genres}</span>
                        <div onClick={borrarGenres} className={style.borrarGen}>Borrar Genres</div>
                    </div>
                    <button className={style.submit} type="submit" disabled={disable()}>CREAR</button>
                </div>
            </form>
        </div>
    )
}

export default Form