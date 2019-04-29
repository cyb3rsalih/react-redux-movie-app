import React from 'react'
import PropTypes from 'prop-types'
import { Grid ,Card } from 'semantic-ui-react'

const IMDBList = ({films}) => {

// films
    return(
        <div>
            <Grid stackable columns={2}> 
                { films.map( (film,key) => 
                    <Grid.Column key={key}>
                        <Card>
                        <Card image={film.photo} header={film.name} extra={film.description} />
                        </Card>
                    </Grid.Column> 
                
                 )}
            </Grid>
        </div>
    )
}


IMDBList.propTypes = {
    films: PropTypes.array.isRequired,
}
export default IMDBList