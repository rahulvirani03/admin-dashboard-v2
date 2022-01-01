import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Spin, Input, Tabs } from "antd";
import { styles, colors } from "@themes";
import { LoadingOutlined, UserOutlined } from "@ant-design/icons";
import { getSellers, getUsers } from "@utils/dbUtils";

const { TabPane } = Tabs;
const Container = styled.div`
  display: flex;

 // grid-template-columns: repeat(4, 1fr);
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
  min-width: 15rem;
  height: 15vh;
  margin: 0.8rem;
  justify-content: center;
  align-items: center;
  box-shadow: ${styles.boxShadow};
  background-color: ${colors.white};
  border-radius: ${styles.borderRadius};
  cursor: pointer;
  @media only screen and (max-width: 600px) {
    margin: 1.5rem auto;
  }
`;
export default function Sellers() {
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(false);
  const [filterData, setFilterData] = useState(null);
  const [filterUsers, setFilterUsers] = useState(null);
  const [users, setUsers] = useState(null);

  useEffect(() => {
    setLoading(true);
    const sellersData = async () => {
      const result = await getSellers();
      const result1 = await getUsers();
      setLoading(false);
      let temp = result.data;
      setData(result.data);
      setUsers(result1.data);
      setFilterData(result.data);
      setFilterUsers(result1.data);
    };
    sellersData();
  }, []);
  const handleSellerChange = (e) => {
    setFilterData(
      data.filter((item) =>
        item.businessName?.toLowerCase().includes(e.target.value?.toLowerCase())
      )
    );
  };
  const handleUserChange = (e) => {
    console.log(e.target.value);
    setFilterUsers(
      users.filter((item) =>
        item.displayName?.toLowerCase().includes(e.target.value?.toLowerCase())
      )
    );
  };

  return (
    <Tabs style={{ width: "100%" }} defaultActiveKey="1">
      <TabPane tab="Users" key="2">
       
       <Input placeholder="Search User.. " onChange={handleUserChange} />
       <Container>
       {loading ? (
         <CustomSpin indicator={antIcon}></CustomSpin>
       ) : (
         filterUsers?.map((item) => {
           return (
             <CustomCard
               key={item.id}
               onClick={() =>
                 history.push({
                   pathname: `/view-seller/${item.id}`,
                   state: { sellerdata: item },
                 })
               }
             >
               <p>{item.displayName}</p>
               <a>{item.email}</a>
             </CustomCard>
           );
         })
       )}
     </Container>
   </TabPane>
      <TabPane tab="Sellers" key="1">
       
          <Input placeholder="Search Seller.. " onChange={handleSellerChange} />
          <Container>
          {loading ? (
            <CustomSpin indicator={antIcon}></CustomSpin>
          ) : (
            filterData?.map((item) => {
              return (
                <CustomCard
                  key={item.id}
                  onClick={() =>
                    history.push({
                      pathname: `/view-seller/${item.id}`,
                      state: { sellerdata: item },
                    })
                  }
                >
                  <p>{item.businessName}</p>
                  <a>{item.email}</a>
                </CustomCard>
              );
            })
          )}
        </Container>
      </TabPane>
      
    </Tabs>
  );
}
