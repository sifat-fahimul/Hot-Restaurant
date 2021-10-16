import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner-img'>
            <h1 className='text-center'>Best food waiting for your belly</h1>
            <div className='align-center mt-4'>
                <InputGroup className="mb-3 m-auto input-width">
                    <FormControl
                        className='rounded-pill px-3 '
                        placeholder="Search food items"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <Button
                        className='btn btn-danger  ms-3 rounded-pill px-4 text-white'
                        variant="outline-secondary" id="button-addon2">
                        Search
                    </Button>
                </InputGroup>
            </div>
        </div>
    );
};

export default Banner;