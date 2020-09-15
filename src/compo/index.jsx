import React from "react";
import Desc from "./desc/";
import RatingS from "./rating/";
import Cards from "./avis/";
import styled from "styled-components";

const Top = styled.div`
  padding: 6em 0 2em 0;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1250px) {
    flex-direction: column;
    justify-content: center;
  }
`;
const Index = () => {
  return (
    <div>
      <Top>
        <Desc />
        <RatingS />
      </Top>
      <Cards />
    </div>
  );
};

export default Index;
