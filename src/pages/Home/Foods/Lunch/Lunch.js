import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Lunch = () => {
    const [lunchs, setLunchs] = useState([]);
    useEffect(() => {
        fetch('./lunch.json')
            .then(res => res.json())
            .then(data => setLunchs(data))
    }, [])
    return (
        < div >
            <Container>
                <Row lg={3} xs={1} className="g-4">

                    {
                        lunchs.map(lunch => <Col
                            key={lunch.name}
                        >
                            <Card className='p-4 text-center'>
                                <Card.Img className="w-50 mx-auto" src={lunch.img} alt="" />
                                <Card.Title className='mt-2'>{lunch.name}</Card.Title>
                                <small>{lunch.details.slice(0, 40)}</small>
                                <Card.Title>{lunch.price}</Card.Title>
                            </Card>
                        </Col>)
                    }
                </Row>
            </Container>
        </div >
    );
};

export default Lunch;