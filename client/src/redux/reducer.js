const initialState = {
    games: [],
    genres: [],
    platforms: [],
    gameID: [],
    gameFiltered: []
};
const reducer = (state = initialState, actions) => {

    switch (actions.type) {
        case 'GET_GAMES':
            return {
                ...state,
                games: actions.payload,
                gameFiltered: actions.payload
            }
        case 'GET_GENRE':
            return {
                ...state,
                genres: actions.payload
            }
        case 'GET_PLAT':
            return {
                ...state,
                platforms: actions.payload
            }
        case 'GET_GAMEID':
            return {
                ...state,
                gameID: actions.payload
            }
        case 'FILTER_GEN':
            const gamesfiltrados = state.games.filter(game => game.genres?.some(genre => genre.name === actions.payload) || game.Genres?.some(genre => genre.name === actions.payload));
            if (actions.payload === 'All') {
                return {
                    ...state,
                    gameFiltered: [...state.games]
                }
            }
            return {
                ...state,
                gameFiltered: gamesfiltrados

            }

        case 'FILTER_WH':
            if (actions.payload === 'Todos') {
                return {
                    ...state,
                    gameFiltered: [...state.games]
                }
            }
            if (actions.payload === 'DB') {
                const DB = state.games.filter(games => isNaN(games.id))
                return {
                    ...state,
                    gameFiltered: DB
                }
            } else {
                const api = state.games.filter(games => !isNaN(games.id))
                return {
                    ...state,
                    gameFiltered: api
                }
            }

        case 'AC_ORDER':
            console.log(actions.payload);
            if(actions.payload === "A"){
                const asc = state.games.sort((a, b) => { return a.rating - b.rating })
                return {
                    ...state,
                    gameFiltered: asc
                }
            }
            if(actions.payload === "D"){
                const des = state.games.sort((a, b) => { return b.rating - a.rating })
                return {
                    ...state,
                    gameFiltered: des
                }
            }
            if(actions.payload === "alfA"){
                const alfasc = state.games.sort((a, b) =>a.name.localeCompare(b.name))
                return {
                    ...state,
                    gameFiltered: alfasc
                }
            }
            if(actions.payload === "alfD"){
                const alfdes = state.games.sort((a, b) => b.name.localeCompare(a.name))
                console.log(alfdes);
                return {
                    ...state,
                    gameFiltered: alfdes
                }
            }else{
                return {
                    ...state,
                    gameFiltered: [...state.games]
                }
            }

        case 'GET_GAMENAME':
            return {
                ...state,
                gameFiltered: actions.payload
            }

        default: return { ...state }
    }

};

export default reducer;