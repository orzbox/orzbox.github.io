import React, { Component } from 'react';
import { Balloon, Icon } from '@icedesign/base';
import Menu from '@icedesign/menu';
import Qrcode from '@icedesign/qrcode';
import Logo from '../Logo';
import './Header.scss';

const MENUS = [
  // {
  //   name: '设计',
  //   path: '/ice/docs/ice-design',
  //   ifOhter: false
  // },
  // {
  //   name: '文档',
  //   path: '/ice/docs',
  // },
  {
    name: '项目',
    children: [
      {
        name: '团队博客',
        path: 'https://github.com/orzbox/our-tech',
        ifOther: true
      },
      // {
      //   name: '区块',
      //   path: '/ice/block',
      // },
      // {
      //   name: '布局',
      //   path: '/ice/layout',
      // },
      // {
      //   name: '模板',
      //   path: '/ice/scaffold',
      // },
    ],
  },
  // {
  //   name: '工具',
  //   children: [
  //     {
  //       name: 'ICEWORKS',
  //       path: '/ice/iceworks',
  //     },
  //     {
  //       name: 'Playground',
  //       path: '/ice/playground',
  //     },
  //   ],
  // },
  {
    name: '社区',
    children: [
      {
        name: '团队博客',
        path: 'https://orzbox.github.io/our-tech',
        ifOther: true
      },
      {
        name: '万能群',
        path: 'http://qm.qq.com/cgi-bin/qm/qr?k=x1gxk9lCSM8d0ZzRG3f3xFwcbyJOE5qk',
        ifOther: true
      },
    ],
  },
];

export default class Header extends Component {
  renderBalloonContent = (menu, idx) => {
    return (
      <Menu.Item key={idx}>
        <Balloon
          className="header-balloon-content"
          closable={false}
          triggerType="click"
          trigger={
            <a>
              {menu.name}{' '}
              <Icon
                size="xxs"
                type="arrow-down-filling"
                className="arrow-down-filling-icon"
              />
            </a>
          }
        >
          {menu.children.map((subMenu, index) => {
            return (
              <a href={subMenu.ifOther ? subMenu.path : "/#" + subMenu.path} className="custom-sub-menu" key={index}>
                {subMenu.name}
              </a>
            );
          })}
        </Balloon>
      </Menu.Item>
    );
  };

  renderMenuItem = () => {
    return MENUS.map((menu, idx) => {
      if (menu.children) {
        return this.renderBalloonContent(menu, idx);
      }
      return (
        <Menu.Item key={menu.path}>
          <a href={menu.ifOther ? menu.path : "/#" + menu.path}>{menu.name}</a>
        </Menu.Item>
      );
    });
  };

  render() {
    return (
      <div className="header-container">
        <div className="header-content">
          <Logo isDark />
          <div className="header-navbar" style={{ paddingRight: "50px" }}>
            <Menu className="header-navbar-menu" mode="horizontal">
              {this.renderMenuItem()}
            </Menu>
          </div>
        </div>
      </div>
    );
  }
}
