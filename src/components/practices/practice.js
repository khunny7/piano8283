import { useParams } from "react-router";
import { Practice1 } from "./1";
import { Practice2 } from "./2";
import { practicesData } from "../practice-data";

const Practice = () => {
  const { practiceId } = useParams();

  const { title } = practicesData.filter((data) => `${data.id}` === practiceId)[0];

  return (
    <div>
      <h1>{title}</h1>
      {
        practiceId === '1' &&  <Practice1 />
      }
      {
        practiceId === '2' &&  <Practice2 />
      }
    </div>
  )
};

export { Practice };
