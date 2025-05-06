import CourseListItem from "../components/course-list-item";
import { coursesAtom } from "../atoms";
import { useAtomValue } from "jotai";

const PageList = () => {
  const courses = useAtomValue(coursesAtom);

  return (
    <>
      {courses.map((course) => (
        <CourseListItem key={course.id} {...course} />
      ))}
    </>
  );
};

export default PageList;
