import axios from "axios";


export function getGames(){
    return async function(dispatch){
        try {
            const responce = (await axios.get("http://localhost:3001/videogames/")).data;
            dispatch({
                type:'GET_GAMES',
                payload: responce
            })
        } catch (error) {
            console.log(error);
            alert(error.responce.data.error);
        }
    }
};

 export function getGenres(){
     return async function(dispatch){
         try {
             const responce = (await axios.get("http://localhost:3001/genres/")).data;
             dispatch({
                type:'GET_GENRE',
                payload: responce
            })
         } catch (error) {
             console.log(error);
             alert(error.responce.data.error);
         }
     }
 };

 export function postUser(info) {
    return async function (dispatch) {
        try {
            const response = await axios.post("http://localhost:3001/videogames/", info)
            alert("GAME creado exitosamente")
        } catch (error) {
            console.log(error)
            alert(error.response.data.error)
        }
    }
}

export function getGameId(id) {
    return async function (dispatch) {
        try {
            const responce = (await axios.get(`http://localhost:3001/videogames/${id}`)).data;
            dispatch({
                type:'GET_GAMEID',
                payload: responce
            })
        } catch (error) {
            console.log(error)
            alert(error.response.data.error)
        }
    }
}