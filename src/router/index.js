import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "MyCollaborations",
    component: ()=> import('../views/MyCollaborations.vue'),
  },
  {
    path: "/new-collaboration",
    name: "NewCollaboration",
    component: ()=> import('../views/NewCollaboration.vue'),
  },
  {
    path: "/preview-data",
    name: "PreviewData",
    component: ()=> import('../views/PreviewData.vue'),
  },
  {
    path: "/local",
    name: "Local",
    component: ()=> import('../views/SecureLocal.vue'),
  },
  {
    path: "/advertiser",
    name: "Advertiser",
    component: ()=> import('../views/Advertiser.vue'),
  },
  {
    path: "/add-advertiser",
    name: "AddAdvertiser",
    component: ()=> import('../views/AddAdvertiser.vue'),
  },
  {
    path: "/cloud",
    name: "Cloud",
    component: ()=> import('../views/CloudDataSource.vue'),
  },
  {
    path: "/cloud-service",
    name: "CloudService",
    component: ()=> import('../views/CloudService.vue'),
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
