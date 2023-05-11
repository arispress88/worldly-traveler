// COMPONENT MADE SO THAT FILLING THE PROGRESS BAR INCREASES THE USER'S LEVEL WITHOUT HAVING TO LOG OUT THEN LOG BACK IN //

import { useState } from "react";
import { LocationList } from "./LocationList";
import { Tasks } from "../tasks/Tasks";

export const LocationContainer = () => {
    const [setTaskLevel, setLocationLevel] = useState("")


return <>
        <LocationList setterFunction={setLocationLevel} />
</>

}