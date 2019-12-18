import React, {Component} from 'react'
import UserPlantCard from '../components/user_plant_card'
import { connect } from 'react-redux'

const UserPlantIndex = props => {
    return(
        <div>
            <h1>Your Greenspace</h1>
                <div className="card-container">{props.currentUserPlants.map(user_plant => ( 
                    <UserPlantCard user_plant={user_plant}/>
                ))}</div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
      currentUserPlants: state.currentUserPlants
    }
}

export default connect(mapStateToProps)(UserPlantIndex);

