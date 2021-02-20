import React from 'react'
import styled from 'styled-components'
import Loader from '../../Components/Loader'

const Container = styled.div``;
const Row = styled.div``;
const Col = styled.div``;

const Testword = styled.div``;

const ProductionDetail = () => {
  return (
    <> 
      <Container className="container">
        <Row className="row">
          <Col className="col-12">
            
            <Testword>Hi, here is prodcutionDetail</Testword>
          </Col>
        </Row>
      </Container>
    </>
  )
} 

export default ProductionDetail