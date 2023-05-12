import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Login.css"
import Button from "react-bootstrap/Button"

export const Register = (props) => {
    const [user, setUser] = useState({
        email: "",
        fullName: "",
        level: 0
    })
    let navigate = useNavigate()

    const registerNewUser = () => {
        return fetch(`http://localhost:8088/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(r => r.json())
            .then(createdUser => {
                if (createdUser.hasOwnProperty("id")) {
                    localStorage.setItem("worldly_user", JSON.stringify({
                        id: createdUser.id
                    }))

                    navigate("/")
                }
            })
    }

    const handleRegister = (e) => {
        e.preventDefault()
        return fetch(`http://localhost:8088/users?email=${user.email}`)
        .then(r => r.json())
        .then(r => {
            if (Response.length > 0) {
                //Dupe email is no good
                window.alert("An account with the email address already exists")
            }
            else {
                //Email address is ok
                registerNewUser()
            }
        })
    }

    const updateUser = (evt) => {
        const copy = {...user}
        copy[evt.target.id] = evt.target.value
        setUser(copy)
    }

    return (
        <main style={{ textAlign: "center" }}>
            <form className="form--login" onSubmit={handleRegister}>
                <h1 className="h3 mb-3 font-weight-normal">Please register for Worldly Traveler</h1>
                <fieldset>
                    <label htmlFor="fullName">Full Name</label>
                    <input onChange={updateUser}
                            type="text" id="fullName" className="form-control"
                            placeholder="Enter your name" required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="email">Email address</label>
                    <input onChange={updateUser}
                        type="email" id="email" className="form-control"
                        placeholder="Email address" required />
                </fieldset>
                <fieldset>
                    <Button type="submit"> Register </Button>
                </fieldset>
            </form>
        </main>
    )
}