import React from 'react'
import { Button,Input, InputNumber, Modal,Form, Radio } from 'antd';

export default function AddSeller() {
    const layout = {
        labelCol: {
          span: 6,
        },
        wrapperCol: {
          span: 16,
        },
      };
      const onFinish = (values) => {
    
     
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
    
    return (
        <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                  <Form.Item
                      name={['seller', 'seller_id']}
                      label="Seller Id"
                      rules={[
                        {
                          required: true,
                        },
                      ]}>
                    <Input/>
                  </Form.Item>
                  <Form.Item
                      name={['seller', 'business_name']}
                      label="Seller Name"
                      rules={[
                        {
                          required: true,
                          
                        },
                      ]}>
                    <Input/>
                  </Form.Item>
                  <Form.Item
                      name={['seller', 'description']}
                      label="Description"
                      rules={[
                        {
                          required: true,
                        },
                      ]}>
                    <Input/>
                  </Form.Item>
                  <Form.Item
                      name={['seller', 'store_link']}
                      label="Store Link"
                      rules={[
                        {
                          required: true,
                        },
                      ]}>
                      <Input/>
                  </Form.Item>
                  <Form.Item
                      name={['seller', 'address']}
                      label="Address"
                      rules={[
                        {
                          required: true,
                        },
                      ]}>
                      <Input/>
                  </Form.Item>
                  <Form.Item
                    name={['seller', 'aadharorpan']}
                    label="Aadhar or Pan"
                    rules={[
                      {
                        required: true,
                      },
                    ]}>
                      <Radio.Group defaultValue="Aadhar" buttonStyle="solid">
                      <Radio.Button value={"Aadhar"}>Aadhar</Radio.Button>
                      <Radio.Button value={"Pan"}>PAN</Radio.Button>
                      </Radio.Group>
                  </Form.Item>
                  <Form.Item
                      name={['seller', 'document']}
                      label=" Documnent"
                      rules={[
                        {
                          required: true,
                        },
                      ]}>
                      <Input/>
                  </Form.Item>
                  <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button type="primary" htmlType="submit">
                      Add Seller
                    </Button>
                  </Form.Item>
          </Form>
    )
}
