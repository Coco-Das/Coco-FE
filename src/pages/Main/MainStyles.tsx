import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

export interface SearchInputProps {
  show?: boolean;
}

export const lightTheme = {
  text: '#000000', // 라이트 모드 폰트 색상
  borderColor: '#eef1f3', // 라이트 모드 보더 색상
  background: '#fff',
  buttonColor: '#AAEAD3',
  HiColor: '#23BE87',
  attend: '#ffffff',
  attendbutton: '#28B381',
};

export const darkTheme = {
  text: '#fff', // 다크 모드 폰트 색상
  borderColor: '#54595b', // 다크 모드 보더 색상
  background: '#243B56',
  buttonColor: '#23BE87',
  HiColor: '#AAEAD3',
  attend: '#23BE87',
  attendbutton: '#ffffff',
};

// 회전 애니메이션 정의
const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
export const Container = styled.div``;
export const Sidecontainer = styled.div`
  height: 100%;
  display: flex;
  left: 0;
  min-width: 150px;
  width: 13vw;
  flex-direction: column;
  align-items: center;
  position: fixed;
  border-right: 1px solid #d8dfe3;
`;

// "+" 부분을 스타일링하는 컴포넌트
export const Plus = styled.span`
  display: inline-block;
  transition: transform 0.3s;
`;

export const PjButton = styled.button`
  background-color: ${({ theme }) => theme.buttonColor};
  color: ${({ theme }) => theme.text};
  padding: 10px;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  align-items: center;
  justify-content: center;
  display: flex;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 5px;
  margin-top: 10px;
  transition: background-color 0.3s;
  width: 11vw;
  min-width: 120px;
  &:hover {
    background-color: #76c1af; /* 호버 시 배경색 변경 */

    ${Plus} {
      animation: ${rotateAnimation} 0.3s linear forwards;
    }
  }
`;
export const FolderButton = styled.button`
  color: ${({ theme }) => theme.text};
  padding: 10px;
  padding-left: 20px;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  border: none;
  border-radius: 5px;
  transition:
    background-color 0.3s,
    color 0.3s;
  flex-direction: row;
  min-width: 150px;
  width: 13vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  &:hover {
    background-color: rgba(118, 193, 175, 0.3);
  }
`;
export const ChatButton = styled(Link)`
  color: ${({ theme }) => theme.text};
  padding: 10px;
  padding-left: 14px;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s;
  min-width: 150px;
  width: 13vw;
  flex-direction: row;
  display: flex;
  align-items: center;

  &:hover {
    background-color: rgba(118, 193, 175, 0.3);
  }
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
`;
export const Iconchat = styled.img`
  width: 35px;
  height: 35px;
  margin-right: -5px;
`;

export const Menuname = styled.p`
  color: ${({ theme }) => theme.text};
  font-style: normal;
  font-weight: 600;
  display: flex;
  flex-grow: 1;
  margin-left: 10px;
`;
export const Maincontainer = styled.div`
  width: calc(100vw - max(12vw, 130px));
  margin-left: 150px;
  justify-content: center;
  align-items: center;
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 두 개의 열을 동일한 비율로 설정 */
  grid-template-rows: repeat(2, 1fr); /* 두 개의 행을 동일한 비율로 설정 */
  gap: 25px;
  padding: 85px 20px 40px 90px;
  height: 100vh;
  position: fixed;
  /* 미디어 쿼리를 사용하여 뷰포트 너비가 600px 이하일 때 반응형으로 변경 */
  @media (max-width: 700px) {
    grid-template-columns: 1fr; /* 한 열로 변경 */
    padding: 50px 20px;
    overflow: scroll;
  }
`;
export const Hicontainer = styled.div`
  background-color: ${({ theme }) => theme.HiColor};
  height: max(22vw, 250px);
  display: flex;
  width: max(40vw, 350px);
  min-width: 130px;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  padding: 50px 30px 30px 30px;
  border-radius: 16px;
  margin: 10px;
`;

export const MainImg = styled.img`
  width: max(25vw, 200px);
  height: 170px;
  margin-top: 10px;
`;
export const Hione = styled.p`
  font-size: max(2vw, 16px);
  font-style: normal;
  font-weight: 600;
  color: black;
`;
export const Hitwo = styled.p`
  font-size: max(1.9vw, 14px);
  margin-top: 10px;
  font-style: normal;
  font-weight: 600;
  color: black;
`;

