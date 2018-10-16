import Instructors from "@/pages/instructors/Instructors";
import InstructorInfo from "@/pages/instructors/InstructorInfo";
import CourseInfo from "@/pages/instructors/CourseInfo";
import CommentInfo from "@/pages/instructors/components/CommentInfo";

const routes = [
    {
      path: '/instructors', name: 'instructors',
      component: Instructors,
    },
    {
      path: '/instructors/:id', name: "instructor-info",
      component: InstructorInfo
    },
    {
      path: '/instructors/:id', name: "course-info",
      component: CourseInfo
    },
    {
      path: '/instructors/components/', name: "comment-info",
      component: CommentInfo
    }

]
export default routes;
