import React from "react";
import { Redirect } from 'umi';
import styles from './_layout.css';
import { getCookies } from '../../utils/handlingCookies';

type LayoutProps = {
  children?: React.ReactNode,
  location: {
    pathname: string,
  }
}
const AuthLayout = ({children, location} : LayoutProps): JSX.Element => {

  if(getCookies( {name:"isLogged"})){
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className={styles.wrapper}>
        <div className={styles.wallpaper}></div>
        <div className={styles.formWrapper}>
          <h1 className={styles.title}>Auth Layout</h1>
          {children}
        </div>
    </div>
  );
}

export default AuthLayout;