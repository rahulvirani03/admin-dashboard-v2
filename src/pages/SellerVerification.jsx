import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getSellers } from "@/Firebase/firestore";
import { Spin,Card } from "antd";
import styled from "styled-components";
import { LoadingOutlined } from '@ant-design/icons';
import { colors, styles } from "@themes";
import { Button } from "@components/custom";
import { doc, updateDoc,getFirestore} from "firebase/firestore";
import { app } from "@/Firebase/firebase";
const Container=styled.div`
  margin: 0 auto;
  max-width:${styles.maxWidth};
  align-items: center;
  justify-content: center;
`;
const CustomSpin=styled(Spin)`
   
   position: relative;
  top: 50%;
  margin: 200px 30rem; 

      
`
const CustomCard = styled(Card)`
  
  border-radius: ${styles.borderRadius};
  box-shadow: ${styles.boxShadow};
  margin: 1rem;
`;

export default function SellerVerification({location}) {
    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
    const db=getFirestore(app);

   

  const history = useHistory();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [docId,setDocId]=useState("")
  let sdata;
  const [data, setData] = useState(location.state.sellerdata);


const handleApprove= async() => {
 let sellerRef="";
  sellerRef = doc(db, "seller", `${data.business_name}`);
  console.log(sellerRef);
  const output=await updateDoc(sellerRef,{
    isSeller:true
  });
  console.log(output);
  history.push('/dashboard?key=requests')
  
}
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
              <div style={{display:"flex"}}> 
              <Button style={{margin:"0.5rem", width:"6rem",textAlign:"center"}} onClick={handleApprove}>Approve</Button>
              <Button style={{margin:"0.5rem", width:"6rem",textAlign:"center",backgroundColor:"red"}}>Reject</Button>
              </div>
              </CustomCard>
       }
    </Container>
  );
}
