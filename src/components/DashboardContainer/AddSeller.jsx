import React, { useState } from "react";
import { Input, InputNumber, Modal, Form, Radio } from "antd";
import { storeSeller } from "@/Firebase/firestore";
import { Button } from "@components/custom";
import { useHistory } from "react-router-dom";

export default function AddSeller() {
  const history=useHistory();
  const layout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const [seller, setSeller] = useState({
    seller_id: "",
    business_name: "",
    aadharorpan: "",
    address: "",
    store_link: "",
    description: "",
    document: "",
  });
  const handleChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    setSeller({ ...seller, [e.target.name]: e.target.value });
  };
  const handleSubmit = async () => {
    console.log({ seller });
    const res = await storeSeller(seller);
    console.log(res);
    setSeller("")
    history.push('/dashboard?key=requests')
    
  };
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };

  return (

    <Form {...layout} name="nest-messages" validateMessages={validateMessages}>
    <h2 style={{textAlign:"center"}}>  New Seller Form</h2>
      <Form.Item
        name="seller_id"
        label="Seller Id"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input name="seller_id" onChange={handleChange} />
      </Form.Item>
      <Form.Item
        name="business_name"
        label="Seller Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input name="business_name" onChange={handleChange} />
      </Form.Item>
      <Form.Item
        name="description"
        label="Description"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input name="description" onChange={handleChange} />
      </Form.Item>
      <Form.Item
        name="store_link"
        label="Store Link"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input name="store_link" onChange={handleChange} />
      </Form.Item>
      <Form.Item
        name="address"
        label="Address"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input name="address" onChange={handleChange} />
      </Form.Item>
      <Form.Item
        name="aadharorpan"
        label="Aadhar or Pan"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Radio.Group
          name="aadharorpan"
          onChange={handleChange}
          buttonStyle="solid"
        >
          <Radio.Button value={"Aadhar"}>Aadhar</Radio.Button>
          <Radio.Button value={"Pan"}>PAN</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        name="document"
        label=" Documnent"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input name="document" onChange={handleChange} />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button onClick={handleSubmit}>Add Seller</Button>
      </Form.Item>
    </Form>
  );
}
