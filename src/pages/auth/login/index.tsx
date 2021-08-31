
import React from "react";
import { formatMessage } from 'umi-plugin-locale';
import { Form, Input, Button, Checkbox, Modal} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import "./styles.css";
import { IAuthState, IGlobalProps, FormProps } from "@/common/index";
import { Link } from 'umi';
import { connect } from 'dva';

const mapStateToProps = (state: {auth: IAuthState}) => {
  const {isLogged, authError} = state.auth
  return {
    //loading: state.loading.models.users,
    isLogged, 
    authError,
  };
}

type PageStateProps = ReturnType<typeof mapStateToProps>;
type PageProps = PageStateProps & IGlobalProps;


//const Login = (props: PageProps): JSX.Element => {
const Login: React.FC<PageProps> = ({dispatch, authError}) => {

  const onFinish = (values: FormProps) => {
    console.log(values)
    const {email, password, remember} = values;

    dispatch({
      type: 'auth/login',
      payload: {email, password, remember},
    });
  };


  const openModal = () => {
      let secondsToGo = 5;
      const modal = Modal.error({
        title: formatMessage({id: 'login.modal.errTitle'}),
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

            {formatMessage({ id: 'login.title' })}
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{remember: true}}
                onFinish={onFinish}
              >

              <Form.Item
                name="email"
                rules={ [{ required: true, message: formatMessage({ id: 'login.email.message'}) }]}
              >
                  <Input 
                    prefix={<UserOutlined className="site-form-item-icon" />} 
                    placeholder="Email" />
              </Form.Item>

            <Form.Item
                name="password"
                rules={[{required: true, message: formatMessage({ id: 'login.password.message'})}]}
            >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder= {formatMessage({ id: 'login.password.placeholder'})}/>
            </Form.Item>
     
            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>{formatMessage({id: 'login.rememberMe'})}</Checkbox>
                </Form.Item>

                {/*<a className="login-form-forgot" href="">
                  {formatMessage({ id: 'login.forgetPassword'})}
                  </a>*/}

              </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  {formatMessage({ id: 'login.submit' })}
                </Button>
                <Link to="/auth/signup">{formatMessage({ id: 'login.goToRegister' })}</Link>
            </Form.Item>
              </Form>
          
    </div>
    
  );
}


export default connect(mapStateToProps)(Login);


