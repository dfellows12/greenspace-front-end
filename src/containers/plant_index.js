import React from "react";
import { connect } from "react-redux";
import PlantCard from '../components/plant_card'
import { Input } from 'semantic-ui-react'

const PlantIndex = props => {
    return(
        <div>
            <h1>Add a plant</h1>
            <div className="searchbar">
                <Input
                action={{ type: 'submit', content: 'Go' }}
                placeholder='Search plants...'
            />
            </div>
            <div className="card-container">{props.currentPlants.map(plant => (
                <PlantCard id={plant.id} plant={plant}/>           
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