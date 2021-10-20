import React,{useState} from 'react';
import { Input,Button,Tag, Card } from 'antd';
import styled from 'styled-components';
import { styles } from '@themes';
import { colors } from '@themes';
const Container=styled.div`
   align-items: center;
    padding:2rem;
`  ;

const CustomButton=styled(Button)`
 
  &&{margin:0 auto};
  &&{margin-bottom: 2rem};
  &&{margin-top: 2rem};
  &&{margin-left: 2rem};
  &&{margin-right: 2rem};


`;
const CustomTagContainer=styled.div`
 display:grid;
   grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`
const CustomCard=styled(Card)`
color:${colors.primary};
background-color: ${colors['text-primary']};
margin: 5px;
font-size: ${styles.fontSmall};
border-radius:${styles.borderRadius};
box-shadow: ${styles.boxShadow};
height: fit-content;
text-align: center;


`
const CustomDiv=styled.div`

    margin:1rem auto;
    display: flex;
    justify-content: space-between;
`
export default function Category() {
    const handleClick= () =>{
            setFilterData([...filterdata,value])
            setValue("")
    }
    const [value,setValue]=useState("");
        const [categories,setCategories]=useState([
            "Clothing",
            "Cosmetics",
            "Jewellery",
            "Grocerry",
            "Footwear",
        ]);
        const [filterdata,setFilterData]=useState(categories);
        const [filter,setFilter]=useState([]);
        const handleSearch = (e) => {
                console.log(e.target.value);
                setFilter(e.target.value)
                setFilterData(categories.filter(category => category.includes(e.target.value)))
        }
    return (
       <Container>
          <CustomDiv> 
                <Input value={value} onChange={(e) =>{
                    setValue(e.target.value)
                    }} placeholder="Enter Category"/> 
                <Button  st type="primary" onClick={handleClick}>Add Catexgory</Button>     
           </CustomDiv>
           
           <CustomDiv>
            <Input  style={{width:"100%"}} placeholder="Search Category" onChange={handleSearch}/>
           </CustomDiv>
           <CustomTagContainer style={{display:"grid"}}>
            { 
                filterdata.map(cateogory => {
                   return<CustomCard style={{}}>{cateogory}</CustomCard>
            }
                )}
             </CustomTagContainer>
         
       </Container>
    )
}
