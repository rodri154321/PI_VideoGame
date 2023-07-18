import React from 'react'
import { NavLink } from 'react-router-dom';
import { useDispatch} from "react-redux"
import { buscarName } from '../../redux/action'
import style from "./navBar.module.css";





const NavBar = () => {
  const dispatch = useDispatch()

  const handleChange = (e) => {
    dispatch(buscarName(e.target.value))
  }

  return (
    <div className={style.contenedor}>
      <div className={style.acomodar}>
        <NavLink to='/home' className={style.link}>
          <div><img className={style.logo} src="https://i.ibb.co/Jvdyv94/setam.png" alt="setam.logo" /></div>
        </NavLink>
        <NavLink to='/home' className={style.link}>
          <button className={style.btn}>HOME</button>
        </NavLink>
        <input placeholder="Buscar por nombre" type="text"   name="name" onChange={handleChange}/>
        <NavLink to='/create' className={style.link}>
          <button className={style.btn}>CREATE</button>
        </NavLink>
      </div>
    </div>


  )
}

export default NavBar