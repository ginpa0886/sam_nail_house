import React, { useContext } from 'react'
import styled from 'styled-components'
import { ProductionContext } from '../../context'
import '../../../../Asset/icomoonReal/style.css'

const Container = styled.section`
  margin-bottom:34px;
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

const BodyContainer = styled.article``;
const BodyHeader = styled.div``

const Type = styled.div`
  font-size:12px;
  line-height:1.333333333333333;
  letter-spacing:-0.01em;
  color:rgba(63, 65, 80, 1);
`;

const Writer = styled.div`
  font-size:12px;
  line-height:1.333333333333333;
  letter-spacing:-0.01em;
  color:rgba(162, 165, 175, 1);
`;

const QIcon = styled.i`
  font-size:14px;
`;
const Text = styled.div`
  font-size:16px;
  line-height:1.5;
  letter-spacing:-0.01em;
  color:rgba(63, 65, 80, 1);
`;

const BodyBody = styled.div``;

const Question1 = () => {
  const { detail : { productioninfo :{ production: { question }} }} = useContext(ProductionContext)
  const userQuestionArray = question
  const totalQuestion = userQuestionArray.length

  return (
    <>
      <Header>
        <DivHeader>
          <Word>문의</Word>
          <Number>{totalQuestion}</Number>
        </DivHeader>
        <WriteButton>문의하기</WriteButton>
      </Header>
      <Body>
        <BodyContainer>
          <BodyHeader>
            <Type>구매 | 상품 | 미답변</Type>
            <Writer>지* | 2020년 12월 25일 13시 22분</Writer>
          </BodyHeader>
          <BodyBody>
            <QIcon className="icon-Q"></QIcon>
            <Text>상품받았는데
                  사용하면서 보니까 불들어오는곳 옆에
                  하얀 부분이 갈색으로 얼룩져있는데 불량인가요...?
                  위험하지는 않겠죠? 다른분들 후기사진에는 다 깨끗한 것 같아서요!
                  사진첨부가없어서 텍스트로 설명하려 하니 애매하네요 ㅠㅠ</Text>
          </BodyBody>
        </BodyContainer>
      </Body>
    </>
  )
}

export default Question1