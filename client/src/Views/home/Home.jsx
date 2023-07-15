import React from 'react'
import { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { getGames } from '../../redux/action'
import Cards from '../../Components/cards/Cards'



const Home = () => {

  const games = useSelector((state)=> state.games)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getGames())
  },[])

  return (
    <div>
    <Cards games={games} />
    </div>
  )
}

export default Home;