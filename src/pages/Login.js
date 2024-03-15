import styled from "styled-components";
import { GrFormPrevious } from "react-icons/gr";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {};

  return (
    <Container>
      <Header>
        <Link to="/">
          <GrFormPrevious fontSize={32} />
        </Link>
        <HeaderTitle>
          <span>로그인</span>
        </HeaderTitle>
      </Header>
      <Contents>
        <div>
          <Input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="아이디"
          />
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="text"
            placeholder="비밀번호"
          />
        </div>
        <Btn onClick={handleSubmit}>확인</Btn>
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

  a {
    &:active {
      color: #000;
    }
  }
`;

const Btn = styled.button`
  border: none;
  margin-top: 40px;
  background-color: #f5f5f5;
  padding: 13px 0;
  width: 100%;
  border-radius: 10px;
  font-size: 14px;
  cursor: pointer;
`;

const HeaderTitle = styled.h1`
  flex-grow: 1;
  text-align: center;
  font-size: 17px;
  span {
    margin-left: -20px;
  }
`;

const Contents = styled.div`
  padding-top: 20px;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  border-bottom: 2px solid #eaeaea;
  padding-bottom: 10px;
  transition: 0.2s;
  &:focus {
    outline: none;
    border-color: #000;
  }
  &:last-child {
    margin-top: 30px;
  }
`;

export default Login;
