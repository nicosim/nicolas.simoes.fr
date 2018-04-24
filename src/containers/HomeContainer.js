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
  paddingBottom:40,
  minHeight: '80vh',
  width: '100%',
}

class HomeContainer extends Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
    };
  }
  
  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }
  
  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };
  
  render() {
  const { width } = this.state;
  const isMobile = width <= 800;
    return (
      <div style={{ position: 'relative'}}>
        <div style={BACKGROUND_STYLE}></div>
        <div style={OVERLAY_STYLE}> </div>
        <Card style={CONTAINER_STYLE}>
          <Section type="Profile" isMobile={isMobile}/>
          <Section type="Experience" isMobile={isMobile}/>
          <Section type="Education" isMobile={isMobile}/>
          <Section type="Skills" isMobile={isMobile}/>
          <Section type="Language" isMobile={isMobile}/>
          <Section type="Interest" isMobile={isMobile}/>
        </Card>
      </div>
    );
  }
}

export default HomeContainer;
