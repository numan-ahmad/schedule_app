import React from "react";

const Registrion = () => {
    return (
        <div class="container">
            <section class="description-section">
                <button class="back-btn" onclick="goBack()"><img class="arrow-icon" src="icons/arrow (1).svg" alt="back-arrow" /></button>
                    <hgroup>
                        <h4 id="scheduler">ACME Sales</h4>
                        <h2 id="event">Pricing Review</h2>
                        <div class="icon-text-div">
                            <img src="icons/clock.svg" alt="clock-icon" />
                                <h4 id="duration">15 min</h4>
            </div><br />
                                <div class="icon-text-div">
                                    <img src="icons/calendar (1).svg" alt="calendar-icon" />
                                        <h4 id="event-time-stamp">9:00am - 9:15am, Monday, July 13, 2020</h4>
            </div>
        </hgroup>
    </section>
                            <div class="divider"></div>
                            <section id="register-section" class="body-section">
                                <form action="confirm.html">
                                    <h3>Enter Details</h3>
                                    <label for="name">Name</label>
                                    <input type="text" name="" id="name" required />
                                        <label for="email">Email</label>
                                        <input type="email" name="" id="email" required />
                                            <button id="submit-btn" type="submit">Schedule Event</button>
        </form>
    </section>

</div>

 );
};

export default Registrion;