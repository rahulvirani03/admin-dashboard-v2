import React from 'react'
import { Card, Typography } from 'antd'
import styled from 'styled-components'
import { styles, colors } from '@themes'
import { Link } from 'react-router-dom'
import { VERIFIEDSELLER } from '@utils/keyConstants'

const Container=styled.div`
     padding:2rem;
`;  
const TopContainer=styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;
const CustomCard=styled(Card)`
    text-align:center; 
    height:fit-content;
    width:30%;
    border-radius: ${styles.borderRadius};
    box-shadow: ${styles.boxShadow};
    margin-bottom: 2rem;
`;
const CategoryCard=styled(Card)`
    text-align:center; 
    height:50vh;
    width:100%;
    border-radius: ${styles.borderRadius};
    box-shadow: ${styles.boxShadow};
`;
const Heading=styled.h1`
    margin: 2rem 0;
    color:${colors.primary};
    font-size: large;
    font-size: 40px;
`;
const Bold=styled.b`
font-size: 20px;
`;
export default function TraficDashboard() {
    return (
        <Container>
        <TopContainer>
        <Link to= {`/dashboard?key=${VERIFIEDSELLER}`}><CustomCard>
              <Bold>Requests</Bold>
             <Heading>1000</Heading>
             <p>+10 since last year</p>
            </CustomCard></Link>
            <CustomCard>
              <Bold>Users</Bold>
             <Heading>8000</Heading>
             <p>+1000 since last month</p>
            </CustomCard>
            <CustomCard>
            <Bold>Sellers</Bold>
             <Heading>5000</Heading>
             <p>+500 since last month</p>
            </CustomCard>
        </TopContainer>
       <CategoryCard>
           <Bold> Categories </Bold>
       </CategoryCard>
    </Container>
    )
}
