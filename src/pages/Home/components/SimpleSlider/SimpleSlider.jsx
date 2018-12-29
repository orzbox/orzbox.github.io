import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Slider } from '@icedesign/base';

const slides = [
  {
    url: require('./images/1.jpg'),
    text: '逆水寒',
  },
  {
    url: 'http://pic.xeeok.com/uploads/20170606/201706061156173372/121559_001.jpg',
    text: '詹姆斯',
  },
  {
    url: 'https://odesza.com/wp-content/uploads/2017/08/ODESZA-Backgrounds-Desktop-1080.jpg',
    text: 'bizhi',
  },
  {
    url: 'https://www.setaswall.com/wp-content/uploads/2017/06/Linux-Wallpapers-29-1920-x-1080.jpg',
    text: 'bizhi',
  },
  {
    url: 'http://uploads.5068.com/allimg/160822/67-160R21P501.jpg',
    text: 'bizhi',
  },
  {
    url: 'http://i1.073img.com/150702/17598486_180439_1.jpg',
    text: 'bizhi',
  },
  {
    url: 'http://www.dnzhuti.com/uploads/allimg/170113/95-1F113130F1.jpg',
    text: 'bizhi',
  },
  {
    url: 'https://gss0.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/6159252dd42a2834d29b690d58b5c9ea15cebff3.jpg',
    text: 'bizhi',
  },
  {
    url: 'https://images8.alphacoders.com/620/620058.jpg',
    text: 'bizhi',
  },
  {
    url: 'https://i0.wp.com/www.androidhits.com/wp-content/uploads/2018/04/Fuchsia-OS-browser-AndroidHits-feat.jpg?fit=1920%2C1080&ssl=1',
    text: 'bizhi',
  },
];

export default class SimpleSlider extends Component {
  static displayName = 'SimpleSlider';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <IceContainer style={styles.noPaddingContainer}>
        <Slider style={styles.slider}>
          {slides.map((item, index) => (
            <div key={index}>
              <img src={item.url} alt={item.text} style={styles.itemImg} />
            </div>
          ))}
        </Slider>
      </IceContainer>
    );
  }
}

const styles = {
  noPaddingContainer:{
    padding: '0'
  },
  itemImg: {
    width: '80%',
    margin: '0 auto',
    maxHeight: '1920px',
    boxShadow: '10px 10px 5px #888888',
    marginBottom: '30px'
  },
  slider: {
    background: 'repeating-linear-gradient(45deg, #6effbf , #dcaee8,#ffc5e6,#fcf2db)',
  }
};
