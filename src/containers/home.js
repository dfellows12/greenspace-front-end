import React from 'react'
import UserPlantCard from '../components/user_plant_card'
import { connect } from 'react-redux'
import { Input } from 'semantic-ui-react'
import { changeHomeSearchText } from "../redux/actions/search_actions"

const UserPlantIndex = props => {

    function sortUserPlants() {
        let finalArray = []
        let dateHash = {}
        let latest_date = null
        let last_watering = null
        let last_fertilizing = null
        props.currentUserPlants.map(user_plant => {
            if (user_plant.user_id === props.currentUser.id) {
                if (user_plant.waterings.slice(-1)[0]) {
                    last_watering = Date.parse(user_plant.waterings.slice(-1)[0].schedule) }
                if (user_plant.fertilizings.slice(-1)[0]) {
                    last_fertilizing = Date.parse(user_plant.waterings.slice(-1)[0].schedule) }
                if (last_watering > last_fertilizing) {
                    latest_date = last_watering}
                else {latest_date = last_fertilizing}
                latest_date = latest_date.toString()
                dateHash[latest_date] = user_plant
            }
            
        })
       
        let sortedKeys = Object.keys(dateHash).sort(function(a, b) {
            return a - b
        })
        sortedKeys.map(key => finalArray.push(dateHash[key]))
        return finalArray
    }

    return(
        <div>
            <h1>Your Greenspace</h1>
            <div className="searchbar">
                <Input
                value={props.value}
                onChange={e => props.onChange(e.target.value)}
                action={{ type: 'submit', content: 'Go' }}
                placeholder='Search plants...'
            />
            </div>
                <div className="card-container">{sortUserPlants().map(userPlant => <UserPlantCard user_plant={userPlant}/>)}</div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
      currentUserPlants: state.currentUserPlants,
      currentUser: state.currentUser,
      searchText: state.searchHomeText
    }
}

const mapDispatchToProps = dispatch => {
    return {
      onChange: (searchText) => {dispatch(changeHomeSearchText(searchText))}
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(UserPlantIndex);