export const Attendancecontainer = styled.div`
  background-color: ${({ theme }) => theme.buttonColor};

  height: max(22vw, 250px);
  display: flex;
  width: max(30vw, 100px);
  flex-direction: column;
  justify-content: center;
  padding: 30px;
  border-radius: 16px;
  margin: 10px;
  align-items: center;
`;
export const AttendButton = styled.button`
  background-color: ${({ theme }) => theme.attendbutton};
  color: ${({ theme }) => theme.attend};
  width: 200px;
  height: 40px;
  font-size: 14px;
  border-radius: 5px;
  margin: 20px 0 0 0;
`;
export const Date = styled.div`
  background-color: white;
  height: 160px;
  width: 160px;
  border-radius: 50%;
`;
export const Month = styled.p`
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 45px;
`;
export const Day = styled.p`
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: -30px;
  margin-top: 50px;
`;

export const AttendanceImage = styled.img<{ show: boolean }>`
  display: ${({ show }) => (show ? 'block' : 'none')};
  height: 160px;
  width: 160px;
  position: fixed;
  margin-top: -220px;
  margin-left: 20px;
`;

export const Pjcontainer = styled.div`
  display: flex;
  flex-direction: column;
  height: max(28vw, 250px);
  width: max(30vw, 100px);
  margin: 10px;
`;
export const ModifyPj = styled.p`
  color: ${({ theme }) => theme.text};
  margin-top: 25px;
  font-style: normal;
  font-weight: 600;
  margin-top: -20px;
  margin-left: 30px;
`;

export const ModifyPjBtn = styled(Link)`
background-color: white;
padding: 20px;
border-radius: 5px;
transition: background-color 0.3s;
border: 1px solid #A9B5BC;
margin-top: 10px;
display: flex;
justify-content: center;
align-items: center;
width: 130px;
height: 160px;
&:hover {
  background-color: #d8dfe3;`;

export const ModifyIcon = styled.img`
  width: 60px;
  height: 60px;
`;

export const ChatContainer = styled.div`
  flex-direction: column;
  height: max(28vw, 250px);
  width: max(35vw, 100px);
  margin: 10px;
  margin-left: -4.3vw;
  align-items: left;
`;
export const Chatnav = styled.div`
  flex-direction: raw;
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const Chatname = styled.p`
  color: ${({ theme }) => theme.text};
  font-style: normal;
  font-weight: 600;
  display: flex;
  margin: 0 10px;
  flex-grow: 1;
`;
export const Chatmore = styled(Link)`
  color: ${({ theme }) => theme.text};
  font-style: normal;
  font-weight: 500;
  margin-top: 10px;
  margin-right: 10px;
  font-size: 8px;
`;

export const Chatmain = styled.div`
  border-top: 1px solid rgba(102, 102, 102, 0.6);
  border-bottom: 1px solid rgba(102, 102, 102, 0.6);
  height: max(18vw, 20px);
  width: max(35vw, 100px);
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
`;

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px 10px 0px 10px;
`;

export const UserName = styled.h1`
  font-size: 9px;
  margin-top: 0.6rem;
`;

export const UserIcon = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

export const MessageFlexContainer = styled.div`
  display: flex;
  flex-direction: row; // 아이템을 가로로 배열
  align-items: flex-end; // 아이템을 컨테이너의 하단에 정렬
  width: 100%;
`;

export const MessageOther = styled.div`
  align-self: flex-start;
  display: flex;
  margin: 4px 0px;
`;

export const MessageMine = styled(MessageOther)`
  align-self: flex-end;
`;

export const MessageMinetext = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  border: 1px solid rgba(102, 102, 102, 0.6);
  background-color: #9be9a8;
  padding: 15px 20px;
  margin: 5px;
  word-wrap: break-word;
  overflow-wrap: break-word;
  font-size: 13px;
  color: black;
  max-width: 26vw;
`;
export const MessageOthertext = styled(MessageMinetext)`
  background-color: #fff;
  margin-bottom: 28px;
`;
