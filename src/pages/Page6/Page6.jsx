import React, { Component } from 'react';
import ServiceCard from './components/ServiceCard';
import AbilityIntroduction from './components/AbilityIntroduction';
import About from './components/About';

export default class Page6 extends Component {
  static displayName = 'Page6';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="page6-page">
        <ServiceCard />
        <AbilityIntroduction />
        <About />
      </div>
    );
  }
}
