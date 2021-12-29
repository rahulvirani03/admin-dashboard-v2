import axios from "axios";
import React, { useEffect, useState } from "react";
import { Descriptions, Card, Spin, Input, Button } from "antd";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { LoadingOutlined, SearchOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { styles } from "@themes";
import { getSellersWithWhere } from "@utils/dbUtils";
import { query, onSnapshot, collection, where } from "@firebase/firestore";
import { db } from "@/Firebase/firebase";
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
  const [data, setData] = useState();
  const [filterData, setFilterData] = useState();

  const [id, setId] = useState();
  useEffect(() => {
   
    setLoading(true);

    sellersData();
  }, []);

  const sellersData = async () => {
    const q = query(
      collection(db, "seller-request"),
      where("isVerified", "==", false)
    );
    onSnapshot(q, (qs) => {
      const temp = [];
      qs.forEach((doc) => {
        temp.push(doc.data());
      });
      console.log(...temp);
      setData(temp);
      setFilterData(temp);
    });
  };

  const handleChange = (e) => {
    if (e.target.value === "") {
      setFilterData(data);
    }
    setFilterData(
      data.filter((requests) =>
        requests.business_name
          .toLowerCase()
          .includes(e.target.value.toLowerCase())
      )
    );
  };

  return (
    <Container>
      <Input placeholder="Search Requests.. " onChange={handleChange} />
      {filterData?.map((seller) => {
        return (
          <CustomCard
            key={seller.uid}
            onClick={() =>
              history.push({
                pathname: `/verify-seller/${seller.uid}`,
                state: { sellerdata: seller },
              })
            }
          >
            {" "}
            <Descriptions title={seller.username}>
              <Descriptions.Item label="Seller ID">
                {seller.uid}
              </Descriptions.Item>
              <Descriptions.Item label="Username">
                {seller.email}
              </Descriptions.Item>
            </Descriptions>
          </CustomCard>
        );
      })}
    </Container>
  );
}
