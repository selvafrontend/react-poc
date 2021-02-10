import styled from "styled-components";

const Home = styled.div`
  * {
    margin: 0;
    padding: 0;
  }
  #logo {
    font-size: 50px;
    color: maroon;
    padding: 10px 5px;
    font-weight: bold;
  }
  #mainBoard {
    width: 95%;
    height: 85vh;
    margin: 0 auto;
    border: 5px solid #444;
    border-radius: 10px;
    padding: 20px;
    background: #fff;
    overflow: scroll;
    h2 {
      text-align: center;
    }
    .sections {
      margin: 30px 10px;
      display: flex;
      flex-wrap: wrap;
      .section {
        flex: 1;
        .stickies {
          margin: 30px 10px;
          flex-wrap: wrap;
          flex-direction: column;
          height: 70vh;
          .sticky {
            display: inline-block;
            width: 200px;
            height: 150px;
            background: yellow;
            color: #000;
            padding: 20px;
            margin: 10px;
            &.new-sticky {
              display: none;
              &.show {
                display: block;
              }
            }
          }
        }
      }
    }
  }
`;

export default Home;
