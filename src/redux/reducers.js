import { combineReducers } from "redux";


const userReducer = (state = null, action) => {
    switch (action.type) {
        case "LOGIN_USER":
            return action.payload;
        case "CREATE_USER":
            return action.payload;
        case "LOGOUT_USER":
            return null
        default:
            return state;
    }
};


const plantsReducer = (state = [], action) => {
    switch (action.type) {
        case "FETCH_PLANTS":
            return action.payload
        case "CREATE_PLANT":
            return state
        default:
            return state
    }
}

const userPlantsReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_USER_PLANT":
            if (state.length > 0) {
            return {
                ...state,
                currentUserPlants: [...state.currentUserPlants, action.payload]
            }}
            else {
                return {
                    ...state,
                    currentUserPlants: [action.payload]
                }
            }
        default:
            return state
    }
}



const rootReducer = combineReducers({
    currentUser: userReducer,
    currentPlants: plantsReducer,
    currentUserPlants: userPlantsReducer
})

export default rootReducer