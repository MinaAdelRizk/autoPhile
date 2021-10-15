import React from 'react';
import { Link } from 'react-router-dom';
import CarSelectModal from './carSelectModal';

const Home = () => {

    return (
        <div className="container-fluid home-page">
            <div className="container home-shade">
                <h1>AutoPhile</h1>
                <p>Hassles Free for Regualar Maintenance</p>


                <div className="row section">
                    <div className="col service-content">
                        <h5 className="sevice-title">Oil Change</h5>
                        <div className="service-desc">
                            Being on top of things constantly required, Oil Change made easier and hassle free,
                            no more waiting in queues or worries about the filter
                        </div>
                        <Link to="/fluids" className="service-link">learn more</Link>
                    </div>

                    <div className="col service-content">
                        <h5 className="sevice-title">Tyre Replacement</h5>
                        <div className="service-desc">
                            When it comes to your safety, imroved control of the vehicle and tyre ability to grip on the road is very important!
                        </div>
                        <Link to="/tires" className="service-link">learn more</Link>
                    </div>

                    <div className="col service-content">
                        <h5 className="sevice-title">Quick Services</h5>
                        <div className="service-desc">
                            <ul>
                                <li>Spark Plugs replacement</li>
                                <li>OBD test for unidentified issues such as performance loss</li>
                                <li>Brake Pads replacement</li>
                                <li>Super Easy Services</li>
                            </ul>
                        </div>
                        <Link to="/spare-parts" className="service-link">learn more</Link>
                    </div>
                </div>

                <div className="section">
                    <p>
                        Selecting your car makes it easier for us to filter parts that are suitable for your
                        car, help you select the best
                    </p>

                    <CarSelectModal btnName="Select Here!" />

                </div>

                <div>
                    <h3>What We Do?</h3>
                    <p>We provide the regularly required Car Service at your location.. No more wasted time or effort!</p>
                    <ul className="home-list">
                        <li>Engine Oil change and/or filter replacement</li>
                        <li>Check, fix or replace tyres, brakes, batteries, lightning and electrical engine parts</li>
                        <li>On-Board Diagnostics (OBD) test that detects any problem well before symptoms such as poor performance</li>
                        <li>Check fluids and coolant levels</li>
                        <li>Check and recharge car AC / cooling system</li>
                        <li>Wheel Balancing and Suspension / Brake system checks</li>
                        <li>Electrical services such as Spark plugs replacement and gab adjustment</li>
                    </ul>
                </div>
            </div >
        </div>
    );

}

export default Home;