import React from "react";
import { Card, Button, Modal, Icon } from 'semantic-ui-react'
import { addingUserPlant } from '../redux/actions/user_plant_actions'
import { connect } from "react-redux";

const PlantCard = props => {
    return(
        <div>
            <Card className="plant-card">
                <Card.Content>
                    <img className="plant-image" src={props.plant.image_url} alt="plant"/>
                    <div className="divider"></div>
                    <h2>{props.plant.name}</h2>
                        <p className='sci-name'>{props.plant.scientific_name}</p>
                        <div className="info-modal"><Modal trigger={<Icon className="card-icon" link name="info" size="large"/>}>
                      <Modal.Header>Plant information</Modal.Header>
                      <Modal.Content>
                        <p>{props.plant.info}</p>
                      </Modal.Content>
                    </Modal>
                    </div>
                </Card.Content>
            
                <Button onClick={() => {
                    props.addUserPlant(props.plant, props.currentUser.id)
                    alert("Plant added to your GreenSpace!")
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


