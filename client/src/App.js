import './App.css';
import {Routes, Route, useLocation} from 'react-router-dom';
import Home from "./Views/home/Home";
import Landing from "./Views/landing/Landing";
import NavBar from "./Components/navbar/NavBar";
import Form from "./Views/form/Form";
import Detail from './Views/detail/Detail';
import { useEffect} from 'react'
import { useDispatch } from "react-redux"
import { getGames, getGenres,getplatform} from "./redux/action"

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getGames())
    dispatch(getGenres())
    dispatch(getplatform())
  }, [])
  
  const {pathname} = useLocation();


  return (
    <div className="App">
      {pathname !== '/' ? <NavBar/> : ""}
     <Routes>
            <Route path='/' element={<Landing/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/create' element={<Form/>} />
            <Route path='/detail/:id' element={<Detail/>}/>
         </Routes>
    </div>
  );
}

export default App;
