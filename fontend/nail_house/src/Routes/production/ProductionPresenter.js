import React, { useContext } from 'react'
import styled from 'styled-components'
import Loader from '../../Components/Loader'
import { ProductionContext } from './context'
import '../../Asset/icomoon/style.css'
import ProductionMainImg from './Children/ProductionMainImg'
import ProductionDes from './Children/ProductionDes'
import ProductionGnb from './Children/ProductionGnb'
import ProductionDetail from './Children/ProductionDetail'
import ProductionBar from './Children/ProductionBar'


const Container = styled.div``;
const Row = styled.div``;
const Col = styled.div``;
const Test = styled.div`
  position: relative;
`;


const Categoryul = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-top: 24px;
  margin-bottom:40px;
`;

const Categoryli = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const CategoryContent = styled.div`
  font-size: 14px;
  line-height: 1.714285714285714;
  letter-spacing: -0.01em;
  font-weight: 400;
  color: #858896;
  margin-right: 4px;
`;

const CategoryIcon = styled.i`
  transform: rotate(-90deg);
  text-align: center;

  &::before{
    font-size: 12px;
    margin-right: 4px;
    padding-top: 6px;
  }
`;


const ProductionPresenter = () => {
  const { detail, detail : { productioninfo, loading }} = useContext(ProductionContext)
  let categoryView = [];

  // console.log(productioninfo);
  // console.log(loading);
  // console.log(detail);

  if(loading){
    const { category } = productioninfo 
    categoryView = category
  }
  
  // console.log(categoryView);
  return (
    <> 
      {!loading ? <Loader /> : 
        <Container className="container">
        <Row className="row">
          <Col className="col-12">
            {loading === false ? <Loader /> : 
            <Categoryul>
              {categoryView.map((value, index) => {
                  const idexA = index;
                  const idexB = (index + 1000);
                  
                if(index === 0){
                  return(
                    <Categoryli key={index}>
                      <CategoryContent key={idexA}>{value}</CategoryContent>
                    </Categoryli>
                  )
                }
                else if(value !== null){
                  return (
                    <Categoryli key={index}>
                      <CategoryIcon key={idexB} className="icon-Chevron" test={index}></CategoryIcon>
                      <CategoryContent key={idexA}>{value}</CategoryContent>
                    </Categoryli>
                  )
                }else{
                  return
                }
              }
              )}
            </Categoryul> }
          </Col>
        </Row>
      </Container>
      }
      {loading === false  ? <Loader /> :
        <>
        <Container className="container">
          <Row className="row">
            <Col className="col-7">
              <ProductionMainImg />
            </Col>
            <Col className="col-5">      
              <ProductionDes />
            </Col>
          </Row>
        </Container>
            <ProductionGnb />
        <Container className="container">
          <Row className="row">
            <Col className="col-8">
              <ProductionDetail />
            </Col>
            <Test className="col-4">
              <ProductionBar />
            </Test>
          </Row>
        </Container>
        </>
      }
        
      
    </>
  )
} 

export default ProductionPresenter