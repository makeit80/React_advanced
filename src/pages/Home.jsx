import styled from "styled-components"
import InputForm from "../components/Body/InputForm"
import Letter from "../components/Body/Letter"
import Header from "../components/Header/Header"
import axios from 'axios';

import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { initialData } from "../redux/modules/dataStorage";
import { useEffect } from "react";



function Home() {
  const dispatch = useDispatch();
  const [selectedMember, setSelectedMember] = useState('Geako');

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("http://localhost:5000/comments")
      dispatch(initialData(data))
    }
    fetchData()
  }, [])
  const dataList = useSelector((state) => state.dataProcess)

  return (
    <div>
      <Header />
      <StBody>
        {/* Button */}
        <StUl>
          <StImg className='Geako' 
          src={process.env.PUBLIC_URL + '/img/geako_img.jpg'} 
          onClick={() => { setSelectedMember('Geako') }}></StImg>
          <StImg className='Choiza' 
          src={process.env.PUBLIC_URL + '/img/choiza_img.png'} 
          onClick={() => { setSelectedMember('Choiza') }}></StImg>
        </StUl>

        {/* Input */}
        <InputForm></InputForm>

        {/* Letter */}
        {
          dataList.value
            .filter(function (value) {
              return value.writedTo === selectedMember;
            })
            .map((item) => {
              return (
                  <Letter
                  key={item.id} // TODO uuid로 변경
                  id={item.id}
                  nickname={item.nickname}
                  content={item.content}
                  avatar={item.avatar}
                  createdAt={item.createdAt}
                  >
                  </Letter>
              )
            })
        }
      </StBody>
    </div>
  )
}


const StBody = styled.body`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

`

const StUl = styled.ul`
width: 700px;   
height: 400px; 
position: relative;
text-align: center;
`
const StImg = styled.img`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

object-fit: cover;
width: 250px;
height: 250px;

bottom:21%;

cursor: pointer;

position: absolute;
&.Geako {
  left:3%;
}
&.Choiza {
  right: 3%;
  
}

&:hover {
  border: 3px solid gray;
  transition: 0.5s;
}
`


export default Home