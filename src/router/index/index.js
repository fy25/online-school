import Index from "@/pages/index/index"
import Lesson from "@/pages/index/lesson"

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/lesson',
    name: 'lesson',
    component: Lesson
  },
]

export default routes;
