import Vue from 'vue';
import Router from 'vue-router';

// import AuthLogin from '../views/AuthLogin.vue';
// const AuthRegister = () => import('../views/AuthRegister.vue');
// const AuthResetLink = () => import('../views/AuthResetLink.vue');
// const AuthResetForm = () => import('../views/AuthResetForm.vue');

// const Example = () => import('../views/Example.vue');
const Home = () => import('../views/client/Home.vue');
const About = () => import('../views/client/About.vue');
const Contact = () => import('../views/client/Contact.vue');
const OnlinePayment = () => import('../views/client/OnlinePayment.vue');
const OnlinePaymentDemo = () => import('../views/client/OnlinePaymentDemo.vue');
const PaymentLink = () => import('../views/client/PaymentLink.vue');
const PricingPlan = () => import('../views/client/PricingPlan.vue');
const Business = () => import('../views/client/Business.vue');
const Admin = () => import('../views/admin/Home.vue');
// const Users = () => import('../views/Users.vue');
// const UsersGraphQL = () => import('../views/UsersGraphQL.vue');

import userTypes from '@/utils/userTypes';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/payment_links',
      name: 'payment_links',
      component: PaymentLink,
    },
    {
      path: '/contact_us',
      name: 'contact_us',
      component: Contact,
    },
    {
      path: '/pricing_plans',
      name: 'pricing_plans',
      component: PricingPlan,
    },
    {
      path: '/prohibited_business',
      name: 'prohibited_business',
      component: Business,
    },
    {
      path: '/about_us',
      name: 'about_us',
      component: About,
    },
    {
      path: '/online_payment',
      name: 'online_payment',
      component: OnlinePayment,
    },
    {
      path: '/online_payment_demo',
      name: 'online_payment_demo',
      component: OnlinePaymentDemo,
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      meta: {
        title: Vue.i18n.translate('strings.example', null),
        auth: true,
      },
    },
    // {
    //   path: '/messages',
    //   name: 'messages',
    //   component: Messages,
    //   meta: {
    //     title: Vue.i18n.translate('strings.messages', null),
    //     auth: true,
    //   },
    // },
    // {
    //   path: '/users',
    //   name: 'users',
    //   component: Users,
    //   meta: {
    //     title: Vue.i18n.translate('strings.users', null),
    //     auth: {
    //       roles: userTypes.ADMIN,
    //       forbiddenRedirect: '/example',
    //     },
    //   },
    // },
    // {
    //   path: '/users/graphql',
    //   name: 'users_graphql',
    //   component: UsersGraphQL,
    //   meta: {
    //     title: Vue.i18n.translate('strings.users', null),
    //     auth: {
    //       roles: userTypes.ADMIN,
    //       forbiddenRedirect: '/example',
    //     },
    //   },
    // },
    // {
    //   path: '/login',
    //   name: 'auth.login',
    //   component: AuthLogin,
    //   meta: {
    //     title: Vue.i18n.translate('login.login', null),
    //     auth: false,
    //   },
    // },
    // {
    //   path: '/register',
    //   name: 'auth.register',
    //   component: AuthRegister,
    //   meta: {
    //     title: Vue.i18n.translate('login.register', null),
    //     auth: false,
    //   },
    // },
    // {
    //   path: '/password/reset',
    //   name: 'auth.reset',
    //   component: AuthResetLink,
    //   meta: {
    //     title: Vue.i18n.translate('login.reset_password', null),
    //     auth: false,
    //   },
    // },
    // {
    //   path: '/password/reset/:token',
    //   name: 'auth.reset.token',
    //   component: AuthResetForm,
    //   meta: {
    //     title: Vue.i18n.translate('login.reset_password', null),
    //     auth: false,
    //   },
    // },
    {
      path: '*',
      redirect: '/',
    },
  ],
});

// It's required for VueAuth
Vue.router = router;


export default router;
