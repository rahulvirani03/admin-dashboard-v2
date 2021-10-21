import React, { useState } from "react";
import styled from "styled-components";
import { Menu, Button } from "antd";
import {
  DatabaseOutlined,
  UserOutlined,
  SettingOutlined,
  ShareAltOutlined,
  BgColorsOutlined,
  SafetyOutlined,
  UnorderedListOutlined,
  MessageFilled,
} from "@ant-design/icons";
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
  grid-template-columns: max-content 1fr;
  gap: 30px;
`;
const MenuContainer = styled.div`
  margin: 0 auto;
  box-shadow: ${styles.boxShadow};
`;
const RenderComponent = styled.div`
  box-shadow: ${styles.boxShadow};
  background-color: ${colors.white};
`;
export default function AdminDashboard({ location }) {
  const history = useHistory();
  const query = new URLSearchParams(location.search);
  const key = query.get("key") || SELLER;
  //const [key,setKey]=useState('dashboard');

  return (
    <Container>
      <MenuContainer>
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
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
            icon={<UserOutlined />}
            onClick={() => {
              history.replace(`/dashboard?key=${ADDSELLER}`);
            }}
          >
            Add Seller
          </Menu.Item>
          <Menu.Item
            key="verified-seller"
            icon={<SafetyOutlined />}
            onClick={() => {
              history.replace(`/dashboard?key=${VERIFIEDSELLER}`);
            }}
          >
            Seller Verification
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
      </MenuContainer>
      <RenderComponent>
        {key === REQUESTS && <Requests />}
        {key === SELLER && <Sellers />}
        {key === ADDSELLER && <AddSeller />}
        {key === THEME && <Theme />}
        {key === ADS && <Ads />}
        {key === CATEGORY && <Category />}
        {key === SERVICE && <Service />}
        {key === POPUPS && <Popups />}
        {key === SETTINGS && <Settings />}
      </RenderComponent>
    </Container>
  );
}
