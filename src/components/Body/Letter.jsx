import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from "styled-components"

function Letter({ id, nickname, content, avatar, createdAt }) {
    const navigate = useNavigate();

    function contentVaildationCheck(content) {
        if (content.length > 50) {
            return `${content.substring(0, 50)}...`
        } else {
            return content
        }
    }

    return (
        <StDiv>
            <StUl>
                <StLi>
                    <StSection>
                        <StFigure>
                            <img src={avatar}></img>
                        </StFigure>
                        <StDiv>
                            <StSpan>{`${nickname}`}</StSpan>
                            <StTime>{createdAt}</StTime>
                        </StDiv>
                    </StSection>
                    <StP onClick={() => { navigate(`/Detail/${id}`) }}
                    >{contentVaildationCheck(content)}
                    </StP>
                </StLi>
            </StUl>
        </StDiv>
    )
}

const StDiv = styled.div`
background-color: gray;
margin: 20px;

border-radius: 10px;

&:hover {
box-shadow: 3px 3px 5px 3px gray;
transition: 0.5s;
}
`
const StUl = styled.ul`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
const StLi = styled.li`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

position: relative;

width: 700px;
height: 350px;
`
const StSection = styled.section`
position : absolute;
top: 10%;
width: 80%;
height: 40%;
`

const StFigure = styled.figure`
width: 130px;
height: 130px;
position : absolute;
left: 7%;
top: 15%;

`
const StSpan = styled.span`
position: absolute;
left: 40%;
top: 40%;

font-size: 20px;
font-weight: bold;
letter-spacing: 1.2px;

`
const StTime = styled.time`
position: absolute;
left: 40%;
top: 70%;

font-size: 20px;
letter-spacing: 1.2px;

`
const StP = styled.p`
position: absolute;
width: 80%;
height: 20%;
bottom: 10%;

text-align: center;
border-radius: 10px;
background-color: #dddddd;

display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

cursor: pointer;

&:hover {
border: 5px solid #747474;
transition: 1s;
}


`

export default Letter