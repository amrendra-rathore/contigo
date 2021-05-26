import React from 'react';

const Slider = (props) => {

  this.state = {
    current: 0,
    random: props.random,
    banner: props.banner,
    height: props.height,
    defaultBanner: props.defaultBanner,
    max: props.banner.length
  };
  componentDidMount() {
    this.timerID = setInterval(() => this.counter(), this.props.duration);
  }

  componentWillUnmount () {

  }

export default Slider