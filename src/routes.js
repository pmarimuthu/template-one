import Home from "@/views/Home.vue"
import About from "@/views/About.vue"
import ReferralJoin from "@/views/ReferralJoin.vue"
import User from "@/views/User.vue"
import PageNotFound from "@/views/404.vue"
import TopNav from "@/components/TopNav.vue"

export const routes = [
  { 
    path: "/", 
    component: Home, 
    meta: { title: "Home" } 
  },
  {
    path: "/about",
    component: About,
    meta: { title: "About" },
  },
  {
    path: "/referral-join",
    component: ReferralJoin,
    meta: { title: "Referral-Join" }
  },
  {
    path: "/user",
    component: User,
    meta: { title: "User" }
  },
  {
    path: "/top-nav",
    component: TopNav,
    meta: { title: "Top-Nav" }
  },
  { 
    path: "/:path(.*)", 
    component: PageNotFound 
  },
];
