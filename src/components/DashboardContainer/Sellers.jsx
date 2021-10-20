import React, { forwardRef, useState,useEffect } from 'react'
import { colors,styles } from '@themes';
import styled from 'styled-components';
import { Button,Input, InputNumber, Modal,Form, Radio } from 'antd';
import axios from 'axios';
const Container =styled.div`

`;
const TableContainer=styled.div`
    
    max-width: 1055px;
    display:block;
    
    
`;
export default function Sellers() {

  const layout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const onFinish = (values) => {

    setShowdata( data => [...data,values["seller"]]);
   console.log(showdata);
  };
  const validateMessages = {
    required: '${label} is required!',
    types: {

      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };

const [modal,setModal]=useState(false);
const [sellers,setSellers]=useState([]);
const handleOk = () => {
  setModal(false);
};

const handleCancel = () => {
  setModal(false);
};

const deleteData =(rowData) => {
  console.log("Log");
  console.log(rowData);
  setShowdata(showdata.filter(data => data.seller_id !==rowData.seller_id))
}
const [showdata,setShowdata]=useState([
  {
      seller_id:2,
      business_name:"Rahul Foods and general store",
      store_link:"startup.in/rahulfoodsandgeneralstore",
      description:"A local general store",
      address:"19/A Holaram Colony Nashik",
      aadharorpan:"Aadhar",
      document:"Aadhar",
      isFlagged:"No",
      flagged_count:"0"
  },
  {
      seller_id:3,
      business_name:"New Rahul Foods and general store",
      store_link:"startup.in/newrahulfoodsandgeneralstore",
      description:"A new local general store",
      address:"Mahatma Nagar",
      aadharorpan:"Aadhar",
      document:"Aadhar",
      isFlagged:"No",
      flagged_count:"0"
  }
]);

  const columns=[
                    { 
                        title: "Seller Name", 
                        field: "name",
                        cellStyle: {
                          whiteSpace: 'nowrap',
                          borderRight: '1px solid #e5e5e5'
                        }
                      
                      },
                    { 
                        title: "Seller Username", 
                        field: "username",
                        cellStyle: {
                          whiteSpace: 'nowrap',
                          borderRight: '1px solid #e5e5e5'
                        }
                        
                      },
  ];
  useEffect(() => {
    axios.get("https://startup-v1.herokuapp.com/api/admin/sellers").then(({data}) => {
      setSellers([...sellers,data.data])
      console.log({data:data.data});
      
  })
   
  },[])
              
return (
    <Container>
     
        <TableContainer>
         
       Sellers
        </TableContainer>
    </Container>
    )
}
