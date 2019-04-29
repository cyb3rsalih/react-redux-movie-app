import React from 'react'
import PropTypes from 'prop-types'
import MovieCard from './MovieCard'
import {Grid} from 'semantic-ui-react'
import { HashLoader } from 'react-spinners';

const MoviesList = props => {
    const emptyMessage = (
        <p>There are no movies yet.</p>
    )

    const moviesList = (
        <div>
        <HashLoader
          color={'#36BEB2'}
          loading={props.myState.fetching}
        />
            { props.myState.error.response 
                ? <h3>Error retrieve data</h3> 
                :   <Grid stackable columns={3}> 
                       { props.myState.movieList.map(movie => 
                            <MovieCard 
                                key={movie._id}
                                deleteMovie={props.deleteMovie}
                                movie={movie} /> 
                        )}
                    </Grid> 
                
                }
        </div>
    )
    return(
        <div>
            {props.myState.movieList.length === 0 ?  emptyMessage : moviesList}
        </div>
    )
}

MoviesList.propTypes = {
    myState: PropTypes.shape({
        movieList: PropTypes.array.isRequired,
    }).isRequired
}

export default MoviesList