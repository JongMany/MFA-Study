import { CourseActionsWrapper } from "./course-actions.styles";
import { Button } from "@career-up/ui-kit";

const CourseActions = () => {
  return (
    <CourseActionsWrapper>
      <Button>Like this Course</Button>
      <Button>Add to My Course</Button>
    </CourseActionsWrapper>
  );
};

export default CourseActions;
