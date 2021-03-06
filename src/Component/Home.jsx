import React, {useState} from 'react';
import {Layout, Menu, Breadcrumb, List, Input, Dropdown, message, Avatar, Space, Carousel, Empty,Collapse, Button} from 'antd';
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  AudioOutlined,
  DownOutlined, StarOutlined, LikeOutlined, MessageOutlined,
} from '@ant-design/icons';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './Home.scss';
import dcard from '../dcard.svg'
import search from '../search.png'
import popular1 from '../popular01.jpeg'
import popular2 from '../popular02.png'
import popular3 from '../popular03.png'
import popular4 from '../popular04.jpeg'
import popular5 from '../popular05.png'



const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const {SubMenu} = Menu;
const {Header, Content, Sider} = Layout;
const listData = [];
const onClick = ({key}) => {
  message.info(`Click on item ${key}`);
};


const menu = (
  <Menu onClick={onClick}>
    <Menu.Item key="1">1st menu item</Menu.Item>
    <Menu.Item key="2">2nd menu item</Menu.Item>
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'https://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

const IconText = ({icon, text}) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const {Search} = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);

const onSearch = value => console.log(value);

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

function Home() {
  return (
    <Layout className="layout">
      <Header className="header">
        {/*<div className="logo" />*/}
        <div className='logo'>
          <img className='logo-img' src={dcard} alt=''/>
        </div>
        <div className='search'>

          <input className='input-search' placeholder='??????'/>
          <div className='search-icon'>
            <img src={search} alt=''/>
          </div>
        </div>
        <div>
          <Link to='/welcome'>
            ??????/?????? <DownOutlined/>
         </Link>
        </div>
      </Header>

      <Layout>
        <Router>
          <div>

            <Sider width={250} className="site-layout-background">
              <Menu
                className='menu'
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{height: '100%', borderRight: 0}}
              >

                <Menu.Item key="1"><Link to='/' className='menu-item'>????????????</Link></Menu.Item>
                <Menu.Item key="2"><Link to='/popular' className='menu-item'>????????????</Link></Menu.Item>
                <Menu.Item key="3"><Link to='goods' className='menu-item'>???????????????</Link></Menu.Item>
                <Menu.Item key="4"><Link to='games' className='menu-item'>????????????</Link></Menu.Item>
                <div className='menu-div'>??????????????????</div>
                <Menu.Item key="5">??????</Menu.Item>
                <Menu.Item key="6">??????</Menu.Item>
                <Menu.Item key="7">??????</Menu.Item>
                <Menu.Item key="8">??????</Menu.Item>
                <Menu.Item key="9">??????</Menu.Item>
                <Menu.Item key="10">??????</Menu.Item>
                <Menu.Item key="11">??????</Menu.Item>
                <Menu.Item key="12">??????</Menu.Item>
                <Menu.Item key="13">??????</Menu.Item>
              </Menu>
            </Sider>

          </div>

          <switch className='switch'>
            <Route exact path='/'>
              <Contant/>
            </Route>
            <Route exact path='/popular'>
              <Popular/>
            </Route>
            <Route exact path='/goods'>
              <Goods/>
            </Route>
            <Route exact path='/games'>
              <Games/>
            </Route>
          </switch>

        </Router>
      </Layout>
    </Layout>


  )
}
;
export default Home

