
import React from 'react';

import moment from 'moment';
import dots from '../../assets/images/dots.png';
import './styles.scss';

export default class Countdown extends React.Component {
  state = {
    days: undefined,
    hours: undefined,
    minutes: undefined,
    seconds: undefined,
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      const then = moment('2020-10-27T12:15:00');
      const now = moment();
      const countdown = moment(then - now);
      const days = countdown.format('D');
      const hours = countdown.format('HH');
      const minutes = countdown.format('mm');
      const seconds = countdown.format('ss');

      this.setState({ days, hours, minutes, seconds });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  render() {
    const { days, hours, minutes, seconds } = this.state;

    return (
      <div className="countdown">
        <div className="countdown__wrapper">
          <div className="countdown__item">
            {days}
            <span>dias</span>
          </div>
          <img src={dots} alt="two dots"/>
          <div className="countdown__item">
            {hours}
            <span>horas</span>
          </div>
          <img src={dots} alt="two dots"/>

          <div className="countdown__item">
            {minutes}
            <span>minutos</span>
          </div>
          <img src={dots} alt="two dots"/>

          <div className="countdown__item">
            {seconds}
            <span>segundos</span>
          </div>
        </div>
      </div>
    );
  }
}
