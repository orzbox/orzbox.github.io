import React, { Component } from 'react';
import { Button } from '@icedesign/base';
import './ExcellentHomePage.scss';
import Qrcode from '@icedesign/qrcode';

export default class ExcellentHomePage extends Component {
  static displayName = 'ExcellentHomePage';

  render() {
    return (
      <div className="excellent-home-page" style={{ height: '100vh' }}>
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundSize: 'cover',
            backgroundImage: `url(${require('./images/TB1oJNKsFOWBuNjy0FiXXXFxVXa-1900-1010.svg')})`,
            backgroundPosition: 'center',
          }}
        />

        <div className="excellent-home-page-background" />
        <div className="excellent-home-page-content-wrapper">
          <div className="excellent-home-page-content">
            <h2 className="title">orzbox
              <Qrcode
                triggerSize="xxl"
                value="http://qm.qq.com/cgi-bin/qm/qr?k=x1gxk9lCSM8d0ZzRG3f3xFwcbyJOE5qk"
                text="QQ群:783835145"
                align="left"
                preventDefault="true"
              /></h2>
            <p className="subtitle">
              用你的手，让代码变的神奇！让所有人膜拜！
            </p>
            <div
              className="excellent-home-page-buttons"
              style={{ textAlign: 'center', marginTop: 70 }}
            >
              <a href="https://orzbox.github.io/our-tech">
                <Button
                  style={{
                    height: 50,
                    padding: '0 58px',
                    fontSize: 16,
                    marginBottom: '20px',
                    background: '#13abc4',
                  }}
                  type="primary"
                  size="large"
                >
                  技术杂货店
                  <div
                    style={{
                      marginLeft: '5px',
                      display: 'inline-block',
                      width: '10px',
                      height: '10px',
                      borderRight: '1px solid #fff',
                      borderBottom: '1px solid #fff',
                      transform: 'rotate(-45deg)',
                    }}
                  />
                </Button>
              </a>
              <a href="https://github.com/orzbox">
                <Button
                  style={{
                    height: 50,
                    padding: '0 58px',
                    fontSize: 16,
                    marginLeft: '10px',
                    marginBottom: '20px',
                    background: '#00CE72',
                  }}
                  type="primary"
                  size="large"
                >
                  Github
                  <div
                    style={{
                      marginLeft: '5px',
                      display: 'inline-block',
                      width: '10px',
                      height: '10px',
                      borderRight: '1px solid #fff',
                      borderBottom: '1px solid #fff',
                      transform: 'rotate(-45deg)',
                    }}
                  />
                </Button>

              </a>
            </div>

            <div style={{ marginTop: '80px', position: 'relative' }}>
              <div style={styles.gitContainer} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  leftButton: {
    marginRight: '20px',
  },
  gitStar: {
    border: '0px',
    height: '32px',
    width: '145px',
    margin: '0 auto',
  },
  gitContainer: {
    marginTop: '30px',
    textAlign: 'center',
  },
  updateLogLinkWrap: {
    textAlign: 'center',
  },
  updateLogLink: {
    color: '#fff',
  },
};
