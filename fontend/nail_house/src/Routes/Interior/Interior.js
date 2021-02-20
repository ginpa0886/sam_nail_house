import React from 'react'
import styled from 'styled-components'


const Container = styled.div``;
const Row = styled.div``;
const Col = styled.div``;

const Interior = () => {
  return (
    <>
      <Container className="container">
        <Row className="row">
          <Col className="col-12">
            Interior
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Interior