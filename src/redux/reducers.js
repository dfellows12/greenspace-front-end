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

const notesReducer = (currentNotes = [], action) => {
    switch (action.type) {
        case "FETCH_NOTES":
            return action.payload
        case "DELETE_NOTE":
            return currentNotes.filter(note => note.id != action.payload.id)
        case "ADD_NOTE":
            if (currentNotes) {
            return [...currentNotes, action.payload]
            }
            else {
                return [action.payload]
            }
        default:
            return currentNotes
    }
}
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

const userPlantsReducer = (currentUserPlants = [], action) => {
    
    switch (action.type) {
        case "FETCH_USER_PLANTS":
            return action.payload
        case "DELETE_USER_PLANT":
            return currentUserPlants.filter(userplant => userplant.id != action.payload.id)
        case "ADD_USER_PLANT":
            if (currentUserPlants) {
            return [...currentUserPlants, action.payload]
            }
            else {
                return [action.payload]
            }
        default:
            return currentUserPlants
    }
}



const rootReducer = combineReducers({
    currentUser: userReducer,
    currentPlants: plantsReducer,
    currentUserPlants: userPlantsReducer,
    currentNotes: notesReducer
})

export default rootReducer