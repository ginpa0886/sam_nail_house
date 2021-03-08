import React, { useCallback, useContext } from 'react'
import styled from 'styled-components'
import { ProductionContext } from '../../context'
import '../../../../Asset/icomoon/style.css'

const Container = styled.section`
  position:fixed;
  background-color:rgba(0,0,0,.5);
  width:100%;
  height:100%;
  top:0;
  left:0;
  z-index:10000;
  display:${props => props.bgDisplay === true ? "block" : "none"};
`;

const Box = styled.div`
  background-color:white;
  width:624px;
  min-height: 687px;
  position:absolute;
  top:100px;
  left:100px;
  border-radius:4px;
  padding:40px;
`;

const Header = styled.div`
  width:100%;
  text-align: center;
  font-size: 17px;
  font-weight: 700;
  line-height: 1.35;
  color: #292929;
  margin-bottom: 30px;
  position:relative;
`;

const SubCon = styled.div`
  width:100%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:flex-start;
  margin-bottom:30px;
`;
const Sub = styled.div`
  width:100%;
  font-size: 15px;
  font-weight: 700;
  color: #292929;
  margin-bottom: 16px;
  letter-spacing: -0.4px;
`;
const TypeCon = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:100%;
`;

const TypeDiv = styled.div`
  width:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  
`;

const Type = styled.div`
  width:100%;
  border:1px solid #dbdbdb;
  background-color:white;
  font-size:15px;
  line-height:40px;
  letter-spacing: -0.4px;
  text-align:center;

  &:hover{
    background-color:#dbdbdb;
    cursor: pointer;
  }
`;

const SelectButton = styled.button`
  color: #424242;
  background-color:white;
  width:100%;
  height:40px;
  padding:0 30px;
  text-align:start;
  margin-bottom:16px;
  border-radius:4px;
  position: relative;
  border:1px solid #dbdbdb;
  &:focus{
    outline:none;
    cursor: pointer;
  }
`;

const SelectIcon = styled.div`
  font-size:22px;
  position:absolute;
  top:10px;
  right:20px;
`;

const NoneSelectCon = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
`;
const NoneButton = styled.button`
  width:22px;
  height:22px;
  border:solid 1px #dbdbdb;
  background-color:white;
  margin-right:10px;
  &:hover{
    cursor: pointer;
  }
  &:focus{
    outline:none;
  }
`;
const NoneWord = styled.div`
  color: #424242;
  font-size:14px;
  line-height:40px;
  letter-spacing: -0.4px;
`;

const QuestionInput = styled.input`
  width:100%;
  padding:9px;
  min-height:110px;
  text-align:top;
`;

const Footer = styled.div`
  width:100%;
  font-size: 13px;
  line-height: 1.46;
  letter-spacing: -0.4px;
  color: #757575;
  margin-bottom:16px;
`;
const CompleteButton = styled.button`
  width:100%;
  background-color:#09addb;
  border-radius:4px;
  color:white;
  font-size: 17px;
  line-height: 26px;
  padding:11px;
  text-align:center;
  border:none;
`;

const CloseIcon = styled.div`
  position:absolute;
  font-size:22px;
  top:0;
  right:0;

  &:hover{
    cursor: pointer;
  }
`;

const Div = styled.div``;

const WriteQuestion = () => {
  const {questionPage, questionPage:{ questionDisplay }, setQuestionPage} = useContext(ProductionContext)

  const typeCheck = (e) => {
    const { target: { innerText }} = e;
    console.log(innerText);
  }

  return (
    <Container bgDisplay={questionPage.questionDisplay}>
      <Box>
        <Header>상품 문의하기
          <CloseIcon className="icon-Close" onClick={() => setQuestionPage({...questionPage, questionDisplay:false})}></CloseIcon>
        </Header>
        <SubCon>
          <Sub>문의유형</Sub>
          <TypeCon>
            <TypeDiv>
              <Type onClick={typeCheck}>상품</Type>
              <Type>배송</Type>
              <Type>반품</Type>
            </TypeDiv>
            <TypeDiv>
              <Type>교환</Type>
              <Type>환불</Type>
              <Type>기타</Type>
            </TypeDiv>
          </TypeCon>
        </SubCon>
        <SubCon>
          <Sub>상품 및 옵션</Sub>
          <SelectButton>선택해주세요
            <SelectIcon className="icon-Chevron"></SelectIcon>
          </SelectButton>
          <NoneSelectCon>
            <NoneButton></NoneButton>
            <NoneWord>선택안함</NoneWord>
          </NoneSelectCon>
        </SubCon>
        <SubCon>
          <Sub>문의 내용</Sub>
          <QuestionInput placeholder="문의 내용을 입력하세요" />
        </SubCon>
        <Footer>문의 내용에 대한 답변은 '마이페이지>나의쇼핑>나의 문의내역'또는 '상품 상세페이지'에서 확인 가능합니다.</Footer>
        <CompleteButton>완료</CompleteButton>
      </Box>
    </Container>
  )
}

export default WriteQuestion