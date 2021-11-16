import React,{useState} from 'react'
import { Layout, Menu } from 'antd';
import {
    DatabaseOutlined,
    UserOutlined,
    SettingOutlined,
    ShareAltOutlined,
    BgColorsOutlined,
    UnorderedListOutlined,
    MessageFilled,
    UserAddOutlined
  
} from '@ant-design/icons';
import styled from "styled-components";
import { styles, colors } from "@themes";
import {
  ADS,
  CATEGORY,
  REQUESTS,
  POPUPS,
  SELLER,
  SERVICE,
  SETTINGS,
  THEME,
  ADDSELLER,
} from "@utils/keyConstants";
import Sellers from "@components/DashboardContainer/Sellers";
import Theme from "@components/DashboardContainer/Theme";
import Category from "@components/DashboardContainer/Category";
import Service from "@components/DashboardContainer/Service";
import Popups from "@components/DashboardContainer/Popups";
import Settings from "@components/DashboardContainer/Settings";
import { useHistory } from "react-router-dom";
import Ads from "@components/DashboardContainer/Ads";
import AddSeller from "@components/DashboardContainer/AddSeller";
import Requests from "@components/DashboardContainer/Requests";

const Container = styled.div`
  padding: 1.5rem;
  display: grid;
  grid-template-columns: minmax( 1fr);
  gap: 30px;
  height:70vh;
`;
const MenuContainer = styled.div`

  margin: 0 auto;
  box-shadow: ${styles.boxShadow};
`;
const RenderComponent = styled.div`
  border: 1px solid ${colors.greyLight};
  border-radius: ${styles.borderRadius};

`;
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default function index() {

const history = useHistory();
    const query = new URLSearchParams(location.search);
    const key = query.get("key") || REQUESTS;
  
    const [collapsed,setCollapsed]=useState(false)
    
    const handleCollapse = () => {
    setCollapsed(!collapsed)
}
    return (
      <Container>
        <Layout  style={{ backgroundColor:`${colors.white}`,margin:"2px", borderRadius:`${styles.borderRadius}` , boxShadow:`${styles.boxShadow}`, minHeight: '100vh'    }} >
        <Sider  
        theme="dark"
        breakpoint="md"
        collapsedWidth="50"
        collapsible collapsed={collapsed} onCollapse={handleCollapse}>
          <div className="logo" />
          <Menu
          defaultSelectedKeys={REQUESTS}
         key={REQUESTS}
        >
          <Menu.Item
            key="dashboard"
            icon={<DatabaseOutlined />}
            onClick={() => {
              history.replace(`/dashboard?key=${REQUESTS}`);
            }}
          >
           Requests
          </Menu.Item>

          <Menu.Item
            key="seller"
            icon={<UserOutlined />}
            onClick={() => {
              history.replace(`/dashboard?key=${SELLER}`);
            }}
          >
            Seller
          </Menu.Item>
          <Menu.Item
            key="add-seller"
            icon={<UserAddOutlined />}
            onClick={() => {
              history.replace(`/dashboard?key=${ADDSELLER}`);
            }}
          >
            Add Seller
          </Menu.Item>
          <Menu.Item
            key="categories"
            icon={<UnorderedListOutlined />}
            onClick={() => {
              history.replace(`/dashboard?key=${CATEGORY}`);
            }}
          >
            Categories
          </Menu.Item>
          <Menu.Item
            key="popups"
            icon={<MessageFilled />}
            onClick={() => {
              history.replace(`/dashboard?key=${POPUPS}`);
            }}
          >
            Pop-ups
          </Menu.Item>
          <Menu.Item
            key="themes"
            icon={<BgColorsOutlined />}
            onClick={() => {
              history.replace(`/dashboard?key=${THEME}`);
            }}
          >
            Themes
          </Menu.Item>
          <Menu.Item
            key="ads"
            icon={<ShareAltOutlined />}
            onClick={() => {
              history.replace(`/dashboard?key=${ADS}`);
            }}
          >
            Ad Request
          </Menu.Item>
          <Menu.Item
            key="service"
            icon={<SettingOutlined />}
            onClick={() => {
              history.replace(`/dashboard?key=${SERVICE}`);
            }}
          >
            Servie Assistance
          </Menu.Item>
        </Menu>
        </Sider>
        <Layout style={{backgroundColor:`${colors.white}`,margin:"2px", borderRadius:`${styles.borderRadius}` , boxShadow:`${styles.boxShadow}`}}>
        {key === REQUESTS && <Requests />}
        {key === SELLER && <Sellers />}
        {key === ADDSELLER && <AddSeller />}
        {key === THEME && <Theme />}
        {key === ADS && <Ads />}
        {key === CATEGORY && <Category />}
        {key === SERVICE && <Service />}
        {key === POPUPS && <Popups />}
        {key === SETTINGS && <Settings />}
        </Layout>
      </Layout>
      </Container>
     
    )
}
