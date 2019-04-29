import React from 'react'
import IMDBList from '../IMDBList';

class HomePage extends React.Component{

    state = {
        films: [
            {
            name:'Esaretin Bedeli',
            description:'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
            photo:'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg'
            },
            {
            name:'Baba',
            description:'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son',
            photo:'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,704,1000_AL_.jpg'
            },
            {
            name:'Kara Şovalye',
            description:'When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
            photo:'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg'
            },

    ]
    }

    render(){
        return(
            <div style={{paddingTop:10}}>
                <IMDBList films={this.state.films} />
            </div>
        )
    }
}

export default HomePage