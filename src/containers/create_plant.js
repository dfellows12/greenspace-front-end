import React from "react";
import { Dropdown, Form } from 'semantic-ui-react'
import { Link } from "react-router-dom"
import { connect } from "react-redux";

const CreatePlant = props => {
    return(
        <div>
            <h1>Create a plant!</h1>
            <Form>
                <Form.Field>
                    <label>Name</label>
                    <input placeholder="" />
                </Form.Field>
                <Form.Field>
                    <label>Scientific name</label>
                    <input placeholder="" />
                </Form.Field>
                <Form.Field>
                    <label>Water schedule</label>
                    <input placeholder="" />
                </Form.Field>
                <Form.Field>
                    <label>Fertilizer schedule</label>
                    <input placeholder="" />
                </Form.Field>
                <Form.Field label='Plant info' control='textarea' />
                <Form.Field label='Category' control='select'>
                    <option value='flowering'>Flowering</option>
                    <option value='foliage'>Foliage</option>
                    <option value='succulent and cacti'>Succulent and Cacti</option>
                </Form.Field>
            </Form>
        </div>
    )
}

export default CreatePlant