import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Login.css"
import Button from "react-bootstrap/Button"
import { Form } from "react-bootstrap"

export const Register2 = (props) => {
    const [user, setUser] = useState({
        email: "",
        fullName: "",
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
        <Form onSubmit={handleRegister}>
            <h1>Please register for Worldly Traveler</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail" onChange={updateUser}>
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formFullName" onChange={updateUser}>
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="fullName" placeholder="Full Name" />
        </Form.Group>
        <Button variant="primary" type="register">
          Register
        </Button>
      </Form>
    );
  }