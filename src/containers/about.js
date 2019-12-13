import React from "react";
import ExampleCards from "./example_cards"
import AboutContent from '../components/about_content'
import { Button } from 'semantic-ui-react'
import { Link } from "react-router-dom"



const About = props => {
    return(
        <div className="bg-style">
            <div className="about-container">
                <div className="item item-1">hi</div>
                <div className="item item-2">hi</div>
                <div className="item item-3">hi</div>
            </div>
            <AboutContent />
            <ExampleCards />
            <div>
    <Link to="/plants"><Button primary>Add Plant</Button></Link>
    <Link to="/plants/create"><Button secondary>Create Plant</Button></Link>
  </div>
        </div>
    )
}



export default About