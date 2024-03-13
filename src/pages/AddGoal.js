import styled from "styled-components";
import { GrFormPrevious } from "react-icons/gr";

const AddGoal = () => {
  return (
    <Container>
      <Header>
        <GrFormPrevious fontSize={32} />
        <HeaderTitle>목표</HeaderTitle>
        <Btn>확인</Btn>
      </Header>
      <Contents>
        <div>
          <Input type="text" placeholder="목표 입력" />
        </div>

        <SelectColor>
          <span>색상</span>
          <ColorBtn>
            <Preview />
          </ColorBtn>
        </SelectColor>
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
  border-bottom: 3px solid;
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
`;
const Preview = styled.div`
  width: 20px;
  height: 20px;
  background-color: #000;
  border-radius: 50%;
`;

export default AddGoal;
