import { LoginWrapper, LoginLogo, LoginPart, Input, Logindiv, Switcher, Explain } from './LoginStyles';
import { ReactComponent as DarkLogo } from '../../assets/logo-light.svg';
import { ReactComponent as LightLogo } from '../../assets/logo-dark.svg';
import { FontColor, Highlight, Phrases, Text } from '../FirstMain/FirstMainStyles';
import { useTheTheme } from '../../components/Theme';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Error } from '../SignUp/SignUpStyles';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const { themeColor } = useTheTheme();
  const [isLoading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    if (isLoading || password === '' || email === '') return;
    //백엔드로 보낼 객체
    const user = {
      email: email,
      password: password,
    };
    console.log(user);
    try {
      setLoading(true);
      //axios써서 post로 보내기
      //유저 정보 받아오고 업데이트해주기
      const response = await axios.post('/api/members/login', user);
      //localhost문제.
      console.log(response.data);
      // localStorage.setItem('accessToken', response.data.accessToken);
      // localStorage.setItem('refreshToken', response.data.refreshToken);
      alert('Login successful!');
      //유저정보에 없거나 비밀번호,아이디 틀리면 에러바로 뜨게
      navigate('/main');
    } catch (e) {
      //에러 캐치
      alert('Login failed!');
      console.log(e);
    } finally {
      setLoading(false);
    }
    console.log(email, password);
  };
  return (
    <LoginWrapper>
      <LoginLogo>
        <Phrases>
          <div className="flex justify-center mb-8">
            <Link to="/">{themeColor === 'light' ? <LightLogo /> : <DarkLogo />}</Link>
          </div>
          <span>
            <Highlight>C</Highlight>ollaborative
          </span>
          <span>
            <Highlight>O</Highlight>line
          </span>
          <span>
            <Highlight>C</Highlight>oding
          </span>
          <span>
            <Highlight>O</Highlight>rganize
          </span>
          <div className="flex justify-center">
            <FontColor className="text-2xl mt-4">
              <Text>&quot;</Text>커뮤니티를 잇다<Text>,</Text>코딩을 넘어<Text>&quot;</Text>
            </FontColor>
          </div>
          <Explain className="text-sm mt-4">
            <span>
              COCO는 소통을 중시하는 사용자들을 위한
              <br /> 온라인 코딩의 미래를 모색합니다.
              <br />
              함께하는 코딩이 새로운 차원으로 확장되며,
              <br /> 사용자들 간의 연결을 위한 새로운 시작을 제공합니다.
            </span>
          </Explain>
        </Phrases>
      </LoginLogo>
      <LoginPart>
        <Logindiv onSubmit={onSubmit}>
          <span className="mb-5 text-lg text-black">이메일</span>
          <Input
            onChange={onChange}
            name="email"
            placeholder="이메일"
            type="email"
            required
            className="mb-14 text-black"
          />
          <span className="mb-5 text-lg text-black">비밀번호</span>
          <Input
            onChange={onChange}
            name="password"
            placeholder="비밀번호"
            type="password"
            required
            className="mb-14 text-black"
          />
          <Input type="submit" value="로그인" />
        </Logindiv>
        {error !== '' ? <Error>{error}</Error> : null}
        <Switcher className="text-black mt-7">
          아직 회원이 아니라면?{' '}
          <Link to="/signup" className="underline">
            회원가입 하러 가기 &rarr;
          </Link>
        </Switcher>
      </LoginPart>
    </LoginWrapper>
  );
};

export default Login;
