import React from 'react'
import { NavLink } from 'react-router-dom';
import style from "./Landing.module.css"


const Landing = () => {

  

  return (
    <div className={style.contenedor}>
      <div className={style.card}>
        <div className={style.img}>
          <img className={style.imagen} src="https://i.ibb.co/Csj2LVj/steam-logo-steam-icon-free-free-vector.png" alt="setam-logo" />
        </div>
        <span className={style.pan}>Pi Videogames</span>
        <p className={style.info}>Rodrigo Amaya</p>
        {<NavLink to='/home' className={style.link}>
          <button className={style.boton}>GO</button>
        </NavLink>}
      </div>
    </div>
  )
}
export default Landing;