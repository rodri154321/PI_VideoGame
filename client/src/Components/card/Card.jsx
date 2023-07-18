import React from 'react'
import style from "./card.module.css"
import { Link } from 'react-router-dom'

const Card = ({ name, genres, image,id, Genres }) => {

  return (
    <div className={style.content}>
      <Link to={`/detail/${id}`} className={style.link}>
      <div className={style.card}>
        <div className={style.card__img}>
          <img className={style.card__img} src={image} alt='' />
        </div>
        <div className={style.card__descrwrapper}>
        <p className={style.card__title}>{name}</p>
        <p className={style.card__descr}>{isNaN(id) ? Genres?.map(gen => gen.name + " ") : genres?.map(gen => gen.name + " ")}</p>
        </div>
      </div>
      </Link>
    </div>
  )
}

export default Card