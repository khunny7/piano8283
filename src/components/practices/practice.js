import { useParams } from "react-router";
import { Practice1 } from "./1";

const Practice = () => {
  const { practiceId } = useParams();

  return (
    <div>
      {
        practiceId === '1' &&
        <Practice1 />
      }
    </div>
  )
};

export { Practice };
