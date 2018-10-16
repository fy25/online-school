import Vue from 'vue'
import Router from 'vue-router'

import Index from './index/'
import Auth from "./others/auth";
import Instructors from "./instructors/index";
import Profile from "./profile/index";
import Forum from "./forum/index";

Vue.use(Router)
let temp = [];
temp = temp.concat(Index);
temp = temp.concat(Auth);
temp = temp.concat(Instructors);
temp = temp.concat(Profile);
temp = temp.concat(Forum);
export default new Router({
  routes: temp
})
