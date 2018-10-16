import Profile from "@/pages/profile/profile";
import Set from "@/pages/profile/set/set";
import Apply from "@/pages/profile/apply/apply";
import Collect from "@/pages/profile/collect/collect";
import Order from "@/pages/profile/order/order";
import Footmark from "@/pages/profile/footmark/footmark";
import Course from "@/pages/profile/course/course";
import Forum from "@/pages/profile/forum/forum";
import Binding from "@/pages/profile/binding/binding";
import Share from "@/pages/profile/share/share";



const routes = [
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/profile/set/',
      name: 'abcde',
      component: Set
    },
    {
      path:'/profile/apply/',
      name:'apply',
      component:Apply
    },
    {
      path:'/profile/collect/',
      name:'collect',
      component:Collect
    },
    {
      path:'/profile/order/',
      name:'order',
      component:Order
    },
    {
      path:'/profile/footmark/',
      name:'footmark',
      component:Footmark
    },
    {
      path:'/profile/course/',
      name:'course',
      component:Course
    },
    {
      path:'/profile/forum/',
      name:'forum',
      component:Forum
    },
    {
      path:'/profile/binding/',
      name:'binding',
      component:Binding
    },
    {
      path:'/profile/share/',
      name:'share',
      component:Share
    },
]
export default routes;
