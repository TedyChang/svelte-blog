import {wrap} from "svelte-spa-router/wrap";
import Main from './main/main.svelte'
import UserLogin from './users/login.svelte'

export default {
  "/": wrap({
    component: Main,
  }),
  "/login": wrap({
    component: UserLogin,
  }),
}