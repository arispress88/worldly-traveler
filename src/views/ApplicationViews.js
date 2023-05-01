import { Outlet, Route, Routes } from "react-router-dom";
import "./ApplicationViews.css"
import { Profile } from "../components/profile/Profile";
import { LocationForm } from "../components/locations/LocationForm";
import { LocationList } from "../components/locations/LocationList";

export const ApplicationViews = ({tasksRef, locationRef, imageRef}) => {
    return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>Worldly Traveler</h1>
                    <h3>Take a journey off the beaten path</h3>

                    <div className="main--container">
                        <div className="section--left">
                            <div ref={tasksRef}  id="tasks" className="tasks--container">Tasks will go here</div>
                        </div>

                        <div className="section--middle">
                            <div ref={locationRef} id="locations" className="locations--container"><LocationList /></div>
                        </div>

                        <div className="section--right">
                            <div ref={imageRef} id="images" className="images--container">Pics go here</div>
                        </div>
                    </div>

                    <Outlet />
                </>
            }>

                
                
            </Route>
            <Route path="profile" element={ <Profile />} />
                <Route path="/locations/create" element={ <LocationForm />} />
        </Routes>
    )
}