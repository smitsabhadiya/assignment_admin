import React from 'react';
import { Form,Button,Checkbox,Input,Select } from 'antd';

const AddCourse = () => {
    const options = [
        { label: 'Designing', value: 'Apple' },
        { label: 'Coding', value: 'Pear' },
        { label: 'Cloud', value: 'Orange' },
      ];
      const tailLayout = {
        wrapperCol: {
          offset: 12,
          span: 16,
        },
      };
    return (
        <div style={{height:"100vh",width:"60vw",marginTop:"6rem",paddingRight:"2rem",paddingLeft:"2rem"}}>
             <Form
        labelCol={{
          span: 12,
        }}
        wrapperCol={{
          span: 18,
        }}
        layout="horizontal"
        
        
        size="default"
      >
        
        <Form.Item label="Name">
          <Input />
        </Form.Item>
        <Form.Item label="Description">
          <Input.TextArea />
        </Form.Item>
        <Form.Item label="Credit Card Required">
          <Input />
        </Form.Item>
        <Form.Item label="Tags">
        <Checkbox.Group options={options} />
        </Form.Item>
        <Form.Item label="Live Link">
          <Input />
        </Form.Item>
        <Form.Item {...tailLayout}>
            <Button htmlType="submit" type="primary">
              Submit
            </Button>
            <Button
              htmlType="button"
              style={{
                margin: '0 8px',
              }}
              
            >
              Add User
            </Button>
          </Form.Item>
      </Form>
        </div>
    );
}

export default AddCourse;
