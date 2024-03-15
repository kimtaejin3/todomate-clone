import { TbCards } from "react-icons/tb";
import { MdAdd } from "react-icons/md";
import styled from "styled-components";
import { useState } from "react";
import TodoInput from "./TodoInput";
import { useRecoilValue, useRecoilState } from "recoil";
import { filteredTodoListByDayAndGoalId } from "../recoil/selector";
import { FaCheck } from "react-icons/fa";
import { dateState, todoListState } from "../recoil/atom";

const Goal = ({ id, color, name }) => {
  const [show, setShow] = useState(false);

  const curDate = useRecoilValue(dateState);

  const [todoList, setTodoList] = useRecoilState(
    filteredTodoListByDayAndGoalId({ day: curDate, id })
  );

  const [entireTodoList, setEntireTodoList] = useRecoilState(todoListState);

  const handleToggleTodo = (selectedTodo) => {
    console.log(entireTodoList);
    setEntireTodoList(
      entireTodoList.map((item) => {
        if (item.day === curDate) {
          return {
            day: curDate,
            todos: item.todos.map((todo) => {
              if (todo.todoId !== selectedTodo.todoId) {
                return todo;
              }

              return {
                ...todo,
                isCompleted: !todo.isCompleted,
              };
            }),
          };
        }
        return item;
      })
    );
  };

  const handleShow = (e) => {
    setShow(true);
  };

  return (
    <>
      <GoalArea>
        <TbCards style={{ fontSize: "18px" }} />
        <GoalName $color={color}>{name}</GoalName>
        <AddBtn onClick={handleShow}>
          <MdAdd id="addBtn" />
        </AddBtn>
      </GoalArea>
      <TodoList>
        {todoList.map((todo) => (
          <TodoListItem>
            <CheckToggle
              onClick={() => handleToggleTodo(todo)}
              $isCompleted={todo.isCompleted}
              $color={color}
            >
              {todo.isCompleted && <FaCheck color="#fff" />}
            </CheckToggle>
            <div>{todo.content}</div>
          </TodoListItem>
        ))}
      </TodoList>
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

const CheckToggle = styled.button`
  border: none;
  cursor: pointer;
  width: 20px;
  height: 20px;
  background-color: #d3d8db;
  border-radius: 5px;
  margin-left: -30px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ $isCompleted, $color }) =>
    $isCompleted ? $color : "#d3d8db"};
`;

const TodoList = styled.ul``;
const TodoListItem = styled.li`
  margin: 3px 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export default Goal;
