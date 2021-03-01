import React, { useContext } from 'react'
import styled from 'styled-components'
import { ProductionContext } from '../../context'
import '../../../../Asset/icomoonReal/style.css'

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
`;

const Body = styled.section`
`;

const BodyContainer = styled.article`
  margin-bottom:40px;
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
`;

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


const Question1 = () => {
  const { detail : { productioninfo :{ production: { question }} }} = useContext(ProductionContext)
  const userQuestionArray = question
  const totalQuestion = userQuestionArray.length

  return (
    <>
      <Container>
        <Header>
          <DivHeader>
            <Word>문의</Word>
            <Number>{totalQuestion}</Number>
          </DivHeader>
          <WriteButton>문의하기</WriteButton>
        </Header>
        <Body>
          {userQuestionArray.map((value, index) => {
            const nick = value.nickname.split('')
            const starNick = nick.slice(0, Math.floor(nick.length/2));
            nick.slice(Math.floor(nick.length/2), nick.length).map(value => starNick.push('*'));
            const resutNick = starNick.join('')
            
            return (
                <BodyContainer key={index}>
                  <BodyHeader>
                    <Type>{value.type} | {value.option} | {value.answer === 0 ? "미답변" : <TypeDifferent>답변완료</TypeDifferent>}</Type>
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
      </Container>
    </>
  )
}

export default Question1