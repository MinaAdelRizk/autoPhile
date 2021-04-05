import React from 'react';
import CarSelMenu from './CarSelMenu';
import CarSelectModal from './carSelectModal';

const Home = () => {

    return (
        <div className="container-fluid home-page">
            <div className="container home-shade">
                <h1>AutoPhile</h1>
                <p>Hassles Free for Regualar Maintenance</p>

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

                <div className="section">
                    <p>
                        Selecting your car makes it easier for us to filter parts that are suitable for your
                        car, help you select the best
                    </p>

                    <CarSelectModal btnName="Select Here!" />

                </div>

                <div className="row section">
                    <div className="col service-content">
                        <h5 className="sevice-title">Service 1</h5>
                        <div className="service-desc">
                            Some description goes here and some is falling down to the next line
                        </div>
                    </div>

                    <div className="col service-content">
                        <h5 className="sevice-title">Service 1</h5>
                        <div className="service-desc">
                            Some description goes here and some is falling down to the next line
                        </div>
                    </div>

                    <div className="col service-content">
                        <h5 className="sevice-title">Service 1</h5>
                        <div className="service-desc">
                            Some description goes here and some is falling down to the next line
                        </div>
                    </div>
                </div>

            </div >
        </div>
    );

}

export default Home;