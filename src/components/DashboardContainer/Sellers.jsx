import React, { useState, useEffect } from "react";
import { getSellers } from "@/Firebase/firestore";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Spin, Input } from "antd";
import { styles,colors } from "@themes";
import { LoadingOutlined ,UserOutlined } from "@ant-design/icons";

const Container = styled.div`
display: flex;
  flex-wrap: wrap;  
  align-items: center;
 padding: 1rem;
  
`;
const CustomSpin = styled(Spin)`
  position: relative;
  top: 50%;
  margin: 200px 30rem;
`;
const CustomCard = styled.div`
text-align: center;
  padding: 0.5rem;
  min-width: 10rem;
  height: 15vh;
  margin:0.8rem;
  justify-content: center;
  box-shadow: ${styles.boxShadow};
  background-color: ${colors.white};
  border-radius: ${styles.borderRadius};
  cursor: pointer;
  @media only screen and (max-width:  600px) {
  margin: 1.5rem auto;
   
}

 
`;
export default function Sellers() {
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(false);
  const [filterData, setFilterData] = useState(null);


  useEffect(() => {
    setLoading(true);
    const sellersData = async () => {
      const result = await getSellers();
      setLoading(false);
      let temp = result.data;
      setData(result.data);
      setFilterData(result.data)
      console.log(data);
    };
    sellersData();
  }, []);
  const handleChange = (e) => {
    console.log(e.target.value);
    
    // if(e.target.value==="")
    // {
    //   setFilterData(data)
    // }
    setFilterData(
      data.filter((item)=> item.business_name?.toLowerCase().includes(e.target.value?.toLowerCase())));
    console.log(filterData);
  };
  return (
    <Container>
         <Input placeholder="Search Seller.. " onChange={handleChange} />
      {loading ? (
        <CustomSpin indicator={antIcon}></CustomSpin>
      ) : (
        filterData?.map(item =>{
          return <CustomCard key={item.id} onClick={() => history.push({
            pathname:`/view-seller/${item.id}`,
            state:{sellerdata:item}
          })}>
          <p>{item.displayName}</p>
           <a >{item.email}</a>
         </CustomCard>
        })
       
       
   
  
          
         
        
      )}
    </Container>
  );
}
