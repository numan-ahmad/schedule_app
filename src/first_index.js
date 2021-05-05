import React from "react";
import logo from "./images/clock.svg";

const Indexpage = () => {
    return (
        <>
        <div className="container">
            <section className="description-section">
                <hgroup>
                    <h4 id="scheduler">ACME Sales</h4>
                    <h2 id="event">Pricing Review</h2>
                    <div className="icon-text-div">
                        <img src={logo} alt="clock-icon"/>
                            <h4 id="duration">15 min</h4>
                </div>
            </hgroup>
                    <p id="description">Our team will meet with you to review pricing options.</p>
        </section>
                <div className="divider"></div>
                <section id="calendar-section" className="body-section">
                    <h3>Select a Date & Time</h3>
                    <div id="schedule-div">
                        <div id="available-times-div"></div>
                        <div id="calendar"></div>
                    </div>
                </section>

    </div>
    </>
    );
    

};

export default Indexpage;