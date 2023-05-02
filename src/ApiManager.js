//LOCATION//
export const getLocation = () => {
    return fetch(`http://localhost:8088/locations?_expand=user`)
    .then(r => r.json())
}

export const createLocation = (locationObject) => {
    return fetch(`http://localhost:8088/locations`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(locationObject)
    })
    .then(r => r.json())
}

export const editLocation = (locationObject) => {
    return fetch(`http://localhost:8088/locations/${locationObject.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(locationObject)
    })
        .then(r => r.json())
}

export const getLocationById = (id) => {
    return fetch(`http://localhost:8088/locations/${id}`)
    .then(r => r.json())
}

export const deleteLocation = (id) => {
    return fetch(`http://localhost:8088/locations/${id}`, {
        method: "DELETE",
    })
}

//TASKS//
export const getTasks = () => {
    return fetch(`http://localhost:8088/tasks`)
    .then(r => r.json())
}