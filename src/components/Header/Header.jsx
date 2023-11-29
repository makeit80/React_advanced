import React from 'react'
import styled from "styled-components"

function Header() {

    return (
        <StHeader style={{backgroundImage: `url(/img/concert.jpg)`}}>
            <StTitle>다이나믹 듀오 팬레터</StTitle>
        </StHeader>
    )
}

const StHeader = styled.header`
    background-color: #555555;
    background-size: cover;
    background-repeat: no-repeat;

    height: 100vh;
    width: 100vw;
    min-height: 500px;
    min-width: 1200px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    `


const StTitle = styled.h1`
    font-size: 100px;
    font-weight: bold;
    color: white;

    padding-bottom: 10vh;
    `

export default Header