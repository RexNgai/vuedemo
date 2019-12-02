import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import {
  Button,
  Row,
  Col,
  Cell,
  CellGroup,
  Search,
  Swipe,
  SwipeItem,
  Stepper,
  Lazyload,
  List,
  Field,
  NavBar,
  Tab,
  Tabs,
  Toast,
  PullRefresh,
  Tabbar,
  TabbarItem
} from "vant";

Vue.config.productionTip = false;
Vue.use(Button)
  .use(Row)
  .use(Col)
  .use(Cell)
  .use(CellGroup)
  .use(Search)
  .use(Swipe)
  .use(SwipeItem)
  .use(Stepper)
  .use(Lazyload)
  .use(List)
  .use(Field)
  .use(NavBar)
  .use(Tab)
  .use(Tabs)
  .use(Toast)
  .use(PullRefresh)
  .use(Tabbar)
  .use(TabbarItem);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
