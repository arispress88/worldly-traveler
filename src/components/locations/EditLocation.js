//THIS MODULE IS FOR EDITING THE LOCATION POST//

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editLocation, getLocationById } from "../../ApiManager";
import { Button } from "react-bootstrap";

export const EditLocation = () => {
    const [location, update] = useState({
        city: "",
        country: ""
    })

    const navigate = useNavigate()

    const { locationId } = useParams()

    useEffect(() => {
        getLocationById(locationId)
        .then((locationArray) => {
            update(locationArray)
        })
    }, [])

    const handleSaveButtonClick = (evt) => {
        evt.preventDefault()
        editLocation(location)
        .then(() => {
            navigate("/")
        })
    }

    return (
        <form className="locationForm">
            <h2 className="locationForm--title">Edit your location</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="City"
                        value={location?.city}
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
                        value={location?.country}
                        onChange={
                            (evt) => {
                                const copy = {...location}
                                copy.country = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>

            <Button variant="success" type="submit"
                onClick={(clickEvent) => {handleSaveButtonClick(clickEvent)}}>
                    Submit Changes
                </Button>
        </form>
    )
}