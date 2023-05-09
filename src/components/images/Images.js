import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getImages } from "../../ApiManager";
import { Card } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import "./Images.css"

export const Images = () => {
    const [images, setImages] =useState([])

    const navigate = useNavigate()

    useEffect(
        () => {
            getImages()
            .then(
                (images) => {
                    setImages(images)
                }
            )
        }, []
    )

    return <article className="images">
        {
            images.map(image => {
                return (
                    
                    <Row xs={1} md={2} className="g-4">
                        
                            <Col>
                            <Card style={{ width: '24.8rem' }}>
                        <Card.Img variant="top" src={image.imageUrl} />
                        <Card.Body>
                            <Card.Title>
                                <h3 className="image--post">{image?.user?.fullName} (Lvl. {image?.user?.level}) posted a photo</h3>
                            </Card.Title>
                            <Card.Text>
                                <h4 className="image--caption">{image.caption}</h4>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    
                    </Row>
                    
                )
            })

        }
    </article>
}