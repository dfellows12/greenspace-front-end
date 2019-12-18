import React from "react";
import { Card, Image, Icon, Button } from 'semantic-ui-react'
import { addingUserPlant } from '../redux/actions/user_plant_actions'
import { Link } from "react-router-dom"
import { connect } from "react-redux";

const PlantCard = props => {
    return(
        <div>
            <Card className="plant-card">
                {/* <Image id="plant-image" src={props.plant.image_url} wrapped ui={false} /> */}
                <Card.Content>
                    <img className="plant-image" src={props.plant.image_url}/>
                    <div class="divider"></div>
                    <h2>{props.plant.name}</h2>
                    <Card.Meta>
                        <span className='date'>{props.plant.scientific_name}</span>
                    </Card.Meta>
                    <Card.Description>
                        
                    </Card.Description>
                </Card.Content>
                <Button onClick={() => {
                    props.addUserPlant(props.plant, props.currentUser.id)
                }}>Add plant</Button>
            </Card>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addUserPlant: (plantInfo, userId) => {dispatch(addingUserPlant(plantInfo, userId))}
})

const mapStateToProps = state => ({
    currentUser: state.currentUser
})

export default connect(mapStateToProps, mapDispatchToProps)(PlantCard)


