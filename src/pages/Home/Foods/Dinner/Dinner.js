import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Dinner = () => {
    const [dinners, setDinners] = useState([]);
    useEffect(() => {
        fetch('./dinner.json')
            .then(res => res.json())
            .then(data => setDinners(data))
    }, [])
    return (
        <div>
            <Container>
                <Row lg={3} xs={1} className="g-4">

                    {
                        dinners.map(dinner => <Col
                            key={dinner.name}
                        >
                            <Card className='p-4 text-center'>
                                <Card.Img className="w-50 mx-auto" src={dinner.img} alt="" />
                                <Card.Title className='mt-2'>{dinner.name}</Card.Title>
                                <small>{dinner.details.slice(0, 40)}</small>
                                <Card.Title>{dinner.price}</Card.Title>
                            </Card>
                        </Col>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Dinner;