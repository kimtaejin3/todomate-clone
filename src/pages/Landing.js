import { Link } from "react-router-dom";
import styled from "styled-components";

const Landing = () => {
  return (
    <Container>
      <Contents>
        <h1>todo mate</h1>
        <Description>할 일을 작성,계획,관리하세요.</Description>
        <Link to="/login">
          <LoginBtn>로그인</LoginBtn>
        </Link>
        <Link to="/signup">
          <SignUpBtn>회원가입</SignUpBtn>
        </Link>
      </Contents>
    </Container>
  );
};

const Container = styled.div`
  display: flow-root;
  width: 360px;
  height: 800px;
  margin: 0 auto;
  text-align: center;
`;

const Contents = styled.div`
  margin-top: 250px;
  padding: 20px;
`;

const Description = styled.p`
  color: #aaa;
`;

const LoginBtn = styled.button`
  margin-top: 30px;
  padding: 10px 0;
  border: none;
  width: 100%;
  border-radius: 10px;
  cursor: pointer;
`;
const SignUpBtn = styled.button`
  margin-top: 10px;
  padding: 10px 0;
  border: none;
  width: 100%;
  border-radius: 10px;
  background-color: #000;
  color: #fff;
  cursor: pointer;
`;

export default Landing;
