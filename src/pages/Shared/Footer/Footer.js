import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo/logo.png'

const Footer = () => {
    return (
        <div className='bg-dark p-5 mt-5'>
            <div className="row">
                <div className="col-lg-6 col-md-12 col-12">
                    <img className='w-25' src={logo} alt="" />
                </div>
                <div className="col-lg-3 col-md-6 col-12 py-3">
                    <Link className='text-decoration-none text-white' to=''>
                        <p>About Online food</p>
                    </Link>
                    <Link className='text-decoration-none text-white' to=''>
                        <p>Read our blog</p>
                    </Link>
                    <Link className='text-decoration-none text-white' to=''>
                        <p>Sign Up to delivery</p>
                    </Link>
                    <Link className='text-decoration-none text-white' to=''>
                        <p>Add Your restaurant</p>
                    </Link>

                </div>
                <div className="col-lg-3 col-md-6  col-12 py-3">
                    <Link className='text-decoration-none text-white' to=''>
                        <p>Get help</p>
                    </Link>
                    <Link className='text-decoration-none text-white' to=''>
                        <p>Read FAQs</p>
                    </Link>
                    <Link className='text-decoration-none text-white' to=''>
                        <p>View all cities</p>
                    </Link>
                    <Link className='text-decoration-none text-white' to=''>
                        <p>Restaurants near me</p>
                    </Link>
                </div>
                <hr />
                <br /><br />
                <div className="col-4 text-secondary text-center"><p>Copyright © 2021 Sifat Fahimul</p></div>
                <div className="col-8 text-center">
                    <Link className='text-decoration-none text-white px-2' to=''>
                        <p className='d-inline-block'>Privacy Policy.</p>
                    </Link>
                    <Link className='text-decoration-none text-white px-2' to=''>
                        <p className='d-inline-block'>Terms of Use</p>
                    </Link>
                    <Link className='text-decoration-none text-white px-2' to=''>
                        <p className='d-inline-block'>Pricing</p>
                    </Link>
                </div>
            </div>


        </div>
    );
};

export default Footer;