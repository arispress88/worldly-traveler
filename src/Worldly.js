import { Route, Routes } from "react-router-dom";
import { Authorized } from "./views/Authorized";
import "./Worldly.css"
import { Register } from "./components/auth/Register";
import { NavBar } from "./components/nav/NavBar";
import { ApplicationViews } from "./views/ApplicationViews";
import { Login2 } from "./components/auth/Login2";

export const Worldly = () => {
    return <Routes>
        <Route path="/login" element={<Login2 />} />
        <Route path="/register" element={<Register />} />

        <Route path="*" element={
            <Authorized>
                <>
                    <NavBar />
                    <ApplicationViews /> 
                    </>
            </Authorized>
        } />
    </Routes>
}