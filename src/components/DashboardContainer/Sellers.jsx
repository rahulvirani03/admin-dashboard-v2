import React, { useState, useEffect } from "react";
import { getSellers } from "@/Firebase/firestore";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Spin, Card,Descriptions,List,Avatar } from "antd";
import { styles } from "@themes";
import { LoadingOutlined ,UserOutlined } from "@ant-design/icons";
const Container = styled.div`
  position: relative;
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
  margin-bottom: 1rem;
`;
export default function Sellers() {
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState("");

  useEffect(() => {
    setLoading(true);
    const sellersData = async () => {
      const result = await getSellers();
      setLoading(false);
      let temp = result.data;
      setData(result.data);
      console.log(data);
    };

    sellersData();
  }, []);
  return (
    <Container>
      {loading ? (
        <CustomSpin indicator={antIcon}></CustomSpin>
      ) : (
      
          <CustomCard>
             <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={item => (
      <List.Item>
        <List.Item.Meta
          avatar={<UserOutlined size="60px"/>}
          title={<a  onClick={() =>
            history.push({
              pathname: `/view-seller/${item.seller_id}`,
              state: { sellerdata: item },
            })
          }>{item.business_name}</a>}
          description={item.description}
          storelink={item.store_link}
        />
      </List.Item>
    )}
  />
          
          </CustomCard>
        
      )}
    </Container>
  );
}
