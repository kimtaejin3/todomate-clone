import styled from "styled-components";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { useEffect, useState } from "react";
import Graph from "./Graph";
import { getDatesByMon } from "./util";
import dayjs from "dayjs";
import { useRecoilState } from "recoil";
import { dateState } from "./recoil/atom";

const DAYS = ["월", "화", "수", "목", "금", "토", "일"];

const day = dayjs();
const currentMon = day.month() + 1;
const currentYear = day.year();

const Calendar = ({ style }) => {
  const [year, setYear] = useState(currentYear);
  const [mon, setMon] = useState(currentMon);
  const [dates, setDates] = useState([]);
  const currentDay = day.date();
  const [selectedDay, setSelectedDay] = useRecoilState(dateState);

  const handleBackClick = () => {
    setMon((prevMon) => prevMon - 1);
  };

  const handleForwardClick = () => {
    setMon((prevMon) => prevMon + 1);
  };

  const handleDateClick = (date) => {
    setSelectedDay(date);
  };

  useEffect(() => {
    if (currentMon > 12) {
      setMon(1);
      setYear((prevYear) => prevYear + 1);
    } else if (currentMon < 1) {
      setMon(12);
      setYear((prevYear) => prevYear - 1);
    }

    setDates(getDatesByMon({ year, mon }));

    //todoListState 바꾸기
  }, [mon]);

  return (
    <Container style={style} id="calendar">
      <Header>
        <CurrentDate>
          {year}년 {mon}월
        </CurrentDate>
        <Control>
          <MdArrowBackIos onClick={handleBackClick} />
          <MdArrowForwardIos onClick={handleForwardClick} />
        </Control>
      </Header>
      <DayField>
        {DAYS.map((day) => (
          <DayWrapper>{day}</DayWrapper>
        ))}
      </DayField>
      <DateField>
        {dates?.map((i) => {
          if (i < 0) {
            return <></>;
          }

          return (
            <DateWrapper key={i} onClick={() => handleDateClick(i)}>
              <Graph day={i} />
              {currentDay === i &&
              mon === currentMon &&
              year === currentYear ? (
                <CurDate
                  selected={
                    selectedDay === i &&
                    mon === currentMon &&
                    year === currentYear
                  }
                >
                  {i}
                </CurDate>
              ) : (
                <Date
                  selected={
                    selectedDay === i &&
                    mon === currentMon &&
                    year === currentYear
                  }
                >
                  {i}
                </Date>
              )}
            </DateWrapper>
          );
        })}
      </DateField>
    </Container>
  );
};

const Date = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  color: ${(props) => (props.selected ? "white" : "black")};
  background-color: ${(props) => (props.selected ? "black" : "white")};
`;

const CurDate = styled(Date)`
  color: white;
  background-color: ${(props) => (props.selected ? "black" : "#dadde2")};
`;

const Container = styled.div`
  margin: 0 -15px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const CurrentDate = styled.div`
  font-weight: bold;
  font-size: 14px;
  margin-left: 17px;
`;

const Control = styled.div`
  cursor: pointer;
  margin-right: 15px;
  display: flex;
  gap: 13px;
`;

const DayField = styled.div`
  display: flex;
  font-size: 13px;
  margin-bottom: 10px;
`;

const DayWrapper = styled.div`
  text-align: center;
  width: 14.2%;
`;

const DateField = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 10px;
  margin-bottom: 10px;
`;

const DateWrapper = styled.div`
  width: 14.2%;
  cursor: pointer;
  text-align: center;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

export default Calendar;
