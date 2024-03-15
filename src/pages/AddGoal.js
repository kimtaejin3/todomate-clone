import styled from "styled-components";
import { GrFormPrevious } from "react-icons/gr";
import { FaAngleDown } from "react-icons/fa";
import BottomSheet from "../components/BottomSheet";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { goalListState } from "../recoil/atom";
import { useRecoilState } from "recoil";

const AddGoal = () => {
  const [show, setShow] = useState(false);
  const [color, setColor] = useState("#000");
  const [goal, setGoal] = useState("");

  const [goalList, setGoalList] = useRecoilState(goalListState);

  const navigate = useNavigate();

  const handleColorBtnClick = () => {
    setShow(true);
  };

  const handleSubmit = () => {
    console.log("goal created!!!", goal, color);
    setGoalList([
      ...goalList,
      {
        id: `${Math.floor(Math.random() * 1000000 + 1)}L`,
        name: goal,
        color: color,
      },
    ]);

    navigate("/feed");
  };

  return (
    <Container>
      <Header>
        <Link to="/feed">
          <GrFormPrevious fontSize={32} />
        </Link>
        <HeaderTitle>목표</HeaderTitle>
        <Btn onClick={handleSubmit}>확인</Btn>
      </Header>
      <Contents>
        <div>
          <Input
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            $color={color}
            type="text"
            placeholder="목표 입력"
          />
        </div>

        <SelectColor>
          <span>색상</span>
          <ColorBtn onClick={handleColorBtnClick}>
            <Preview $color={color} />
            <FaAngleDown />
          </ColorBtn>
        </SelectColor>

        {show && (
          <BottomSheet
            selectedColor={color}
            onSelectColor={setColor}
            onClose={() => setShow(false)}
          />
        )}
      </Contents>
    </Container>
  );
};

const Container = styled.div`
  max-width: 900px;
  padding: 20px 30px;
  margin: 0 auto;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    &:active {
      color: #000;
    }
  }
`;

const Btn = styled.button`
  border: none;
  background-color: #fff;
  font-weight: bold;
  font-size: 17px;
  cursor: pointer;
`;

const HeaderTitle = styled.h1`
  font-size: 17px;
`;

const Contents = styled.div`
  padding-top: 20px;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  border-bottom: 3px solid ${({ $color }) => $color};
  padding-bottom: 5px;
  &:focus {
    outline: none;
  }
`;

const SelectColor = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const ColorBtn = styled.button`
  background-color: #fff;
  border: none;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;
const Preview = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ $color }) => $color};
`;

export default AddGoal;
