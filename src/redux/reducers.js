import { combineReducers } from "redux";


const userLoginReducer = (state = null, action) => {
    switch (action.type) {
        case "LOGIN_USER":
            return action.payload;
        case "CREATE_USER":
            return action.payload; 
        default:
            return state;
    }
};

const plantsReducer = (state = [], action) => {
    switch (action.type) {
        case "FETCH_PLANTS":
            return action.payload
        default:
            return state
    }
}



const rootReducer = combineReducers({
    currentUser: userLoginReducer,
    currentPlants: plantsReducer
})

export default rootReducer