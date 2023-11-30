import React from 'react'
import { useState } from 'react';

import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"

import { editUserName } from '../redux/modules/userData';
import axios from 'axios';

function Profile() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userData.value)

  const [isEdit, setIsEdit] = useState(false);
  const [editValue, setEditValue] = useState(userData.name);

  function onChangeHandler (e) {
    setEditValue(e.target.value)
  }
  const onClickEditSwitchHandler = async () => {
    return !isEdit 
    ? setIsEdit(true) 
    : (setIsEdit(false), 
      dispatch(editUserName(editValue)),
      await axios.put(`http://localhost:5000/user/${userData.id}`, {
        ...userData, name: editValue
      })
      )
  }

  // TODO : 이미지 수정 기능


  // TODO : 내가 쓴 글 모아보기
  const dataList = useSelector((state) => state.dataProcess)



  return (
    <StWrapperDiv>
      <StDiv>
        <StFigure>
          <StImg src={userData.profileImg}></StImg>
        </StFigure>

        <StStpan top={'55%'}>닉네임</StStpan>
        {!isEdit 
        ? <StP top={'55%'}>{editValue}</StP> 
        : <StTextarea value={editValue} onChange={onChangeHandler} top={'55%'}></StTextarea>}
        <StStpan top={'75%'}>아이디</StStpan>
        <StP top={'75%'}>{userData.id}</StP>
        <StButton onClick={onClickEditSwitchHandler} right={'0%'}>{!isEdit ? '수정' : '수정완료'}</StButton>
        {isEdit ? <StButton right={'20%'}>취소</StButton> : <></>}
      </StDiv>
    </StWrapperDiv>
  )
}

const StWrapperDiv = styled.div`
width: 100vw;
height: 100vh;

display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

`
const StDiv = styled.div`
width: 600px;
height: 600px;
background-color: gray;
border-radius: 10px;

position: relative;
`
const StSection = styled.section`
border: 1px solid red;
`

const StFigure = styled.figure`
width: 200px;
height: 200px;

position: absolute;
top: 10%;
left: 32%;

`
const StImg = styled.img`
width: 100%;
height: 100%;
  border-radius: 50%;
`
const StStpan = styled.span`
position: absolute;
top: ${(props) => props.top};
left: 15%;

background-color: white;
width: 100px;
height: 30px;

text-align: center;
`
const StP = styled.p`
position: absolute;
top: ${(props) => props.top};
left: 35%;

background-color: white;
width: 300px;
height: 30px;

`
const StTextarea = styled.textarea`
position: absolute;
top: ${(props) => props.top};
left: 35%;

background-color: white;
width: 295px;
height: 25px;

`
const StButton = styled.button`
position: absolute;
top: 0%;
right: ${(props) => props.right};

border: none;
width: 100px;
`

export default Profile