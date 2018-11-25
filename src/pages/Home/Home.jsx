import React, { Component } from 'react';
import Header from '../../components/Header';
import MemberList from './components/MemberList'
import SimpleFooter from './components/SimpleFooter'
import ExcellentHomePage from "./components/ExcellentHomePage1";
import SimpleSlider from "./components/SimpleSlider";

export default class Home extends Component {
  static displayName = 'Home';

  constructor(props) {
    super(props);
    this.state = {};
  }
 
  render() {
    return (
      <div className="home-page" style={{ background: '#fff' }}>
        <Header />
        <ExcellentHomePage/>
        <MemberList/>
        <SimpleSlider/>
        <SimpleFooter/>
      </div>
    );
  }
}
