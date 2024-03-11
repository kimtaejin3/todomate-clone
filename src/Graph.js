import styled from "styled-components";
import EmptyGraph from "./EmptyGraph";
import { useRecoilValue } from "recoil";
import {
  filteredCompletedTodoListByDay,
  filteredTodoListByDay,
  getGoalIdColorMap,
} from "./recoil/selector";
import { memo } from "react";

function adjustColors(arr) {
  if (arr.length === 1) {
    return [arr[0], arr[0], arr[0], arr[0]];
  } else if (arr.length === 2) {
    return [arr[0], arr[0], arr[1], arr[1]];
  } else if (arr.length === 3) {
    return [arr[0], arr[0], arr[1], arr[2]];
  } else {
    return [arr[0], arr[1], arr[2], arr[3]];
  }
}

export default memo(function Graph({ day }) {
  const todoList = useRecoilValue(filteredTodoListByDay(day));
  const completedTodoList = useRecoilValue(filteredCompletedTodoListByDay(day));
  const goalIdColorMap = useRecoilValue(getGoalIdColorMap);

  const goalIds = completedTodoList.map((v) => v.goalId);
  const goalColors = goalIds.map((v) => goalIdColorMap[v]).slice(0, 4);
  const remainingTodos = todoList.length - completedTodoList.length;

  let [colorOne, colorTwo, colorThree, colorFour] = adjustColors(goalColors);

  if (todoList.length === 0) {
    return <EmptyGraph />;
  }

  return (
    <div style={{ position: "relative" }}>
      <Count>{remainingTodos === 0 ? "V" : remainingTodos}</Count>
      <Row style={{ marginBottom: "-5px" }}>
        <CircleOne color={colorOne} />
        <CircleTwo color={colorTwo} />
      </Row>
      <Row>
        <CircleThree color={colorThree} />
        <CircleFour color={colorFour} />
      </Row>
    </div>
  );
});

const Circle = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #d3d8db;
  position: relative;
`;

const CircleOne = styled(Circle)`
  background-color: ${(props) => props.color};
  z-index: 3;
`;
const CircleTwo = styled(Circle)`
  background-color: ${(props) => props.color};

  margin-left: -5px;
  z-index: 2;
`;

const CircleThree = styled(Circle)`
  background-color: ${(props) => props.color};

  margin-right: -5px;
  z-index: 1;
`;

const CircleFour = styled(Circle)`
  background-color: ${(props) => props.color};

  z-index: 0;
`;

const Row = styled.div`
  display: flex;
`;

const Count = styled.div`
  position: absolute;
  z-index: 4;
  background-color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 10px;
  padding: 0 4px;
  border-radius: 50%;
`;
