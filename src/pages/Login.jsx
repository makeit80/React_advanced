import axios from 'axios';
import React, { useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import { insertUserData } from '../redux/modules/userData'
import { switchUserState } from '../redux/modules/loginState';


function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSingUp, setIsSignUp] = useState(false);
  const [form, setform] = useState({ name: '', id: '', password: '' });

  function onClickSignUpHandler(e) {
    e.preventDefault();
    setIsSignUp(isSingUp => !isSingUp)
  }

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setform({ ...form, [name]: value }
    )
  }

  const onClickFetchHandler = async (e) => {
    e.preventDefault();
    const { data } = await axios.get("http://localhost:5000/user")
    const target = data.find((item) => item.id === form.id)

    !isSingUp ?
      (target ? login(target) : alert('아이디를 확인해주세요')) :
      (!target ? SignUp() : alert('동알힌 아이디가 존재합니다'));
  };

  const login = (target) => {
    return target.password === form.password
      ? (dispatch(insertUserData(target)),
        dispatch(switchUserState(true)),
        navigate('/'))
      : alert('비밀번호를 확인해주세요')
    // TODO : react-toastify 비밀번호 틀림 표시
  }
  // TODO : 닉네임 중복 vaildation check 구현
  const SignUp = async () => {
    await axios.post("http://localhost:5000/user", form)
    setform({ name: '', id: '', password: '' })
    setIsSignUp(false);
    // TODO : react-toastify 회원가입 완료 표시
  }


  // TODO : 회원가입 state vaildation check


  // TODO : styled-components props 내려주는 방법 더 찾아보기
  // 현재 쓰는 방법보다 더 가독성 좋고 깔끔하게 쓸 수 있을거 같음
  return (
    <StDiv>
      <StForm>
        {isSingUp ?
          <StInput
            value={form.nickName}
            onChange={onChangeHandler}
            type='text'
            name='nickName'
            placeholder='닉네임을 입력해주세요'
            autoComplete='off'
          /> : null}
        <StInput
          value={form.id}
          onChange={onChangeHandler}
          type='text'
          name='id'
          placeholder='아이디를 입력해주세요'
          autoComplete='off'
        />
        <StInput
          value={form.password}
          onChange={onChangeHandler}
          type='password'
          name='password'
          placeholder='비밀번호를 입력해주세요'
          autoComplete='off'
        />

        <StButton
          type='submit'
          onClick={onClickFetchHandler}
        >
          {isSingUp ? 'Sign Up' : 'Sign In'}
        </StButton>

        <StStateButton
          onClick={onClickSignUpHandler}
        >
          {isSingUp ? '로그인 페이지로 이동' : '회원가입 페이지로 이동'}
        </StStateButton>
      </StForm>
    </StDiv>
  )
}

const StDiv = styled.div`
height: 100vh;
width: 100vw;

display: flex;
align-items: center;
justify-content: center;

background-color: #ededed;
`
const StForm = styled.form`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

width: 500px;
height: 800px;
border-radius: 15px;
box-shadow: 3px 3px 3px 3px #d4d4d4;

position: relative;

background-color: #ffffff;
`
const StInput = styled.input`
width: 300px;
height: 40px;

border: none;
outline: none;
border-bottom: 2px solid gray;

text-align: center;
font-size: 15px;
`
const StButton = styled.button`
width: 300px;
height: 40px;

position: absolute;
bottom: 30%;

border-radius: 5px;
border: none;

cursor: pointer;

&:hover {
  background-color: #ededed;
  transition: 0.5s;
}
`
const StStateButton = styled.button`
width: 500px;
height: 30px;

position: absolute;
bottom: 0%;

background-color: #d6d6d6;
border: none;

cursor: pointer;
`

export default Login