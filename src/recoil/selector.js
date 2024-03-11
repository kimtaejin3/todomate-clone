import { selector, selectorFamily } from "recoil";
import { goalListState, todoListState } from "./atom";

export const filteredTodoListByDay = selectorFamily({
  key: "FilteredTodoListByDay",
  get:
    (day) =>
    ({ get }) => {
      const todoList = get(todoListState);
      const filteredTodoList = todoList.filter((data) => data.day === day);

      if (filteredTodoList.length === 0) {
        return [];
      }

      return filteredTodoList[0].todos;
    },
});

export const filteredCompletedTodoListByDay = selectorFamily({
  key: "FilteredCompletedTodoList",
  get:
    (day) =>
    ({ get }) => {
      const todoList = get(filteredTodoListByDay(day));

      return todoList.filter((data) => data.isCompleted);
    },
});

export const filteredTodoListByDayAndGoalId = selectorFamily({
  key: "filteredTodoListByDayAndGoalId",
  get:
    ({ day, id }) =>
    ({ get }) => {
      const todoList = get(filteredTodoListByDay(day));
      return todoList.filter((data) => data.goalId === id);
    },
});

export const getGoalIdColorMap = selector({
  key: "GetGoalIdMappedColor",
  get: ({ get }) => {
    const goalList = get(goalListState);
    const idMappedColor = {};
    goalList.forEach((goal) => {
      idMappedColor[goal.id] = goal.color;
    });

    return idMappedColor;
  },
});
