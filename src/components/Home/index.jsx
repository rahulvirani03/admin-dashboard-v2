import { Button, Card, Input } from 'antd'
import React from 'react'
import styled from 'styled-components'
import { Typography } from 'antd'
import { styles } from '@themes'
import { useHistory } from 'react-router';
const { Text } =Typography;

const Container=styled.div`
    width: fit-content;
    height: fit-content;
     margin: 0% auto;
    padding: 10rem 0;
    border-radius: ${styles.borderRadius};
   
`
export default function Landingpage() {
    const history=useHistory();
    const handleClick =() =>
    {
            history.push("/dashboard")
    }
    return (
        <Container>
            <Card style= {{margin:"0 auto", alignContent:"center", alignItems:"center"}}> 
                <Text>Email</Text>
                <Input type="email" placeholder="rahul@gmail.com"></Input>
                <Text>password</Text>
                <Input type="password" placeholder="*********"></Input>

                <Button style={{margin:'1rem auto', alignItems:"center" ,display:"flex", padding:" 0 2rem"} } onClick={handleClick} type="primary" >Login</Button>
            </Card>

        </Container>
      
    )
}
