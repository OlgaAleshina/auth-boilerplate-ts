import { IConfig } from 'umi-types';

// ref: https://umijs.org/config/
const config: IConfig =  {
  treeShaking: true,
  routes: [
    {
      path: '/auth',
      component: '../pages/auth/_layout',
      routes: [
        {path: '/auth', redirect: '/auth/login'},
        { path: '/auth/login', component: '../pages/auth/login' },
        { path: '/auth/signup', component: '../pages/auth/signup' },
      ]
    },
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        { path: '/', redirect: '/dashboard' },
        { path: '/dashboard', component: '../pages/dashboard/index'},//Routes: ['../routes/PrivateRoute.tsx'],
        { path: '/dashboard/:post', component: '../pages/dashboard/$post$.tsx'} 
      ]
    }
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: { webpackChunkName: true },
      title: 'auth-boilerplate-ts',
      dll: false,
      locale: {
        enable: true,
        default: 'en-US',
      },
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
}

export default config;