function Contant() {
  return (
    <Layout className='cot-layout' style={{padding: '0 24px 24px'}}>
      <div className='cot' style={{paddingTop:'30px'}}>
        <Router className='cot-router' >
          <div className='cot-div' >
            <Menu mode="horizontal" defaultSelectedKeys={['2']} >
              <Menu.Item key="1"><Link to='/hot' className='menu-item'>??????</Link></Menu.Item>
              <Menu.Item key="2"><Link to='/' className='menu-item'>??????</Link></Menu.Item>
              <Menu.Item key="3"><Link to='/follow' className='menu-item'>??????</Link></Menu.Item>
              <Menu.Item key="4"><Link to='/topic' className='menu-item'>??????</Link></Menu.Item>
            </Menu>
            <Switch style={{width: '100%'}} >
              <Route className='route' exact path='/' >
                <List
                  style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}
                  className='pagenation'
                  itemLayout="vertical"
                  size="large"
                  pagination={{
                    onChange: page => {
                      console.log(page);
                    },
                    pageSize: 3,
                  }}
                  dataSource={listData}

                  renderItem={item => (
                    <List.Item
                      key={item.title}
                      actions={[
                        <IconText icon={StarOutlined} text="156" key="list-vertical-star-o"/>,
                        <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o"/>,
                        <IconText icon={MessageOutlined} text="2" key="list-vertical-message"/>,
                      ]}
                      extra={
                        <img
                          className='list-img'
                          width={272}
                          alt="logo"
                          src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                        />
                      }
                    >
                      <List.Item.Meta
                        avatar={<Avatar src={item.avatar}/>}
                        title={<a href={item.href}>{item.title}</a>}
                        description={item.description}
                      />
                      {item.content}
                    </List.Item>
                  )}
                />
              </Route>
              <Route path='/hot'>
                <List
                  style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}
                  className='pagenation'
                  itemLayout="vertical"
                  size="large"
                  pagination={{
                    onChange: page => {
                      console.log(page);
                    },
                    pageSize: 3,
                  }}
                  dataSource={listData}

                  renderItem={item => (
                    <List.Item
                      key={item.title}
                      actions={[
                        <IconText icon={StarOutlined} text="156" key="list-vertical-star-o"/>,
                        <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o"/>,
                        <IconText icon={MessageOutlined} text="2" key="list-vertical-message"/>,
                      ]}
                      extra={
                        <img
                          className='list-img'
                          width={272}
                          alt="logo"
                          src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                        />
                      }
                    >
                      <List.Item.Meta
                        avatar={<Avatar src={item.avatar}/>}
                        title={<a href={item.href}>{item.title}</a>}
                        description={item.description}
                      />
                      {item.content}
                    </List.Item>
                  )}
                />
              </Route>
              <Route  path='/follow'>
                <Empty style={{margin:'150px'}} className='empty'/>
              </Route>
              <Route path='/topic'>
                <Carousel autoplay>
                  <div>
                    <h3 style={contentStyle}>banner1</h3>
                  </div>
                  <div>
                    <h3 style={contentStyle}>banner2</h3>
                  </div>
                  <div>
                    <h3 style={contentStyle}>banner3</h3>
                  </div>
                  <div>
                    <h3 style={contentStyle}>banner4</h3>
                  </div>
                </Carousel>
                <List
                  style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}
                  className='pagenation'
                  itemLayout="vertical"
                  size="large"
                  pagination={{
                    onChange: page => {
                      console.log(page);
                    },
                    pageSize: 2,
                  }}
                  dataSource={listData}

                  renderItem={item => (
                    <List.Item
                      key={item.title}
                      actions={[
                        <IconText icon={StarOutlined} text="156" key="list-vertical-star-o"/>,
                        <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o"/>,
                        <IconText icon={MessageOutlined} text="2" key="list-vertical-message"/>,
                      ]}
                      extra={
                        <img
                          className='list-img'
                          width={272}
                          alt="logo"
                          src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                        />
                      }
                    >
                      <List.Item.Meta
                        avatar={<Avatar src={item.avatar}/>}
                        title={<a href={item.href}>{item.title}</a>}
                        description={item.description}
                      />
                      {item.content}
                    </List.Item>
                  )}
                />
              </Route>
            </Switch>
          </div>
        </Router>

      </div>

    </Layout>
  )
}

function Popular() {
  return (
    <div style={{maxWidth:'996px', padding:'30px 24px 0 24px'}}>
      <div>
        <span style={{fontSize:'32px',display:'flex',alignItems:"center",paddingBottom:'24px'}}>????????????</span>
      </div>
      <Collapse accordion>
        <Panel header="???????????? - ??????????????? | ?????????" key="1">
          <p>{<div style={{display:'flex',justifyContent:'space-between'}}><div><img style={{width:'24px'}} src={popular1} alt=''/><span>??????</span></div> <Button type="primary">??????</Button></div>}</p>
          <p>{<div style={{display:'flex',justifyContent:'space-between'}}><div><img style={{width:'24px'}} src={popular2} alt=''/><span>??????</span></div> <Button type="primary">??????</Button></div>}</p>
          <p>{<div style={{display:'flex',justifyContent:'space-between'}}><div><img style={{width:'24px'}} src={popular3} alt=''/><span>????????????</span></div> <Button type="primary">??????</Button></div>}</p>
          <p>{<div style={{display:'flex',justifyContent:'space-between'}}><div><img style={{width:'24px'}} src={popular4} alt=''/><span>??????</span></div> <Button type="primary">??????</Button></div>}</p>
          <p>{<div style={{display:'flex',justifyContent:'space-between'}}><div><img style={{width:'24px'}} src={popular5} alt=''/><span>APEX??????</span></div> <Button type="primary">??????</Button></div>}</p>

        </Panel>
        <Panel header="???????????? - ?????? | ?????? | ????????????" key="2">
          <p>{text}</p>
        </Panel>
        <Panel header="???????????? - ?????? | ?????? | ??????" key="3">
          <p>{text}</p>
        </Panel>
      </Collapse>
    </div>
  )
}

function Goods() {
  return (
    <div>
      goods
    </div>
  )
}

function Games() {
  return (
    <div>
      games
    </div>
  )
}