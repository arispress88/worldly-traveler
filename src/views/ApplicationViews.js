import { Outlet, Route, Routes } from "react-router-dom";
import "./ApplicationViews.css"
import { Profile } from "../components/profile/Profile";
import { LocationForm } from "../components/locations/LocationForm";
import { LocationList } from "../components/locations/LocationList";
import { Tasks } from "../components/tasks/Tasks";
import { EditLocation } from "../components/locations/EditLocation";
import { ImageForm } from "../components/images/ImageForm";
import { Images } from "../components/images/Images";
import { Links } from "../components/links/Links";
import { LocationContainer } from "../components/locations/LocationContainer";

export const ApplicationViews = ({tasksRef, locationRef, imageRef}) => {
    return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1 className="worldly--title">Worldly Traveler</h1>
                    <h4 className="worldly--quote">"Travel doesn't become adventure until you leave yourself behind."</h4>

                    <div className="main--container">
                        <div className="section--left">
                            <div ref={tasksRef}  id="tasks" className="tasks--container"><Tasks /></div>
                        </div>
                        

                        <div className="section--middle">
                            <div ref={locationRef} id="locations" className="locations--container"><LocationContainer /></div>
                        </div>

                        <div className="section--right">
                            <div ref={imageRef} id="images" className="images--container"><Images /></div>
                        </div>
                    </div>

                    <Outlet />
                </>
            }>

                
                
            </Route>
            <Route path="/profile" element={ <Profile />} />
                <Route path="/locations/create" element={ <LocationForm />} />
                <Route path="/locations/edit/:locationId" element={ <EditLocation />} />
                <Route path="/images/add" element={ <ImageForm />} />
                <Route path="/links" element={ <Links />} />
        </Routes>
    )
}