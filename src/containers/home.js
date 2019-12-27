import React, {Component} from 'react'
import UserPlantCard from '../components/user_plant_card'
import { connect } from 'react-redux'

const UserPlantIndex = props => {
    return(
        <div>
            <h1>Your Greenspace</h1>
                <div className="card-container">{props.currentUserPlants.map(user_plant => (
                    user_plant.user_id === props.currentUser.id ? <UserPlantCard user_plant={user_plant}/> : null
                ))}</div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
      currentUserPlants: state.currentUserPlants,
      currentUser: state.currentUser
    }
}

export default connect(mapStateToProps)(UserPlantIndex);

