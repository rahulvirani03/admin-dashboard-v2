import { Alert, Card, Input, Tag, Form } from "antd";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Typography } from "antd";
import { colors } from "@themes";
import { styles } from "@themes";
import { useHistory } from "react-router";
const { Text } = Typography;
import { Button } from "@components/custom";
import { app, auth } from "@/Firebase/firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "@firebase/auth";

const Container = styled.div`
  max-width: ${styles.maxWidth};
  display: grid;
  grid-template-columns: 1fr 400px;
  justify-content: space-between;
  gap: 80px;
  margin: 0% auto;
  padding: 10rem 0;
  border-radius: ${styles.borderRadius};
`;

const CustomCard = styled(Card)`
  text-align: center;
  border-radius: ${styles.borderRadius};
  box-shadow: ${styles.boxShadow};
  margin-bottom: 2rem;
`;

const CustomLoginCard = styled(Card)`
  height: fit-content;
  width: 400px;
  border-radius: ${styles.borderRadius};
  box-shadow: ${styles.boxShadow};
  margin-bottom: 2rem;
`;

const Heading = styled.h1`
  margin: 2rem 0;
  color: ${colors.primary};
  font-size: large;
  font-size: 40px;
`;
const Bold = styled.b`
  font-size: 20px;
`;
export default function Landingpage() {
  const [login, setLogin] = useState('');
  const [creds, setCreds] = useState({
    email: "",
    password: "",
  });
  const [err, setErr] = useState(false);
  const history = useHistory();

  useEffect(() => {
    auth.onAuthStateChanged((login) => {
      if (login) {
        setLogin(login);
      } else {
        setLogin("");
      }
    });
  }, []);

  const handleClick = async () => {
    try {
      const res = await signInWithEmailAndPassword(
        auth,
        creds.email,
        creds.password
      );
      console.log(res.user.email);
      if (res.user) {
        history.push("/dashboard");
      }
    } catch (e) {
      setErr(true);
      return;
    }
  };
  const handleChange = (e) => {
    setCreds({ ...creds, [e.target.name]: e.target.value });
  };
  return (
    <div>
      {login ? (
        history.push("/dashboard")
      ) : (
        <Container>
          <Card>
            <CustomCard>
              <Bold>Users</Bold>
              <Heading>8000</Heading>
              <p>+1000 since last month</p>
            </CustomCard>
            <CustomCard>
              <Bold>Sellers</Bold>
              <Heading>5000</Heading>
              <p>+500 since last month</p>
            </CustomCard>
          </Card>
          <CustomLoginCard>
            {err && <Alert message="Invalid Creds" type="error" showIcon />}
            <Text>Email</Text>

            <Input
              name="email"
              type="email"
              onChange={handleChange}
              placeholder="rahul@gmail.com"
            ></Input>
            <Text>password</Text>
            <Input
              name="password"
              type="password"
              onChange={handleChange}
              placeholder="*********"
            ></Input>

            <Button
              style={{
                margin: "1rem auto",
                alignItems: "center",
                display: "flex",
                padding: " 0.5rem 2rem",
              }}
              onClick={handleClick}
              type="primary"
            >
              Login
            </Button>
          </CustomLoginCard>
        </Container>
      )}
    </div>
  );
}
