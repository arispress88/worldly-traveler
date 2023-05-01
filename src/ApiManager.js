export const getLocation = () => {
    return fetch(`http://localhost:8088/locations`)
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