function loginUser(info){
    return {type: "LOGIN_USER", payload: info}
}

function logUserOut(info){
    return {type: "LOGOUT_USER"}
}

function createUser(info){
    return {type: "CREATE_USER", payload: info}
}

function creatingUser(info) {
    return (dispatch) => {
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'Accept' : 'application/json'
            },
            body: JSON.stringify({
            "name" : `${info.name}`,
            "password" : `${info.password}`,
            "email": `${info.email}`,
            "phone_number": `${info.phone_number}`
            })
        })
    .then(resp => resp.json())
    .then(user => {
        dispatch(createUser(user))})
    }
}

function loggingUser(info){
    return (dispatch) => {
    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept' : 'application/json'
        },
        body: JSON.stringify({
            "name" : `${info.name}`,
            "password" : `${info.password}`,
        })
      })
    .then(resp => resp.json())
    .then(resp => {
        debugger
        if (resp.message === "User/Password not found") {
            alert("Username/Password invalid")
        }
        else {  
            dispatch(loginUser(resp))
        }
    })
    }
}

export {loggingUser, logUserOut, creatingUser}