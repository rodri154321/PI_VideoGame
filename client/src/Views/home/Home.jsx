import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { filterGen, filterWhere, acOrder } from '../../redux/action'
import Cards from '../../Components/cards/Cards'
import style from "../home/Home.module.css"


const Home = () => {

  const item_per_page = 15;
  const games = useSelector((state) => state.gameFiltered)
  console.log(games);
  const genres = useSelector((state) => state.genres)
  const dispatch = useDispatch()
  const [items, setItems] = useState([...games].splice(0, item_per_page))
  const [currentPage, setCurrentPage] = useState(0)


  useEffect(() => {
    setItems([...games].splice(0, item_per_page))
  }, [games])

  const nextPage = () => {
    const next_page = currentPage + 1;
    const firstIndex = next_page * item_per_page;
    if (firstIndex >= games.length) return;
    setItems([...games].splice(firstIndex, item_per_page))
    setCurrentPage(next_page);
  };

  const prevPage = () => {
    const prev_page = currentPage - 1;
    const firstIndex = prev_page * item_per_page;
    if (firstIndex < 0) return;
    setItems([...games].splice(firstIndex, item_per_page))
    setCurrentPage(prev_page);
  };

  const handelFilterGen = (e) => {
    dispatch(filterGen(e.target.value));
    setCurrentPage(0);
  };
  const handelFilterWhere = (e) => {
    dispatch(filterWhere(e.target.value));
    setCurrentPage(0);
  };
  const handelOrder = (e) => {
    dispatch(acOrder(e.target.value));
    setCurrentPage(0);
  };

  return (
    <div>
      <div>

          <select onChange={handelFilterGen}>
            <option value="All">All</option>
            {genres.map((gen) => <option value={gen} >{gen}</option>)}
          </select>
        
          <select onChange={handelFilterWhere}>
            <option value="Todos">Todos</option>
            <option value="DB">Data Base</option>
            <option value="API">Api</option>
          </select>
        
        
        <select onChange={handelOrder}>
            <option value="def">Default</option>
            <option value="A">rating ↑ </option>
            <option value="D">rating ↓</option>
            <option value="alfA">A-Z</option>
            <option value="alfD">Z-A</option>
          </select>
        
      </div>
      <div className={style.contentCard}>
        <Cards games={items} />
      </div>
      <div>
        <button className={style.butt} onClick={prevPage}><span className={style.spanprev}>Prev</span></button> <button className={style.butt} onClick={nextPage}><span className={style.spannext}>Next</span></button>
      </div>
    </div>
  )
}

export default Home;