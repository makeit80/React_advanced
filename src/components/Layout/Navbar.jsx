import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useSelector } from "react-redux"

function Navbar() {
    const navigate = useNavigate();
    const isLogin = useSelector((state) => state.loginState.userLogin)
    const userData = useSelector((state) => state.userData.value)

    function onClickNavigateHandler (address) {
        navigate(`${address}/`)
    }

    // TODO : absolute로 width 변경 시 버튼 겹치는 현상 해결
    return (
        <StWrapperDiv>
            <StDiv>
                <StP onClick={() => {onClickNavigateHandler('')}}>DD</StP>
                {
                !isLogin ? 
                <StLoginButton onClick={() => {onClickNavigateHandler('Login')}}>로그인</StLoginButton>
                :
                <StButtonDiv>
                    <StLoginButton>로그아웃</StLoginButton>
                    <StProfileButton onClick={() => {onClickNavigateHandler(`Profile/${userData.id}`)}}>프로필</StProfileButton>
                </StButtonDiv>
                }


            </StDiv>

        </StWrapperDiv>
    )
}

const StWrapperDiv = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
height: 80px;

background-color: white;

z-index: 100;
`

const StDiv = styled.div`
width: 100%;
height: 100%;
position: relative;
`
const StButtonDiv = styled.div`
`
const StLoginButton = styled.button`
position: absolute;
top: 25%;
right: 3%;

width: 100px;
height: 40px;

border: none;
border-radius: 5px;
`
const StProfileButton = styled.button`
position: absolute;
top: 25%;
right: 13%;

width: 100px;
height: 40px;

border: none;
border-radius: 5px;
`
const StP = styled.p`
position: absolute;
top: 20%;
left: 3%;

font-size: 40px;
font-weight: bold;
color: gray;
`

export default Navbar