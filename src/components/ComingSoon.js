import React, { Component } from "react";
import "./App.css";
import "./ComingSoon.css";

class ComingSoon extends Component {

  componentDidMount() {
    (() => {
      // Specify the deadline date
      const deadlineDate = new Date('December 31, 2020 23:59:59').getTime();

      // Cache all countdown boxes into consts
      const countdownDays = document.querySelector('.countdown__days .number');
      const countdownHours = document.querySelector('.countdown__hours .number');
      const countdownMinutes = document.querySelector('.countdown__minutes .number');
      const countdownSeconds = document.querySelector('.countdown__seconds .number');

      // Update the count down every 1 second (1000 milliseconds)
      setInterval(() => {
        // Get current date and time
        const currentDate = new Date().getTime();

        // Calculate the distance between current date and time and the deadline date and time
        const distance = deadlineDate - currentDate;

        // Calculations the data for remaining days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Insert the result data into individual countdown boxes
        countdownDays.innerHTML = days;
        countdownHours.innerHTML = hours;
        countdownMinutes.innerHTML = minutes;
        countdownSeconds.innerHTML = seconds;
      }, 1000);
    })();
  }

  render() {
    return <div>
      <div className="wrapper" style={{ height: "80vh" }}>
        <div className="content">
          <div>COMING SOON!</div>

          <div className="countdown">
            <div className="countdown__days">
              <div className="number"></div>
              <span >Days</span>
            </div>

            <div className="countdown__hours">
              <div className="number"></div>
              <span >Hours</span>
            </div>

            <div className="countdown__minutes">
              <div className="number"></div>
              <span >Minutes</span>
            </div>

            <div className="countdown__seconds">
              <div className="number"></div>
              <span >Seconds</span>
            </div>
          </div>

          <div>Our website is under construction. We`ll be here soon<br />with our new awesome site. Subscribe to be notified.</div>

          <form action="">
            <input type="email" placeholder="Your email address" />
            <input type="submit" value="Notify me" />
          </form>
        </div>

      </div>
    </div>
  }
}

export default ComingSoon;
