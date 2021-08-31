import React, {useState} from 'react';
import {Layout, Menu, Breadcrumb,List, Avatar, Space,Input,Dropdown, message} from 'antd';
import {UserOutlined, LaptopOutlined, NotificationOutlined, MessageOutlined, LikeOutlined, StarOutlined,AudioOutlined,DownOutlined } from '@ant-design/icons';
import './App.css';
import dcard from './dcard.svg'
const {SubMenu} = Menu;
const {Header, Content, Sider} = Layout;
const listData = [];
const onClick = ({ key }) => {
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

const IconText = ({ icon, text }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);

const { Search } = Input;

const suffix = (
    <AudioOutlined
        style={{
            fontSize: 16,
            color: '#1890ff',
        }}
    />
);

const onSearch = value => console.log(value);
const App = () => (
    <Layout className="layout">
        <Header className="header">
            {/*<div className="logo" />*/}
            <div className='logo'>
                <img src={dcard} alt=''/>
            </div>
            <Space direction="vertical">
                <Search autoSize={{ minRows: 2, maxRows: 3 }} placeholder="input search text" onSearch={onSearch} enterButton />
            </Space>
            <Dropdown  overlay={menu}>
                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    註冊/登入 <DownOutlined />
                </a>
            </Dropdown>
        </Header>
        <Layout>
            <Sider width={250} className="site-layout-background">
                <Menu
                    className='menu'
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{height: '100%', borderRight: 0}}
                >

                        <Menu.Item key="1">所有看板</Menu.Item>
                        <Menu.Item key="2">及時熱門看板</Menu.Item>
                        <Menu.Item key="3">好物研究室</Menu.Item>
                        <Menu.Item key="4">遊戲專區</Menu.Item>
                        <div className='menu-div'>及時熱門看板</div>
                        <Menu.Item key="5">感情</Menu.Item>
                        <Menu.Item key="6">心情</Menu.Item>
                        <Menu.Item key="7">閒聊</Menu.Item>
                        <Menu.Item key="8">女孩</Menu.Item>
                        <Menu.Item key="9">有趣</Menu.Item>
                        <Menu.Item key="10">梗圖</Menu.Item>
                        <Menu.Item key="11">美妝</Menu.Item>
                        <Menu.Item key="12">追星</Menu.Item>
                        <Menu.Item key="13">更多</Menu.Item>
                </Menu>
            </Sider>
            <Layout style={{padding: '0 24px 24px'}}>

                <Menu mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1">熱門</Menu.Item>
                    <Menu.Item key="2">最新</Menu.Item>
                    <Menu.Item key="3">追蹤</Menu.Item>
                    <Menu.Item key="3">主題</Menu.Item>
                </Menu>
                <List
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
                                <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                                <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                                <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
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
                                avatar={<Avatar src={item.avatar} />}
                                title={<a href={item.href}>{item.title}</a>}
                                description={item.description}
                            />
                            {item.content}
                        </List.Item>
                    )}
                />
            </Layout>
        </Layout>
    </Layout>


);
export default App