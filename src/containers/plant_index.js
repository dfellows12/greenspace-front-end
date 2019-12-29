import React from "react";
import { connect } from "react-redux";
import PlantCard from '../components/plant_card'
import { Input } from 'semantic-ui-react'
import { changeIndexSearchText } from "../redux/actions/search_actions"

const PlantIndex = props => {
    return(
        <div>
            <h1 className="index-title">Add a plant</h1>
            <div className="searchbar">
                <Input
                onChange={e => props.onChange(e.target.value)}
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
      currentPlants: state.currentPlants,
      searchText: state.searchIndexText
    }
}

const mapDispatchToProps = dispatch => {
    return {
      onChange: (searchText) => {dispatch(changeIndexSearchText(searchText))}
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(PlantIndex);