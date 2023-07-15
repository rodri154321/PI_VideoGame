import React from 'react'
import { NavLink } from 'react-router-dom';
import style from "./navBar.module.css";


const NavBar = () => {
  return (
    <div className={style.contenedor}>
      <div className={style.acomodar}>
        <NavLink to='/home' className={style.link}>
          <div><img className={style.logo} src="https://i.ibb.co/Jvdyv94/setam.png" alt="setam.logo" /></div>
        </NavLink>
        <NavLink to='/home' className={style.link}>
          <p className={style.texto}>HOME</p>
        </NavLink>
        <NavLink to='/create' className={style.link}>
          <p className={style.texto}>CREATE</p>
        </NavLink>
        <NavLink to='/about' className={style.link}>
          <p className={style.texto}>hola</p>
        </NavLink>
      </div>
    </div>


  )
}

export default NavBar