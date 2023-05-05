//THIS MODULE IS FOR THE USER TO ADD IMAGES TO THE APP//

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addImage } from "../../ApiManager";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "./Images.css"

export const ImageForm = () => {
    const [image, update] = useState({
        imageUrl: "",
        caption: ""
    })

    const navigate = useNavigate()

    const localUser = localStorage.getItem("worldly_user")
    const userObject = JSON.parse(localUser)

    const handleSaveButtonClick = (event) => {
        event.preventDefault()
        console.log("You clicked the button!")

        const infoToSendToAPI = {
            userId: userObject.id,
            imageUrl: image.url,
            caption: image.caption
        }

        return addImage(infoToSendToAPI)
        .then(() => {
            navigate("/")
        })
    }

    return (
        <Form className="image--form" onSubmit={handleSaveButtonClick}>
            <h2 className="image--title">Add your Image</h2>
            <Form.Group controlId="image-url">
                <Form.Label className="image--label">Enter Image URL</Form.Label>
                <Form.Control
                type="text"
                placeholder="Image URL"
                value={image.url}
                onChange={(evt) => {
                    const copy = {...image}
                    copy.url = evt.target.value
                    update(copy)
                }} />
            </Form.Group>
            <Form.Group controlId="image-caption">
                <Form.Label className="image--label">Enter a caption</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Place caption here"
                    value={image.caption}
                    onChange={(evt) => {
                        const copy = {...image}
                        copy.caption = evt.target.value
                        update(copy)
                    }} />
            </Form.Group>

            <Button className="image--button" variant="primary" type="submit">
                Add Image
            </Button>
        </Form>
    )
}