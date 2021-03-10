import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'


const Container = styled.div``;
const Row = styled.div``;
const Col = styled.div``;

const SLink = styled(Link)`
  margin-right:20px;
`;

const Word = styled.div`
  font-size:20px;
  
`;



const Home = () => {
  return (
    <>
       <Container className="container">
        <Row className="row">
          <Col className="col-12">
            <SLink to="/production/1">
              <Word>1</Word>
            </SLink>
            <SLink to="/production/2">
              <Word>2</Word>
            </SLink>
            <SLink to="/production/3">
              <Word>3</Word>
            </SLink>
            <SLink to="/production/4">
              <Word>4</Word>
            </SLink>
            <SLink to="/production/5">
              <Word>5</Word>
            </SLink>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home