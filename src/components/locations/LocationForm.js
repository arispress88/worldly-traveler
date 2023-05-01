//THIS MODULE IS FOR THE USER TO FILL OUT THE LOCATION IN WHICH THEY ARE TRAVELING TO//

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createLocation } from "../../ApiManager";
import Button from "react-bootstrap/Button";

export const LocationForm = () => {
    const [location, update] = useState({
        city: "",
        country: "",
        date: ""
    })
    
    const navigate = useNavigate()

    const localUser = localStorage.getItem("worldly_user")
    const userObject = JSON.parse(localUser)

    const handleSaveButtonClick = (event) => {
        event.preventDefault()
        console.log("You clicked the button!")

        const infoToSendToAPI = {
            userId: userObject.id,
            city: location.city,
            country: location.country,
            date: new Date().toISOString()
        }

        return createLocation(infoToSendToAPI)
        .then(() => {
            navigate("/")
        })
    }

    return (
        <form className="locationForm">
            <h2 className="locationForm--title">Add your location!</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="City"
                        value={location.city}
                        onChange={
                            (evt) => {
                                const copy = {...location}
                                copy.city = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="country">Country</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Country"
                        value={location.country}
                        onChange={
                            (evt) => {
                                const copy = {...location}
                                copy.country = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>

            <Button variant="primary" type="submit"
                onClick={(event) => {handleSaveButtonClick(event)}}>
                    Submit
                </Button>
        </form>
    )
}