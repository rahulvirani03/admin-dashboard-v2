import React, { useEffect, useState } from "react";
import { Input, Button, Tag, Card, List, notification } from "antd";
import styled from "styled-components";
import { styles } from "@themes";
import { colors } from "@themes";
import {
  deleteCategory,
  getCategories,
  setFirestoreCategories,
} from "@utils/dbUtils";
import FeatherIcon from "feather-icons-react";

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
const CategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  align-items: center;
  margin: 0 auto;
`;

const DeleteBtn = styled(FeatherIcon)`
  position: absolute;
  right: 5px;
  top: 5px;
  cursor: pointer;
`;

export default function Category() {
  const [value, setValue] = useState("");
  const [categories, setCategories] = useState([]);
  const [filterdata, setFilterData] = useState([]);
  const [filter, setFilter] = useState("");
  const [res, setRes] = useState("");

  const handleClick = async () => {
    console.log({ value });
    let res1 = await setFirestoreCategories(value);
    setRes(res1);
    notification["success"]({
      message: "Category Added",
    });
    setValue("");
  };
  const handleSearch = (e) => {
    setFilter(e.target.value);
    setFilterData(
      categories.filter((category) =>
        category.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  const handleDelete = async (item) => {
    const res = await deleteCategory(item);

    notification["success"]({
      message: "Category Deleted",
    });
  };
  useEffect(() => {
    const getFirestoreCategories = async () => {
      const result = await getCategories();
      setCategories(result);
      setFilterData(result);
    };
    console.log("checkup");
    getFirestoreCategories();
    setRes("");
  }, [res]);
  useEffect(() => {}, [categories]);

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
        {filterdata?.map((item) => {
          return (
            <CustomCard key={item.id}>
              <DeleteBtn
                onClick={() => handleDelete(item)}
                icon="x-square"
                size="15"
              />
              <p>{item.name}</p>
            </CustomCard>
          );
        })}
      </CategoryContainer>
    </Container>
  );
}
