import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Table } from '@icedesign/base';
import ContainerTitle from './ContainerTitle';

export default class MemberList extends Component {
  static displayName = 'MemberList';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  renderProfile = (value, index, record) => {
    return (
      <div style={styles.profile}>
        <img src={record.avatar} alt="" style={styles.avatar} />
        <span style={styles.name}>{record.name}</span>
      </div>
    );
  };

  renderOper = () => {
    return (
      <div>
        <a style={{ ...styles.link, ...styles.edit }}>修改</a>
        <a style={{ ...styles.link, ...styles.delete }}>删除</a>
      </div>
    );
  };

  render() {
    const dataSource = [
      {
        avatar:
          'https://avatars2.githubusercontent.com/u/26180429?s=460&v=4',
        name: 'Scarborough_Coral',
        email: 'corallee9797@gmail.com',
        role: 'owner',
        desc: '全面小白'
      },
      {
        avatar:
          'https://avatars2.githubusercontent.com/u/26338665?s=460&v=4',
        name: 'DearSummer',
        email: '暂无',
        role: 'member',
        desc: '游戏大神'
      },
      {
        avatar:
          'https://avatars1.githubusercontent.com/u/35656014?s=460&v=4',
        name: 'evilerSS',
        email: '暂无',
        role: 'member',
        desc: '前端大佬'
      },
      {
        avatar:
          'https://avatars2.githubusercontent.com/u/26783995?s=460&v=4',
        name: 'mo156130',
        email: '暂无',
        role: 'member',
        desc: '数学大师'
      },
    ];

    return (
      <IceContainer style={styles.container}>
        <ContainerTitle
          title="团队成员"
          buttonText="添加成员"
          style={styles.title}
        />
        <Table dataSource={dataSource} hasHeader={false} hasBorder={false}>
          <Table.Column dataIndex="name" cell={this.renderProfile} />
          <Table.Column dataIndex="email" />
          <Table.Column dataIndex="role" />
          <Table.Column dataIndex="desc"/>
          {/* <Table.Column cell={this.renderOper} /> */}
        </Table>
      </IceContainer>
    );
  }
}

const styles = {
  container: {
    padding: '0',
  },
  title: {
    borderBottom: '0',
  },
  profile: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    width: '24px',
    height: '24px',
    border: '1px solid #eee',
    background: '#eee',
    borderRadius: '50px',
  },
  name: {
    marginLeft: '15px',
    color: '#314659',
    fontSize: '14px',
  },
  link: {
    cursor: 'pointer',
    color: '#1890ff',
  },
  edit: {
    marginRight: '5px',
  },
};
