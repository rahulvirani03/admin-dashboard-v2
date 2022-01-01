import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Spin, Card, Form, Input, Image } from "antd";
import styled from "styled-components";
import { colors, styles } from "@themes";
import { Button } from "@components/custom";
const Container = styled.div`
  margin: 0 auto;
  max-width: ${styles.maxWidth};
  align-items: center;
  justify-content: center;
`;
const CustomSpin = styled(Spin)`
  position: relative;
  top: 50%;
  margin: 200px 30rem;
`;
const CustomCard = styled(Card)`
  border-radius: ${styles.borderRadius};
  box-shadow: ${styles.boxShadow};
  margin: 1rem;
`;

export default function index() {
  const location = useLocation();
  const history = useHistory();
  const [data, setData] = useState(location.state.sellerdata);

  const handleApprove = async () => {
    history.goBack();
  };
  return (
    <Container>
      {
        <CustomCard>
          <Form
            layout="vertical"
            initialValues={{
              uid: data.uid,
              displayName: data.displayName,
              email: data.email,
              phoneNumber: data.phoneNumber,
              businessName:data.businessName,
              address: data.address,
              description: data.description,
              document: data.document,
            }}
            name="Form View"
          >
          
            {
              data.isSeller ?  <h2 style={{ textAlign: "center" }}> Seller Informarion </h2> : <h2 style={{ textAlign: "center" }}> User Informarion </h2>
            }
           
            <Form.Item name="uid" label="Uid">
              <Input name="uid" />
            </Form.Item>
            <Form.Item name="displayName" label="Name">
              <Input name="displayName" />
            </Form.Item>
            <Form.Item name="email" label="Email">
              <Input name="email" />
            </Form.Item>
            <Form.Item name="phoneNumber" label="Phone">
              <Input name="phoneNumber" />
            </Form.Item>
            {data.isSeller && (
              <div>
                <Form.Item name="businessName" label="Business Name">
                  <Input name="businessName" />
                </Form.Item>
                <Form.Item name="description" label="Description">
                  <Input name="description" />
                </Form.Item>
                <Form.Item name="address" label="Address">
                  <Input name="address" />
                </Form.Item>

                <Form.Item name="document" label="Document">
                  <Image
                    style={{ heigth: "10rem", width: "10rem" }}
                    src={data.document?.documentURL}
                  />
                </Form.Item>
              </div>
            )}
          </Form>
          {/* <div>Name: {data.displayName}</div>
          <div>id: {data.uid}</div>
          <div>address: {data.address}</div>
          <div>Aadhar or Pan: {data.aadharorpan}</div>
          <div>Store Link: {data.email}</div>
          <div>description: {data.phoneNumber}</div>
 */}
          <Button
            style={{ margin: "0.5rem", width: "6rem", textAlign: "center",backgroundColor:colors.primary, color:colors.white}}
            onClick={handleApprove}
          >
            Go Back
          </Button>
        </CustomCard>
      }
    </Container>
  );
}
