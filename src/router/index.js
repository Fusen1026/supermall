import Vue from "vue"
import VueRoute from "vue-router"

Vue.use(VueRoute)

const Home = () => import("../views/home/Home")
const Cart = () => import("../views/cart/Cart")
const Category = () => import("../views/category/Category")
const User = () => import("../views/user/User")
const Detail = () => import("../views/detail/Detail")

const routes = [
  {
    path: '',
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/cart",
    component: Cart
  },
  {
    path: "/category",
    component: Category
  },
  {
    path: "/user",
    component: User
  },
  {
    path: '/detail/:id',
    component: Detail
  }
]

const router = new VueRoute({
  routes,
  mode: "history"
})

export default router