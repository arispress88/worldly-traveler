import { useEffect, useState } from "react"
import { Button } from "react-bootstrap"

export const Profile = () => {
    const [profile, updateProfile] = useState({
        fullName: "",
        email: "",
        userId: 0
    })

    const [feedback, setFeedback] = useState("")

    const localUser = localStorage.getItem("worldly_user")
    const userObject = JSON.parse(localUser)

    useEffect(() => {
        if (feedback !== "") {
            setTimeout(() => setFeedback(""), 3000);
        }
    }, [feedback])

    useEffect(() => {
        fetch(`http://localhost:8088/users/${userObject.id}`)
        .then(r => r.json())
        .then((data) => {
            const travelerObject = data
            updateProfile(travelerObject)
        })
    }, [])

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        return fetch(`http://localhost:8088/users/${profile.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(profile)
        })
            .then(r => r.json())
            .then(() => {
                setFeedback("User profile successfully saved")
            })
    }

    return (
        <><div className={`${feedback.includes("Error") ? "error" : "feedback"} ${feedback === "" ? "invisible" : "visible"}`}>
            {feedback}
            </div><form className="profile">
                <h2 className="profile--title">Edit Profile</h2>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="fullName">Full Name</label>
                        <input
                            required autoFocus
                            type="text"
                            className="form-control"
                            value={profile.fullName}
                            onChange={(evt) => {
                                const copy = {...profile}
                                copy.fullName = evt.target.value
                                updateProfile(copy)
                            }} />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            required autoFocus
                            type="text"
                            className="form-control"
                            value={profile.email}
                            onChange={(evt) => {
                                const copy = {...profile}
                                copy.email = evt.target.value
                                updateProfile(copy)
                            }} />
                    </div>
                </fieldset>
                <Button variant="success" type="submit"
                    onClick={(clickEvent) => {handleSaveButtonClick(clickEvent)}}>
                        Save Changes
                    </Button>
            </form>
            </>
    )
}