import React, { useState} from "react";
import { useHistory } from "react-router-dom";
import { Spin, Card } from "antd";
import styled from "styled-components";
import {styles } from "@themes";
import { doc, updateDoc } from "firebase/firestore";
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

export default function SellerView({ location }) {

  const history = useHistory();
  const [data, setData] = useState(location.state.sellerdata);

  const handleApprove = async () => {
   
    history.goBack();
  };
  return (
    <Container>
      {
        <CustomCard>
          <div>Name: {data.business_name}</div>
          <div>id: {data.seller_id}</div>
          <div>address: {data.address}</div>
          <div>Aadhar or Pan: {data.aadharorpan}</div>
          <div>Store Link: {data.store_link}</div>
          <div>description: {data.description}</div>
        
            <Button
              style={{ margin: "0.5rem", width: "6rem", textAlign: "center" }}
              onClick={handleApprove}
            >
              Go Back
            </Button>
           
             
    
        </CustomCard>
      }
    </Container>
  );
}
