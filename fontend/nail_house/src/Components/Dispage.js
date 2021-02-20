import React from 'react'
import styled from 'styled-components'

const Container = styled.div``;
const Row = styled.div``;
const Col = styled.div``;

const PageDiv = styled.div``;

const Dispage = () => {

  return (
    <>
      <Container className="container">
        <Row className="row">
          <Col className="col-12">
            <PageDiv>
              해당 페이지가 없습니다!
            </PageDiv>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Dispage