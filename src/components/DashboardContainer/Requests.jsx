import axios from "axios";
import React, { useEffect, useState } from "react";
import { Descriptions, Card, Spin, Input, Button } from "antd";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { getSellersWithWhere } from "@/Firebase/firestore";
import { LoadingOutlined, SearchOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { styles } from "@themes";

const Container = styled.div`
  position: relative;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;
const CustomSpin = styled(Spin)`
  position: relative;
  top: 50%;
  margin: 200px 30rem;
`;
const CustomCard = styled(Card)`
  border-radius: ${styles.borderRadius};
  box-shadow: ${styles.boxShadow};
  margin-top: 1rem;
`;

export default function Requests() {
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [filterData, setFilterData] = useState(null);

  const [id, setId] = useState();
  useEffect(() => {
    setLoading(true);
    const sellersData = async () => {
      const result = await getSellersWithWhere();
      setLoading(false);
      setId(result.id);
      let temp = result.data;
      setData(result.data);
      setFilterData(result.data);
      console.log(data);
    };

    sellersData();
  }, []);
  const handleChange = (e) => {
   
    if(e.target.value==="")
    {
      setFilterData(data)
    }
    setFilterData(
      data.filter((requests) => requests.business_name.toLowerCase().includes(e.target.value.toLowerCase())));
    
  };
  
  return (
    <Container>
    
        <Input placeholder="Search Requests.. " onChange={handleChange} />
      {loading ? (
        <CustomSpin indicator={antIcon}></CustomSpin>
      ) : (
        filterData?.map((seller) => (
          <CustomCard
            key={seller.seller_id}
            onClick={() =>
              history.push({
                pathname: `/verify-seller/${seller.seller_id}`,
                state: { sellerdata: seller },
              })
            }
          >
            <Descriptions title={seller.business_name}>
              <Descriptions.Item label="Seller ID">
                {seller.seller_id}
              </Descriptions.Item>
              <Descriptions.Item label="Store Link">
                {seller.store_link}
              </Descriptions.Item>
              <Descriptions.Item label="Address">
                {seller.address}
              </Descriptions.Item>
            </Descriptions>
          </CustomCard>
        ))
      )}
    </Container>
  );
}
