//THIS MODULE IS FOR LINKS FOR HELPFUL TRAVEL TIPS//

import React from "react";
import { Card } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import "./Links.css"

export const Links = () => {
    return (
        <Row xs={1} md={2}>
            <Col>
            <Card bg="info" border="dark" style={{ width: "18rem"}}>
                <Card.Body>
                    <Card.Title className="links--title">Travel Activities with the Kids!</Card.Title>
                    <Card.Text className="links--caption">
                        30 travel activities for kids
                    </Card.Text>
                    <Card.Link className="links--link" href="https://goplaceswithkids.com/travel-activities-for-kids/">
                        Click here
                    </Card.Link>
                </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card bg="info" border="dark" style={{ width: "18rem"}}>
                <Card.Body>
                    <Card.Title className="links--title">Pre-Travel Checklist</Card.Title>
                    <Card.Text className="links--caption">
                        A checklist to make sure you have what you need on your dream vacation.
                    </Card.Text>
                    <Card.Link className="links--link" href="https://extrapackofpeanuts.com/things-do-before-travel/">
                        Click here
                    </Card.Link>
                </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card bg="info" border="dark" style={{ width: "18rem"}}>
                <Card.Body>
                    <Card.Title className="links--title">10 Fun Activities to Do When Traveling for Work</Card.Title>
                    <Card.Text className="links--caption">A list of 10 activities you can do while on that business trip abroad.</Card.Text>
                    <Card.Link className="links--link" href="https://www.glassdoor.com/blog/traveling-for-work/">
                        Click here
                    </Card.Link>
                </Card.Body>
            </Card>
            </Col>
        </Row>
    )
}