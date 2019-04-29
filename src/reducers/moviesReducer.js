import { 
    FETCH_MOVIES_PENDING,
    FETCH_MOVIES_FULFILLED,
    FETCH_MOVIES_REJECTED,

    DELETE_MOVIE_PENDING,
    DELETE_MOVIE_FULFILLED,
    DELETE_MOVIE_REJECTED,

    } from '../actions/movies';
const initialState = {
    fetching:false,
    done:false,
    fetched:false,
    movieList: [],
    error : {}
}

export default (state= initialState, action) => {
    switch(action.type){
        case FETCH_MOVIES_PENDING:
        return {
            ...state,
            fetching:true
        }
        case FETCH_MOVIES_FULFILLED:
        return {
            ...state,
            movieList: action.payload,
            fetching:false,
            fetched:true,
        }
        case FETCH_MOVIES_REJECTED:
        return {
            ...state,
            error:action.payload,
            fetching:false,
            fetched:false,
        }
        // DELETE Movie

        case DELETE_MOVIE_PENDING:
        return {
            ...state,
          
        }
        case DELETE_MOVIE_FULFILLED:
        return {
            ...state,
            movieList: state.movieList.filter(m => m._id !== action.payload._id),
        }
        case DELETE_MOVIE_REJECTED:
        return {
            ...state,
            error:action.payload,
        }
        
        default:  
         return state
    }

  
}