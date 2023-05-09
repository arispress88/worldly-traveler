//THIS MODULE IS FOR SHOWING WHERE THE USER IS VISITING ON THE MAIN PAGE//

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteLocation, getLocation } from "../../ApiManager";
import "./Locations.css"
import { Button } from "react-bootstrap";


export const LocationList = () => {
    const [locations, setLocations] = useState([])
    

    

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


    return <article className="locations">
        {
            locations.map(location => {
                return <section className="location" key={`location--${location.id}`}>
                    <div className="location--post">
                        {location?.user?.fullName} (Lvl. {location?.user?.level}) is traveling to {location.city} in {location.country}
                    </div>
                
                    <Button
                        variant="danger"
                        type="delete"
                        onClick={() =>
                            deleteLocation(location.id).then((locations) => {
                            setLocations(locations);
                            })
                        }
                           
                    >
                        Delete
                    </Button>
                    <Button
                        variant="dark"
                        type="edit"
                        onClick={() => navigate(`/locations/edit/${location.id}`)}
                        
                    >
                        Edit
                    </Button>
                </section>
            })
        }
    </article>
}