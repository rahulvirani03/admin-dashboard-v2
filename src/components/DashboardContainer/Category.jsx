import React, { useEffect, useState } from "react";
import { Input, Button, Tag, Card, List, notification } from "antd";
import styled from "styled-components";
import { styles } from "@themes";
import { colors } from "@themes";
import { getCategories, setFirestoreCategories } from "@/Firebase/firestore";
const Container = styled.div`

  align-items: center;
  padding: 1rem;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
`;

const CustomCard = styled(Card)`
  color: ${colors.primary};
  background-color: ${colors["text-primary"]};
  margin: 5px;
  height: 5rem;
  min-width: 9rem;
  justify-content: center;
  font-size: ${styles.fontSmall};
  border-radius: ${styles.borderRadius};
  box-shadow: ${styles.boxShadow};

  text-align: center;
`;
const CustomDiv = styled.div`
  margin: 1rem auto;
  display: flex;
  justify-content: space-between;
`;
const CategoryContainer=styled.div`
display: flex;
flex-wrap: wrap;
 align-items: center;
 justify-content: center;
  padding: 1rem;
   
    align-items: center;
    margin: 0 auto;
`;

export default function Category() {
  const [value, setValue] = useState("");
  const [categories, setCategories] = useState([]);
  const [filterdata, setFilterData] = useState(categories);
  const [filter, setFilter] = useState("");
  const [res, setRes] = useState("");
  const handleClick = async () => {
    let res1 = await setFirestoreCategories(value);
    setRes(res1);
    console.log(res);
    notification["success"]({
        message:"Category Added"
    })
    setValue("")
  };
  const handleSearch = (e) => {
    console.log(e.target.value);
    setFilter(e.target.value);
    setFilterData(
      categories.filter((category) => category.data.name.toLowerCase().includes(e.target.value.toLowerCase()))
    );
  };
  useEffect(() => {
    const getFirestoreCategories = async () => {
      const result = await getCategories();
      console.log(result.data);
    
      setCategories(result.data);
      setFilterData(result.data)
      console.log(categories);
    };
    getFirestoreCategories();
    setRes("");
  }, [res]);
  return (
    <Container>
      <CustomDiv>
        <Input
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          placeholder="Enter Category"
        />
        <Button type="primary" onClick={handleClick}>
          Add Catexgory
        </Button>
      </CustomDiv>

      <CustomDiv>
        <Input
          style={{ width: "100%" }}
          placeholder="Search Category"
          onChange={handleSearch}
        />
      </CustomDiv>
        <CategoryContainer>
      {
        filterdata?.map(item =>{
            return <CustomCard key={item.id}>
            <p>{item.data.name}</p>
          
           </CustomCard>
          })
         
      }
      </CategoryContainer>
    </Container>
  );
}
