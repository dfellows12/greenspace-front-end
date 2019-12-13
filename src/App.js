import React from 'react';
import {Route, Switch} from "react-router-dom";
import Navbar from "./components/navbar";
import Login from "./containers/login"
import Home from "./containers/home"
import CreateUser from "./components/create_user"
import About from "./containers/about"
import PlantIndex from "./containers/plant_index"
import CreatePlant from "./containers/create_plant"
import { connect } from "react-redux";
import { fetchingPlants, fetchingUserPlants } from './redux/actions.js';
import './App.css';

class App extends React.Component {

  componentDidMount() {
    this.props.fetchingPlants()
    // this.props.fetchingUserPlants()
  }

  render() {
    return (
      <div className="App">
        {this.props.currentUser ? <Navbar/> : null}
        <Switch>
          <Route exact path="/login" component={Login}/>
          <Route path="/users/create" component={CreateUser}/>
          <Route path="/about" component ={About}/>
          <Route path="/plants" component={PlantIndex}/>
          <Route path="/plants/create" component={CreatePlant}/>
          <Route path="/" component= {this.props.currentUser ? Home : Login}/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  };
};

const mapDispatchToProps = (dispatch) => ({
    fetchingPlants: () => dispatch(fetchingPlants()),
    // fetchingUserPlants: () => dispatch(fetchingUserPlants())
})


export default connect(mapStateToProps, mapDispatchToProps)(App)
