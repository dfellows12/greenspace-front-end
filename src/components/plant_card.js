import React from "react";
import { Card, Image, Icon, Button } from 'semantic-ui-react'
import { addingUserPlant } from '../redux/actions'
import { Link } from "react-router-dom"
import { connect } from "react-redux";

const PlantCard = props => {
    return(
        <div>
            <Card>
                <Image src={props.plant.image_url} wrapped ui={false} />
                <Card.Content>
                    <Card.Header>{props.plant.name}</Card.Header>
                    <Card.Meta>
                        <span className='date'>{props.plant.scientific_name}</span>
                    </Card.Meta>
                    <Card.Description>
                        {props.plant.info}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <Icon name='user' />
                        22 Friends
                    </a>
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


