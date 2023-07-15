const initialState = {
    games: [],
    genres: [],
    gameID: [],
};

const reducer = (state = initialState, actions) => {

    switch (actions.type) {
        case 'GET_GAMES':
            return {
                ...state,
                games: actions.payload
            }
        case 'GET_GENRE':
            return {
                ...state,
                genres: actions.payload
            }
        case 'GET_GAMEID':
            return {
                ...state,
                gameID: actions.payload
            }

        default: return { ...state }
    }

};

export default reducer;