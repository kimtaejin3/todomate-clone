import styled from "styled-components";
import { useHandleOutsideClick } from "../hooks/useHandleOutsideClick";
import { useRef } from "react";

const Popover = ({ show, onClose }) => {
  const ref = useRef(null);

  useHandleOutsideClick({ ref, onClose });

  if (!show) {
    return <></>;
  }

  return (
    <Container ref={ref}>
      <SelectList>
        <SelectListItem>
          <GoalAddBtn>목표 등록하기</GoalAddBtn>
        </SelectListItem>
      </SelectList>
    </Container>
  );
};

const Container = styled.div`
  width: 180px;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  position: absolute;
  right: 20px;
  top: 60px;
`;

const SelectList = styled.ul`
  padding: 0;
  margin: 0;
`;
const SelectListItem = styled.li`
  list-style-type: none;
  padding: 5px 0;
`;

const GoalAddBtn = styled.button`
  background-color: #fff;
  border: none;
  cursor: pointer;
  width: 100%;

  padding: 10px;
  &:hover {
    background-color: #f2f2f2;
  }
`;

export default Popover;
