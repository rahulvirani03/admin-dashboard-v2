import React, { useEffect } from "react";
import styled from "styled-components";
import { NavLink, useHistory } from "react-router-dom";
import { Button, Container, FlexBetween } from "@components/custom";
import logo from "@assets/logo.svg";
import { colors, styles } from "@themes";
import { Button as AntdButton, notification } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import { getAuth, onAuthStateChanged, signOut } from "@firebase/auth";

const NavContainer = styled.div`
  background-color: ${colors.white};
  box-shadow: ${styles.boxShadow};
`;
const Logo = styled(NavLink)``;

const Links = styled.div``;

const Link = styled(NavLink)`
  display: inline-block;
  padding: 1.2em 1em;
  outline: none;
  color: ${colors.text};
  transition: all 0.2s;
  border-bottom: 3px solid transparent;
  &.active {
    border-bottom: 3px solid ${colors.primary};
    color: ${colors.primary};
  }
`;

export default function Navbar() {
  const auth = getAuth();
  const history = useHistory();
  const handleClick = () => {
    window.location.href = "https://startup-skill-assist.web.app/";
  };
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        history.push("/");
        notification["info"]({
          message: "Admin Logged Out",
        });
      })
      .catch((error) => {
        notification["error"]({
          message: error,
        });
      });
  };
  useEffect(() => {}, [auth]);
  return (
    <NavContainer>
      <Container>
        <FlexBetween>
          <Link to="/"> StartUp</Link>
          <Links>
            <AntdButton
              style={{ height: "100%", margin: "1rem", padding: ".5rem" }}
              icon={<LogoutOutlined />}
              onClick={handleLogout}
            />
            <Button type="primary" onClick={handleClick}>
              Go to Website
            </Button>
          </Links>
        </FlexBetween>
      </Container>
    </NavContainer>
  );
}
