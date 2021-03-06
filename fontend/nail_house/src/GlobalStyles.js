import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const globalStlyes = createGlobalStyle`
  ${reset}
  *{
    box-sizing: border-box;
    margin: 0;
    font-family:'Noto Sans KR', sans-serif;
  }

  a{
    text-decoration : none;
    color: inherit
  }

.container{
  width: 100%;
  max-width: 1120px;
  padding: 0;
  margin: 0 auto;
}

.row{
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

.col-1{
  width: 8.3333333333333335%;
  padding: 0 15px;
}

.col-2{
  width: 16.66666666666667%;
  padding: 0 15px;
}

.col-3{
  width: 25%;
  padding: 0 15px;
}

.col-4{
  width: 33.33333333333333%;
  padding: 0 15px;
}

.col-5{
  width: 41.66666666666667%;
  padding: 0 15px;
}

.col-6{
  width: 50%;
  padding: 0 15px;
}

.col-7{
  width: 58.33333333333333%;
  padding: 0 15px;
}

.col-8{
  width: 66.66666666666667%;
  padding: 0 15px;
}

.col-9{
  width: 75%;
  padding: 0 15px;
}

.col-10{
  width: 83.33333333333333%;
  padding: 0 15px;
}

.col-11{
  width: 91.66666666666667%;
  padding: 0 15px;
}

.col-12{
  width: 100%;
  padding: 0 15px;
}
`;

export default globalStlyes;