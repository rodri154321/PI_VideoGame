import React from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import { useDispatch } from "react-redux"
import { buscarName } from '../../redux/action'
import style from "./navBar.module.css";


const NavBar = () => {

  const { pathname } = useLocation();
  const dispatch = useDispatch()


  const handleChange = (e) => {
    dispatch(buscarName(e.target.value))
  }
  const pregunta = () => {
    if (pathname === '/home') return false;
    else return true;
  }
 

  return (
    <div className={style.contenedor}>
      <div className={style.acomodar}>
        <NavLink to='/home' className={style.link}>
          <div><img className={style.logo} src="https://i.ibb.co/Jvdyv94/setam.png" alt="setam.logo" /></div>
        </NavLink>
        <NavLink to='/home' className={style.link}>
          <button className={style.button} data-text="Awesome">
            <span className={style.actualtext}>&nbsp;HOME&nbsp;</span>
            <span aria-hidden="true" className={style.hovertext}>&nbsp;HOME&nbsp;</span>
          </button>
        </NavLink>
        <input className={style.input} disabled={pregunta()} placeholder="Buscar por nombre" type="text" name="name" onChange={handleChange} />
        <NavLink to='/create' className={style.link}>
          <button className={style.button} data-text="Awesome">
            <span className={style.actualtext}>&nbsp;CREAR&nbsp;</span>
            <span aria-hidden="true" className={style.hovertext}>&nbsp;CREAR&nbsp;</span>
          </button>
        </NavLink>
      </div>
    </div>


  )
}

export default NavBar