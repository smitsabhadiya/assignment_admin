import { Form, Input, Button, Checkbox } from 'antd';
import { useHistory } from 'react-router-dom';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const Login = () => {

    let history = useHistory();
  const onFinish = (values) => {
      const {username,password} = values;
    if(username=="admin" && password =="admin"){
        localStorage.setItem('user',JSON.stringify({isUserAdmin:true}));
    }
    history.push('/admin/addcourse');
    window.location.reload();
  };




  return (
      <div style={{height:"100vh"}}>
<Form
      {...layout}
      name="basic"

      onFinish={onFinish}
 
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
      </div>
    
  );
};

export default Login;