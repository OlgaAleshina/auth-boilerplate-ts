import React from "react";
import { formatMessage } from 'umi-plugin-locale';
import { connect } from 'dva';
import { Link } from 'umi';
import { Form, Input, Button, Checkbox, Modal } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import { IAuthState, IGlobalProps, FormProps } from "@/common/index";
import "./styles.css";


const mapStateToProps = (state:{auth: IAuthState}) => {
    const { isLogged, authError } = state.auth;
    return {
      //loading: state.loading.models.users,
      isLogged, 
      authError,
    };
  }

type PageStateProps = ReturnType<typeof mapStateToProps>;
type PageProps = PageStateProps & IGlobalProps;

const Signup: React.FC<PageProps> = ({dispatch, authError}) => {
  console.log("error:" , authError)

  const onFinish = async (values: FormProps) => {
    console.log('Success:', values);

    const {email, password, remember} = values;

    dispatch({
      type: 'auth/signup',
      payload: {email, password, remember},
    });
  };


  const openModal = () => {
    let secondsToGo = 5;
    const modal = Modal.error({
      title: formatMessage({id: 'signup.modal.errTitle'}),
      content: authError,
    });
    const timer = setInterval(() => {
      secondsToGo -= 1;
    }, 1000);

    setTimeout(() => {
      clearInterval(timer);
      modal.destroy();
    }, secondsToGo * 1000)
  }


  return (
    <div>
            {authError &&  openModal()}

            {formatMessage({ id: 'signup.title' })}
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
              >

              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: formatMessage({ id: 'signup.email.message'}),
                  },
                ]}
              >
                  <Input 
                    prefix={<UserOutlined className="site-form-item-icon" />} 
                    placeholder="Email" />
              </Form.Item>

            <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: formatMessage({ id: 'signup.password.message'}),
                  },
                ]}
            >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder= {formatMessage({ id: 'signup.password.placeholder'})}/>
            </Form.Item>
     
            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>{formatMessage({id: 'signup.rememberMe'})}</Checkbox>
                </Form.Item>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  {formatMessage({ id: 'signup.submit' })}
                </Button>
                <Link to="/auth/login">{formatMessage({ id: 'signup.goToLogin' })}</Link>
            </Form.Item>
        </Form>
          
    </div>
    
  );
}



export default connect(mapStateToProps)(Signup);
