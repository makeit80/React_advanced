import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components';

import { useDispatch, useSelector } from "react-redux"
import { editData } from '../redux/modules/dataStorage';


function Detail() {
  // Basic
  const params = useParams();
  const navigate = useNavigate();

  const dataList = useSelector((state) => {
    return state.dataProcess
  })
  const dispatch = useDispatch();

  const targetData = dataList.value.find((value) => {
    return value.id === params.id;
  });

  // Remove
  function onClickRemoveHandler(value) {
    if (window.confirm("삭제하시겠습니까?")) {
      const data = value.filter((list) => list.id !== params.id)
      dispatch(editData(data))
      navigate("/")
      alert("삭제 완료")
    } else {
      alert("취소되었습니다.");
    }

    // TODO : 삭제 후 뒤로가기 시 이전 주소를 기억해 오류 나는 문제 해결
  }

  // Edit
  const [editState, setEditState] = useState(false);
  const [editValueState, setEditValueState] = useState(targetData.content)
  const buttonNameSwitch = editState ? 'Complete' : 'Edit'

  function onClickEditHandler() {
    setEditState(editState => !editState)
    if (editState === true) {
      const updatedLetters = dataList.value.map((item) =>
        item.id === params.id ? { ...item, content: editValueState } : item
      );
      dispatch(editData(updatedLetters))
      setEditState(false);
    }
  }
  function onChangeHandler(e) {
    setEditValueState(e.target.value)
  }



  return (
    <StDiv>
      <StLink to={'/'}>Home</StLink>
      <StSection>
        <Sdiv>
          <StFigure>
            <img src={targetData.avatar}></img>
          </StFigure>
          <StLabel>닉네임 : {targetData.nickname}</StLabel>
          <StTime>작성일 : {targetData.createdAt}</StTime>
        </Sdiv>
        <StP height={'35px'}>To. {targetData.writedTo}</StP>
        {editState ? <StTextarea value={editValueState} onChange={onChangeHandler}></StTextarea> : <StP height={'200px'}>{editValueState}</StP>}
      </StSection>
      <StButton left={'52.7%'} top={'17.5%'} onClick={onClickEditHandler}>{buttonNameSwitch}</StButton>
      <StButton left={'61%'} top={'17.5%'} onClick={() => { onClickRemoveHandler(dataList.value) }}>Delete</StButton>
    </StDiv>
  )
}


const StDiv = styled.div`
width: 100vw;
height: 100vh;

display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
text-align: center;
`
const StSection = styled.section`
height: 600px;
width: 700px;
background-color: gray;

border: 10px solid gray;
border-radius: 10px;
`
const Sdiv = styled.div`
position: relative;
height: 300px;
background-color: #dddddd;

font-weight: bold;
font-size: 18px;
color: #464646;
border-radius: 10px;

`
const StLabel = styled.label`
position: absolute;
left: 46%;
top: 40%;
`
const StTime = styled.time`
position: absolute;
left: 46%;
bottom: 39%;
`
const StFigure = styled.figure`
position: absolute;
left: 15%;
bottom: 25%;

width: 150px;
height: 150px;
`
const StButton = styled.button`
position: absolute;
left: ${(props) => props.left};
top: ${(props) => props.top};

width: 100px;
height: 25px;
border-radius: 10px;
border: none;
background-color: #cecece;

display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

text-decoration: none;
color: #555555;
font-size: 15px;
font-weight: bold;

&:hover {
background-color: gray;
color: white;
transition: 0.5s;
}
`
const StP = styled.p`
height: ${(props) => props.height};
margin-top: 25px;
background-color: #dddddd;
border-radius: 10px;

padding: 1px;
`

const StTextarea = styled.textarea`
width: 680px;
height: 180px;

margin-top: 25px;
background-color: #eaeaea;
border-radius: 10px;

font-size: 20px;
letter-spacing: 1.8px;
padding: 10px;

`
const StLink = styled(Link)`
position: absolute;
right: 23.3%;
top: 17.5%;

width: 100px;
height: 25px;
border-radius: 10px;
background-color: #cecece;

display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

text-decoration: none;
color: #555555;
font-size: 15px;
font-weight: bold;

&:hover {
background-color: gray;
color: white;
transition: 0.5s;
}
`



export default Detail