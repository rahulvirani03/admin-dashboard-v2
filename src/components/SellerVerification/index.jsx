import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Card } from "@components/custom";
import styled from "styled-components";
import { colors, styles } from "@themes";
import { Button, Field, FlexContainer, Label } from "@components/custom";
import Input from "@components/custom/Input";
import { Image, Spin } from "antd";
import { approveUser, getSellerToVerify } from "@utils/dbUtils";

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

export default function index({}) {
  const location = useLocation();
  const history = useHistory();
  const uid = location.state.sellerdata.uid;
  const [seller, setSeller] = useState({});
  const [data, setData] = useState(location.state.sellerdata);

  const handleApprove = async () => {
  
    const output = await approveUser(uid,seller);
    history.push("/dashboard?key=requests");
  };

  const getSellerData = async () => {
    const result = await getSellerToVerify(uid);
    console.log(result);
    setSeller(result);
  };
  useEffect(() => {
    getSellerData();
  }, []);
  return (
    <Container>
      <Card style={{ marginTop: "2rem" }}>
        <Field>
          <Label>ID</Label>
          <Input value={seller?.uid} disabled />
        </Field>
        <Field>
          <Label>Name</Label>
          <Input value={seller?.displayName} disabled />
        </Field>
        <Field>
          <Label>Email</Label>
          <Input value={seller?.email} disabled />
        </Field>
        <Field>
          <Label>Phone Number</Label>
          <Input value={seller?.phoneNumber} disabled />
        </Field>
        <Field>
          <Label>Business Name</Label>
          <Input value={seller?.businessName} disabled />
        </Field>
        <Field>
          <Label>Desciption</Label>
          <Input value={seller?.description} disabled />
        </Field>
        <Field>
          <Label>Aadhar or PAN</Label>
          <Input value={seller?.aadharOrPan} disabled />
        </Field>
        <Field>
          <Label>GSTIN</Label>
          <Input value={seller?.gstin} disabled />
        </Field>
        <Field>
          <Label>Document Name</Label>
          <Input value={seller?.document?.documentName} disabled />
        </Field>
        <Field>
          <Label>Document</Label>
          <Image
            style={{ width: "6rem", height: "6rem" }}
            src={seller?.document?.documentURL}
          />
        </Field>
        <Field>
          <Label>Store Images</Label>
          {seller?.storeImages && (
            <FlexContainer>
              {seller?.storeImages.map((item) => {
                return (
                  <Image
                    key={item.imageURL}
                    style={{ width: "6rem", height: "6rem" }}
                    src={item?.imageURL}
                  />
                );
              })}
            </FlexContainer>
          )}
        </Field>

        <div style={{ display: "flex" }}>
          <Button
            type="primary"
            style={{ margin: "0.5rem", width: "6rem", textAlign: "center" }}
            onClick={handleApprove}
          >
            Approve
          </Button>
          <Button
            onClick={() => history.push("/dashboard?key=requests")}
            style={{
              margin: "0.5rem",
              width: "6rem",
              textAlign: "center",
              color: colors.white,
              backgroundColor: "red",
            }}
          >
            Reject
          </Button>
        </div>
      </Card>
    </Container>
  );
}
