import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import MoviesList from './../MoviesList'
import { fetchMovies, deleteMovie } from './../../actions/movies'; 
class MoviesPage extends React.Component{

    static propTypes = {
        myState: PropTypes.object.isRequired,
        deleteMovie: PropTypes.func.isRequired
    }
    
    componentDidMount(){
        this.props.fetchMovies()
        //this.props.dispatch( fetchMovies() )
        // state.movieList has been there
    }

    render(){
        return(
            <div>
                <h2>Movies</h2>
                <MoviesList 
                    deleteMovie={this.props.deleteMovie}
                    myState={this.props.myState}/>
            </div>
        )
    }


}

const mapStateToProps = state => {
    const myState = state.movies
    return {
       myState // we can use it with props.movieList
    }
}

const mapDispatchToProps = {
    fetchMovies,
    deleteMovie
}

export default connect(mapStateToProps,mapDispatchToProps)(MoviesPage)