import React from "react";
import { Card, Image, Icon, Button } from 'semantic-ui-react'
import { Link } from "react-router-dom"
import { connect } from "react-redux";
import { deletingUserPlant } from '../redux/actions/user_plant_actions'

const UserPlantCard = props => {
    return(
        <div>
            <Card>
                <Image src={props.user_plant.image_url} wrapped ui={false} />
                <Card.Content>
                    <Card.Header>{props.user_plant.name}</Card.Header>
                    <Card.Meta>
                        <span className='date'>{props.user_plant.scientific_name}</span>
                    </Card.Meta>
                    <Card.Description>
                        {props.user_plant.info}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <Icon name='user' />
                        22 Friends
                    </a>
                </Card.Content>
                <Button onClick={() => {
                    props.deleteUserPlant(props.user_plant)
                }}>Remove plant</Button>
            </Card>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    deleteUserPlant: (userPlantInfo) => {dispatch(deletingUserPlant(userPlantInfo))}
})

export default connect(null, mapDispatchToProps)(UserPlantCard)


