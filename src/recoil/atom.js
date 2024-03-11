import dayjs from "dayjs";
import { atom } from "recoil";
const day = dayjs();
export const todoListState = atom({
  key: "TodoListState",
  default: [
    {
      day: 21,
      todos: [
        {
          todoId: 1,
          content: "영화보기",
          goalId: "1L",
          isCompleted: true,
        },
        {
          todoId: 1,
          content: "책 읽기",
          goalId: "2L",
          isCompleted: false,
        },
      ],
    },
    {
      day: 2,
      todos: [
        {
          todoId: 2,
          content: "스프링 공부",
          goalId: "1L",
          isCompleted: true,
        },
      ],
    },
  ],
});

export const goalListState = atom({
  key: "GoalListState",
  default: [
    {
      id: "1L",
      name: "spring",
      color: "#797ef6",
    },
    {
      id: "2L",
      name: "react",
      color: "#fe93b5",
    },
  ],
});

export const dateState = atom({
  key: "DateState",
  default: day.date(),
});
