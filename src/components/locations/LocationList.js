//THIS MODULE IS FOR SHOWING WHERE THE USER IS VISITING ON THE MAIN PAGE//

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getLocation } from "../../ApiManager";
import "./Locations.css"

export const LocationList = () => {
    const [locations, setLocations] = useState([])

    const localUser = localStorage.getItem("worldly_user")
    const userObject = JSON.parse(localUser) 

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
                        {location.userId} is traveling to {location.city} in {location.country}
                    </div>
                </section>
            })
        }
    </article>
}