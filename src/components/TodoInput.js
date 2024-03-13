import { useEffect, useRef, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { dateState, todoListState } from "../recoil/atom";

const TodoInput = ({ goalId, show, color, onClose }) => {
  const ref = useRef();
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const curDate = useRecoilValue(dateState);

  useEffect(() => {
    function handleOutsideClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        onClose();
      }
    }

    window.addEventListener("mousedown", handleOutsideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [ref, onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setTodo("");
  };

  return (
    <>
      {show && (
        <form
          ref={ref}
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "flex-end",
          }}
          onSubmit={handleSubmit}
        >
          <Input
            type="text"
            placeholder="할 일 입력"
            color={color}
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <Btn>추가</Btn>
        </form>
      )}
    </>
  );
};

const Input = styled.input`
  margin-top: 20px;
  border: none;
  border-bottom: 2px solid ${(props) => props.color};
  width: 50%;
  font-size: 14px;
  padding-bottom: 5px;
  &:focus {
    outline: none;
  }
`;

const Btn = styled.button`
  background-color: #f2f2f2;
  border:none;
  padding: 8px;
  font-weight:bold
  font-size:11px;
  border-radius:10px;
  cursor:pointer;
`;

export default TodoInput;
