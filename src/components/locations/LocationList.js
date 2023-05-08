//THIS MODULE IS FOR SHOWING WHERE THE USER IS VISITING ON THE MAIN PAGE//

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteLocation, getLocation, getUsers } from "../../ApiManager";
import "./Locations.css"
import { Button } from "react-bootstrap";


export const LocationList = () => {
    const [locations, setLocations] = useState([])
    const [currentUser, setCurrentUser] = useState(null)

    

    const navigate = useNavigate()

    useEffect(
        () => {
            getLocation()
            .then(
                (locations) => {
                    setLocations(locations)
                }
            )
        }, []
    )

    useEffect(
        () => {
            getUsers()
            const user = getUsers();
            setCurrentUser(user)
        }, []
    )


    const isCurrentUserPoster = currentUser && currentUser.id === locations?.user?.id

    return <article className="locations">
        {
            locations.map(location => {
                return <section className="location" key={`location--${location.id}`}>
                    <div className="location--post">
                        {location?.user?.fullName} is traveling to {location.city} in {location.country}
                    </div>
                
                    <Button
                        variant="danger"
                        type="delete"
                        onClick={() =>
                            deleteLocation(location.id).then((locations) => {
                            setLocations(locations);
                            })
                        }
                            disabled={!isCurrentUserPoster}
                    >
                        Delete
                    </Button>
                    <Button
                        variant="dark"
                        type="edit"
                        onClick={() => navigate(`/locations/edit/${location.id}`)}
                        disabled={!isCurrentUserPoster}
                    >
                        Edit
                    </Button>
                </section>
            })
        }
    </article>
}