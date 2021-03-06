import Vue from 'vue';
import Router from 'vue-router';
import { Support, LoginPage, Modify, Front, TakeType, Evaluation, BigClient, OutWork, Process, Quality, TryClothes, Fiance, Warehouse, Return, Theory, SuperManage } from './path';
import { Main } from 'element-ui';

Vue.use(Router);

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: LoginPage,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage,
    },
    {
      path: '/support',
      name: 'supports',
      component: Support,
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginPage,
    },
    {
      path: '/evaluation',
      name: 'evaluationPage',
      component: Evaluation,
    },
    {
      path: '/taketype',
      name: 'take',
      component: TakeType,
    },
    {
      path: '/modify',
      name: 'modifytype',
      component: Modify,
    },
    {
      path: '/front',
      name: 'frontdesk',
      component: Front,
    },
    {
      path: '/bigclient',
      name: 'bigClient',
      meta: {
        requireAuth: true
      },
      component: BigClient,
    },
    {
      path: '/outwork',
      name: 'outwork',
      meta: {
        requireAuth: true
      },
      component: OutWork,
    },
    {
      path: '/process',
      name: 'process',
      component: Process,
    },
    {
      path: '/quality',
      name: 'quality',
      component: Quality,
    },
    {
      path: '/clothes',
      name: 'tryclothes',
      component: TryClothes,
    },
    {

      path: '/fiance',
      name:'fiance',
      component: Fiance,
    },
    {
      path: '/warehouse',
      name: 'warehouse',
      component: Warehouse,
    },
    {
      path: '/return',
      name: 'return',
      component: Return,
    },
    {
      path: '/supermanage',
      name: 'super',
      component: SuperManage,
    },
    {
      path: '/theory',
      name: 'theory',
      component: Theory,
    },
  ],
});
