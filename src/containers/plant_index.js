import React from "react";
import { Button } from 'semantic-ui-react'
import { Link } from "react-router-dom"
import { connect } from "react-redux";
import PlantCard from '../components/plant_card'

const PlantIndex = props => {
    return(
        <div>
            <h1>Add a plant!</h1>
            <div>{props.currentPlants.map(plant => (
                
                <PlantCard plant={plant}/>
                
            ))}</div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
      currentPlants: state.currentPlants
    }
}

export default connect(mapStateToProps)(PlantIndex);