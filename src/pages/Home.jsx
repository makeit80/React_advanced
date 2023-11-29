import styled from "styled-components"
import InputForm from '../components/InputForm'
import Letter from '../components/Letter'
import Header from '../components/Header'

import { useDispatch, useSelector } from "react-redux"
import { GeakoBtn, ChoizaBtn } from '../redux/modules/members'



function Home() {
  const members = useSelector((state) => {
    return state.members;
  })
  const dataList = useSelector((state) => {
    return state.dataProcess
  })
  const dispatch = useDispatch();

  // Q&A : useEffect를 활용해 변수의 값이 바뀔 때마다 state를 변경할 수는 없을까?
  // 꼭 useState를 써야하는걸까?
  // let shownMember = 'Geako'
  // useEffect(() => {
  //     console.log('바뀌었다!')
  // }, [shownMember])

  return (
    <div>
      <Header />
      <StBody>
        {/* Button */}
        <StUl>
          <StImg className='Geako' 
          src={process.env.PUBLIC_URL + '/img/geako_img.jpg'} 
          onClick={() => { dispatch({ type: GeakoBtn }) }}></StImg>
          <StImg className='Choiza' 
          src={process.env.PUBLIC_URL + '/img/choiza_img.png'} 
          onClick={() => { dispatch({ type: ChoizaBtn }) }}></StImg>
        </StUl>

        {/* Input */}
        <InputForm></InputForm>

        {/* Letter */}
        {
          dataList.value
            .filter(function (value) {
              return value.writedTo === members.member;
            })
            .map((item) => {
              return (
                  <Letter
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