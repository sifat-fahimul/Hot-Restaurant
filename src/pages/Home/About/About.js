import React from 'react';
import burger from '../../../images/Image/adult-blur-blurred-background-687824.png';
import chef from '../../../images/Image/chef-cook-food-33614.png';
import city from '../../../images/Image/architecture-building-city-2047397.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faBell, faTruck, faTruckMoving } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const About = () => {
    const delivery = <FontAwesomeIcon icon={faTruckMoving}></FontAwesomeIcon>
    const bellIcon = <FontAwesomeIcon icon={faBell}></FontAwesomeIcon>
    const deliveryIcon = <FontAwesomeIcon icon={faTruck}></FontAwesomeIcon>
    const rightArrow = <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
    return (
        <div className='my-5'>
            <div className="align-baseline ">
                <div className="container ">
                    <div className='w-50'>
                        <h1>Why you choose us</h1>
                        <p className='font-weight-bold'>Barton waited twenty always repair in within we do. An delighted offending curiosity my is dashwoods at. Boy prosperous increasing surrounded.</p>
                    </div>
                    <div className="row ">
                        <div className="col-lg-4 col-md-6 col-12 ">
                            <img className='img-fluid' src={burger} alt="" />
                            <div className="row my-3">
                                <div className="col-2 mt-3">
                                    <span className='bg-danger p-2 text-white rounded-circle  fs-4'> {delivery}</span>
                                </div>
                                <div className="col-10">
                                    <h4>Fast Delivery</h4>
                                    <p>Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future.</p>
                                    <Link to='' className='text-primary fs-5 text-decoration-none'>see more <span className='bg-success text-white rounded-circle ms-4 px-1'>{rightArrow}</span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 p-2">
                            <img className='img-fluid' src={chef} alt="" />
                            <div className="row my-3">
                                <div className="col-2 mt-3">
                                    <span className='bg-danger p-2 text-white rounded-circle  fs-4'> {bellIcon}</span>
                                </div>
                                <div className="col-10">
                                    <h4>A Good Auto Responder</h4>
                                    <p>Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future.</p>
                                    <Link to='' className='text-primary fs-5 text-decoration-none'>see more <span className='bg-success text-white rounded-circle ms-4 px-1'>{rightArrow}</span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 p-2">
                            <img className='img-fluid' src={city} alt="" />
                            <div className="row my-3">
                                <div className="col-2 mt-3">
                                    <span className='bg-danger p-2 text-white rounded-circle  fs-4'> {deliveryIcon}</span>
                                </div>
                                <div className="col-10">
                                    <h4>Home Delivery</h4>
                                    <p>Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future.</p>
                                    <Link to='' className='text-primary fs-5 text-decoration-none'>see more <span className='bg-success text-white rounded-circle ms-4 px-1'>{rightArrow}</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default About;