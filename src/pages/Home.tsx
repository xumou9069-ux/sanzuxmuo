import React, { useState } from 'react';
import { Card, Button, Typography, Layout, Menu, Avatar, Space, Dropdown } from 'antd';
import { Link } from 'react-router-dom';
import {
  UserOutlined,
  SettingOutlined,
  FileTextOutlined,
  DashboardOutlined,
  ShoppingCartOutlined,
  BarChartOutlined,
  BankOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
  SearchOutlined,
  BellOutlined,
  DownOutlined,
  AppstoreOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';

const { Title, Paragraph } = Typography;
const { Header, Sider, Content } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  { 
    key: 'dashboard', 
    icon: <DashboardOutlined />, 
    label: '后台首页' 
  },
  {
    key: 'user-management',
    label: '人事管理',
    icon: <UserOutlined />,
    children: [
      { key: 'user-list', label: '公司架构' },
      { key: 'user-roles', label: '员工列表' },
      { key: 'user-permissions', label: '管理设置' },
    ],
  },
  {
    key: 'business',
    label: '行政管理',
    icon: <ShoppingCartOutlined />,
    children: [
      { 
        key: 'attendance', 
        label: '考勤统计',
        children: [
          { key: 'attendance-list', label: '考勤列表' },
          { key: 'attendance-settings', label: '考勤设置' },
        ],
      },
      { key: 'canteen', label: '消费管理' },
      { 
        key: 'salary', 
        label: '薪资管理',
        children: [
          { key: 'salary-list', label: '薪资列表' },
          { key: 'salary-card', label: '工资卡管理' },
        ],
      },
    ],
  },
  {
    key: 'finance',
    label: '文档管理',
    icon: <BankOutlined />,
  },
  {
    key: 'reports',
    label: '任务事件',
    icon: <BarChartOutlined />,
    children: [
      { key: 'vehicle-management', label: '任务事件列表' },
      { key: 'driver-management', label: '管理设置' },
    ],
  },
  {
    key: 'documents',
    label: '文档平台管理',
    icon: <FileTextOutlined />,
    children: [
      { key: 'document-center', label: '团队设置' },
      { key: 'templates', label: '账号权限' },
      { key: 'archive', label: '个人设置' },
    ],
  }
];

const Home: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  // 用户下拉菜单
  const userMenuItems = [
    {
      key: 'profile',
      label: '个人资料',
      icon: <UserOutlined />,
    },
    {
      key: 'settings',
      label: '系统设置',
      icon: <SettingOutlined />,
    },
    {
      type: 'divider' as const,
    },
    {
      key: 'logout',
      label: '退出登录',
    },
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* 顶部导航栏 */}
      <Header style={{ 
        background: '#fff', 
        padding: '0 24px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        borderBottom: '1px solid #f0f0f0',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        height: '64px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <AppstoreOutlined style={{ fontSize: '20px', marginRight: '12px', color: '#1890ff' }} />
          <span style={{ fontSize: '16px', fontWeight: 'bold', color: '#333' }}>
            OA管理后台
          </span>
        </div>
        
        <Space size="large">
          <Button type="text" icon={<SettingOutlined />} style={{ color: '#666' }} />
          <Button type="text" icon={<SearchOutlined />} style={{ color: '#666' }} />
          <Button type="text" icon={<BellOutlined />} style={{ color: '#666' }} />
          
          <Dropdown menu={{ items: userMenuItems }} trigger={['click']}>
            <Space style={{ cursor: 'pointer' }}>
              <Avatar 
                src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" 
                size="small" 
              />
              <span style={{ color: '#333' }}>龙岗彭于晏</span>
              <span style={{ 
                background: '#52c41a', 
                color: 'white', 
                padding: '2px 6px', 
                borderRadius: '4px', 
                fontSize: '12px' 
              }}>
                管理员
              </span>
              <DownOutlined style={{ fontSize: '12px', color: '#666' }} />
            </Space>
          </Dropdown>
        </Space>
      </Header>
      
      <Layout style={{ marginTop: '64px' }}>
        <Sider 
          collapsible 
          collapsed={collapsed} 
          onCollapse={setCollapsed}
          trigger={null}
          width={256}
          collapsedWidth={80}
          theme="dark"
          style={{ height: 'calc(100vh - 64px)', position: 'fixed', left: 0, top: '64px', zIndex: 100 }}
        >
          <div style={{ padding: '16px', textAlign: 'center' }}>
            <Button 
              type="primary" 
              onClick={toggleCollapsed} 
              style={{ marginBottom: 16 }}
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            >
              {!collapsed && '收起菜单'}
            </Button>
          </div>
          <Menu
            defaultSelectedKeys={['dashboard']}
            defaultOpenKeys={['user-management']}
            mode="inline"
            theme="dark"
            items={items}
            style={{ borderRight: 0 }}
          />
        </Sider>
        
        <Layout style={{ marginLeft: collapsed ? '80px' : '256px', transition: 'margin-left 0.2s' }}>
          <Content style={{ padding: '24px', background: '#fff', minHeight: 'calc(100vh - 64px)', marginTop: 0 }}>
          <Card>
            <Title level={1}>
              <HomeOutlined style={{ marginRight: 8 }} />
              企业管理系统
            </Title>
            <Paragraph style={{ fontSize: '16px', color: '#666' }}>
              欢迎使用综合管理系统，这里集成了人员管理、业务管理、行政管理、交通管理等多个功能模块。请从左侧菜单选择您需要的功能。
            </Paragraph>
            
            <div style={{ marginTop: '32px' }}>
              <Title level={3}>快速导航</Title>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginTop: '16px' }}>
                <Card size="small" hoverable>
                  <div style={{ textAlign: 'center' }}>
                    <UserOutlined style={{ fontSize: '24px', color: '#1890ff', marginBottom: '8px' }} />
                    <div>人事管理</div>
                  </div>
                </Card>
                <Card size="small" hoverable>
                  <div style={{ textAlign: 'center' }}>
                    <ShoppingCartOutlined style={{ fontSize: '24px', color: '#52c41a', marginBottom: '8px' }} />
                    <div>行政管理</div>
                  </div>
                </Card>
                <Card size="small" hoverable>
                  <div style={{ textAlign: 'center' }}>
                    <BankOutlined style={{ fontSize: '24px', color: '#faad14', marginBottom: '8px' }} />
                    <div>文档管理</div>
                  </div>
                </Card>
                <Card size="small" hoverable>
                  <div style={{ textAlign: 'center' }}>
                    <BarChartOutlined style={{ fontSize: '24px', color: '#f5222d', marginBottom: '8px' }} />
                    <div>任务事件</div>
                  </div>
                </Card>
              </div>
            </div>

            <div style={{ marginTop: '32px' }}>
              <Link to="/about">
                <Button type="primary" size="large">
                  了解更多
                </Button>
              </Link>
            </div>
          </Card>
        </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Home;
