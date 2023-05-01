import { useState } from "react"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import "./Login.css"
import  Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";

export const Login2 = () => {
    const [email, set] = useState("arnold@user.com")
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()

        return fetch(`http://localhost:8088/users?email=${email}`)
        .then(r => r.json())
        .then(foundUsers => {
            if (foundUsers.length === 1) {
                const user = foundUsers[0]
                localStorage.setItem("worldly_user", JSON.stringify({
                    id: user.id
                }))

                navigate("/")
            }
            else {
                window.alert("Invalid login")
            }
        })
    }

    return (
        <Form onSubmit={handleLogin}>
          <h1>Worldly Traveler</h1>
          <h4>Please log in</h4>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={evt => set(evt.target.value)}
        required autoFocus />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Button variant="primary" type="signIn">
        Sign in
      </Button>
    
    <section className="link--register">
        <Link to="/register">Not a member yet?</Link>
    </section>
    </Form>
  );
}