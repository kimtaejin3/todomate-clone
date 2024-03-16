import Calendar from "../components/Calendar";
import { GoPersonFill } from "react-icons/go";
import { CiCircleMore } from "react-icons/ci";
import { TbCardsFilled } from "react-icons/tb";
import { useRecoilValue } from "recoil";
import { goalListState } from "../recoil/atom";
import Goal from "../components/Goal";
import styled from "styled-components";
import Popover from "../components/Popover";
import { useState } from "react";

const Feed = () => {
  const myGoals = useRecoilValue(goalListState);

  const [isPopoverOpened, setIsPopoverOpend] = useState(false);

  const handlePopoverOpen = () => {
    setIsPopoverOpend(true);
  };

  return (
    <>
      <Header>
        <LayoutWrapper>
          <Headings>
            <Popover
              show={isPopoverOpened}
              onClose={() => setIsPopoverOpend(false)}
            />
            <Logo>
              <TbCardsFilled />
            </Logo>
            <CiCircleMore
              onClick={handlePopoverOpen}
              style={{ fontSize: "25px", cursor: "pointer" }}
            />
          </Headings>
        </LayoutWrapper>
      </Header>
      <Main>
        <LayoutWrapper>
          <Container>
            <div>
              <Profile>
                <ProfileIcon>
                  {/* <GoPersonFill /> */}
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/todomate-28330.appspot.com/o/files%2Fabout.png?alt=media&token=81635221-7b66-426b-9342-d20c2fc36790"
                    alt="profileImg"
                  />
                </ProfileIcon>
                <div>
                  <Name>CondingLove</Name>
                  <ProfileDescription>
                    프로필에 자기소개를 입력해보세요.
                  </ProfileDescription>
                </div>
              </Profile>
              <Calendar style={{ marginTop: "20px", width: "380px" }} />
            </div>
            <GoalsArea>
              {myGoals.map((goal) => (
                <Goal id={goal.id} color={goal.color} name={goal.name} />
              ))}
            </GoalsArea>
          </Container>
        </LayoutWrapper>
      </Main>
    </>
  );
};

const LayoutWrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Header = styled.header`
  padding: 20px 0;
`;

const Headings = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const Main = styled.main``;

const Logo = styled.div`
  font-size: 17px;
  width: 36px;
  height: 36px;
  border-radius: 20px;
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 80px;
`;

const Profile = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const ProfileDescription = styled.div`
  font-size: 14px;
  color: #7a7a7a;
`;

const ProfileIcon = styled.div`
  background-color: #f2f2f2;
  width: 50px;
  height: 50px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const GoalsArea = styled.div`
  flex-grow: 1;
`;

const Name = styled.h2`
  font-weight: bold;
  font-size: 18px;
  margin: 0 0 5px;
`;

export default Feed;
