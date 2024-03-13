import { TbCards } from "react-icons/tb";
import { MdAdd } from "react-icons/md";
import styled from "styled-components";
import { useState } from "react";
import TodoInput from "./TodoInput";
import { useRecoilValue } from "recoil";
import { filteredTodoListByDayAndGoalId } from "../recoil/selector";
import { dateState } from "../recoil/atom";

const Goal = ({ id, color, name }) => {
  const [show, setShow] = useState(false);

  const curDate = useRecoilValue(dateState);

  const todoList = useRecoilValue(
    filteredTodoListByDayAndGoalId({ day: curDate, id })
  );

  const handleShow = (e) => {
    setShow(true);
  };

  return (
    <>
      <GoalArea>
        <TbCards style={{ fontSize: "18px" }} />
        <GoalName $color={color}>{name}</GoalName>
        <AddBtn onClick={handleShow}>
          <MdAdd />
        </AddBtn>
      </GoalArea>
      <ul>
        {todoList.map((todo) => (
          <li>{todo.content}</li>
        ))}
      </ul>
      <TodoInput
        goalId={id}
        show={show}
        color={color}
        onClose={() => setShow(false)}
      />
    </>
  );
};

const GoalArea = styled.div`
  background-color: #f2f2f2;
  padding: 8px 13px;
  width: fit-content;
  border-radius: 30px;
  display: flex;
  gap: 7px;
  align-items: center;
  margin-top: 30px;
  &:first-child {
    margin-top: 0;
  }
`;

const GoalName = styled.div`
  font-weight: bold;
  font-size: 15px;
  color: ${(props) => props.$color};
`;
const AddBtn = styled.div`
  background-color: #fff;
  border: none;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export default Goal;
