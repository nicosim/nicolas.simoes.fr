import React, { Component } from 'react';

import Section from '../components/Section';

import {Card} from 'material-ui';


const BANNER_HEIGHT = 500;

const BACKGROUND_STYLE = {
  background: 'url(/images/background.jpg)',
  backgroundRepeat: 'none',
  backgroundSize: 'cover',
  backgroundPosition: '50% 30%',
  position: 'absolute',
  width: '100%',
  height: BANNER_HEIGHT - 10,
  zIndex: 0,
}

const OVERLAY_STYLE = {
  background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.4), rgb(245, 245, 245) 90%)',
  position: 'absolute',
  width: '100%',
  height: BANNER_HEIGHT,
  zIndex: 1,
}

const CONTAINER_STYLE = {
  backgroundColor: 'rgb(245, 245, 245)',
  paddingTop:80,
  minHeight: '80vh',
  paddingBottom:40,
}

class HomeContainer extends Component {
  render() {
    return (
      <div style={{ position: 'relative'}}>
        <div style={BACKGROUND_STYLE}></div>
        <div style={OVERLAY_STYLE}> </div>
        <Card style={CONTAINER_STYLE}>
          <Section type="Profile"/>
          <Section type="Experience"/>
          <Section type="Education"/>
          <Section type="Skills"/>
          <Section type="Language"/>
          <Section type="Interest"/>
        </Card>
      </div>
    );
  }
}

export default HomeContainer;
