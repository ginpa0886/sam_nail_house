import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { ProductionContext } from '../../context'
import '../../../../Asset/icomoonReal/style.css'
import WriteQuestion from './WriteQuestion'

const Container = styled.section`
  margin-bottom:80px;
`;


const Header = styled.article`
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:18px 0px;
`;

const Div = styled.div`
`;

const DivHeader = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
`
const Word = styled.div`
  color:rgba(27, 28, 50, 1);
  font-size:18px;
  line-height:1.555555555555556;
  letter-spacing:-0.02em;
  font-weight:700;
  margin-right:8px;
`;
const Number = styled.span`
  color:rgba(61, 168, 245, 1);
  font-size:18px;
  line-height:1.555555555555556;
  letter-spacing:-0.02em;
  font-weight:700;
  margin-right:8px;
`;

const WriteButton = styled.button`
  color:rgba(61, 168, 245, 1);
  font-size:16px;
  line-height:1.5;
  letter-spacing:-0.01em;
  font-weight:700;
  border:none;
  background-color:white;

  &:hover{
    cursor: pointer;
  }
`;

const Body = styled.section`
`;

const BodyContainer = styled.article`
  margin-bottom:40px;
  display:${props => props.forPage === true ? "block" : "none"};
`;

const BodyHeader = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:flex-start;
  margin-bottom:20px;
`;

const Type = styled.div`
  font-size:12px;
  line-height:1.333333333333333;
  letter-spacing:-0.01em;
  color:rgba(63, 65, 80, 1);
  margin-bottom:8px;
  display:flex;
  justify-content:center;
  align-items:center;
`;

const TypeItem = styled.div``

const TypeDifferent = styled.div`
  color:rgba(61, 168, 245, 1);
`;


const Writer = styled.div`
  font-size:12px;
  line-height:1.333333333333333;
  letter-spacing:-0.01em;
  color:rgba(162, 165, 175, 1);
`;

const BodyBody = styled.div`
  display:flex;
  justify-content:flex-start;
  align-items:flex-start;
  margin-bottom:${props => props.checkAnswer};
`;

const QIcon = styled.i`
  font-size:14px;
  margin-right:11px;
  padding-top:5px;
`;

const Text = styled.div`
  font-size:16px;
  line-height:1.5;
  letter-spacing:-0.01em;
  color:rgba(63, 65, 80, 1);
`;

const SecretContainer = styled.div`
  display:flex;
  justify-content:flex-start;
  align-items:center;
`;
const SecretIcon = styled.div`
  color:#A2A5AF;
  font-size:16px;
`;
const SecretText = styled.div`
  margin-left:8px;
  font-size:16px;
  line-height:1.5;
  letter-spacing:-0.01em;
  color:rgba(63, 65, 80, 1);
`;

const Button = styled.button`
  width:50px;
  height:50px;
  border:1px solid #35c5f0;
  background-color:${props => props.forColor === true ? "#35c5f0" : "white"};
  color:${props => props.forColor === true ? "white" : "#35c5f0"};
  font-size:22px;
  font-weight:700;
  border-radius:4px;
  margin-right:15px;

  &:last-child{
    margin-right:0;
  }

  &:focus{
    outline:none;
  }
`;
const ButtonDiv = styled.div`
  width:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  margin-bottom:40px;
`;


const Question1 = () => {
  const { detail : { productioninfo :{ production: { question }} }, questionPage, questionPage : {questionDisplay}, setQuestionPage} = useContext(ProductionContext)
  const userQuestionArray = question
  const totalQuestion = userQuestionArray.length
  const howManyButton = Math.floor(userQuestionArray.length / 5) + 1
  const repeatButton = userQuestionArray.filter((value, index) => {
    if(index <= howManyButton){
      return index
    }else{
      return
    }
  })

  const [page, setPage] = useState({
    page:1,
    pageSize:5
  })

  const openQuestion = () => {
    setQuestionPage({...questionPage, questionDisplay:true})
  }

  const chagnePage = (e) => {
    const {target:{innerText}} = e;
    const typeInnerText = +innerText
    setPage({...page, page:typeInnerText})
  }

  return (
      <Container>
        <Header>
          <DivHeader>
            <Word>문의</Word>
            <Number>{totalQuestion}</Number>
          </DivHeader>
          <WriteButton onClick={openQuestion}>문의하기</WriteButton>
        </Header>
        <Body>
          {userQuestionArray.map((value, index) => {
            const nick = value.nickname.split('')
            const starNick = nick.slice(0, Math.floor(nick.length/2));
            nick.slice(Math.floor(nick.length/2), nick.length).map(value => starNick.push('*'));
            const resutNick = starNick.join('');

            // page에 따른 display 값 변동을 위한 검사 변수
            const checkPage = Math.floor(index / page.pageSize) + 1 === page.page ? true : false;

            return (
                <BodyContainer key={index} forPage={checkPage}>
                  <BodyHeader>
                    <Type>
                      <TypeItem>{value.type} | </TypeItem>
                      <TypeItem>{value.option} | </TypeItem>
                      {value.answer === 0 ? 
                        <TypeItem>미답변</TypeItem> : 
                        <TypeDifferent>답변완료</TypeDifferent>}
                      </Type>
                    <Writer>{resutNick} | 2020년 12월 25일 13시 22분</Writer>
                  </BodyHeader>
                  <BodyBody checkAnswer={value.answer === 0 ? "none" : "10px"}>
                    <QIcon className="icon-Q"></QIcon>
                    <Text>
                      {value.secret === 0 ? value.text : 
                        <SecretContainer>
                          <SecretIcon className="icon-Lock1"></SecretIcon>
                          <SecretText>비밀글입니다.</SecretText>
                        </SecretContainer>
                      }
                    </Text>
                  </BodyBody>
                  {value.answer === 0 ? <></> : 
                  <>
                    <BodyBody>
                      <QIcon className="icon-A"></QIcon>
                      <Text>{value.answer_text}</Text>
                    </BodyBody>
                  </>
                }
                </BodyContainer>
            )
          })}
        </Body>
        <ButtonDiv>
          {repeatButton.map((value, index) => {
            const color = page.page === (index + 1) ? true : false;
            
            return (
              <Button key={index} onClick={chagnePage} forColor={color}>{index + 1}</Button>
            )
            
          })}
        </ButtonDiv>
        <WriteQuestion />
      </Container>
  )
}

export default Question1