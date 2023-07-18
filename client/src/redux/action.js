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
            
             alert(error.responce.data.error);
         }
     }
 };

 export function getplatform(){
    return async function(dispatch){
        try {
            const responce = (await axios.get('https://api.rawg.io/api/platforms?key=1fac7a7cc26f48879b5b16a42583f478')).data.results;
            const res = responce.map(r => r.name)
            dispatch({
               type:'GET_PLAT',
               payload: res
           })
        } catch (error) {
           
            alert(error.responce.data.error);
        }
    }
};


 export function postUser(info) {
    return async function (dispatch) {
        try {
            await axios.post("http://localhost:3001/videogames/", info)
            alert("GAME creado exitosamente")
        } catch (error) {
            
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
            alert(error.response.data.error)
        }
    }
}

export function filterGen(gen) {
    return async function (dispatch) {
        try {
             dispatch({
                type:'FILTER_GEN',
                payload: gen
            })
        } catch (error) {
            
            alert(error.response.data.error)
        }
    }
}

export function filterWhere(data) {
    return async function (dispatch) {
        try {
            dispatch({
                type:'FILTER_WH',
                payload: data
            })
        } catch (error) {
            
            alert(error.response.data.error)
        }
    }
}

export function acOrder(data) {
    return async function (dispatch) {
        try {
            dispatch({
                type:'AC_ORDER',
                payload: data
            })
        } catch (error) {
            
            alert(error.response.data.error)
        }
    }
}

export function buscarName(name) {
    return async function (dispatch) {
        try {
            const responce = (await axios.get(`http://localhost:3001/videogames/?name=${name}`)).data;
            dispatch({
                type:'GET_GAMENAME',
                payload: responce
            })
        } catch (error) {
            alert(error.response.data.error)
        }
    }
}


