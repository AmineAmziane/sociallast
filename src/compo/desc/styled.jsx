import styled from "styled-components";
export const Term = styled.h1`
  width: 424px;
  font-size: 3rem;
  line-height: 3rem;
  color: hsl(300, 43%, 22%);
  margin: 0.25em 0;
  @media (max-width: 600px) {
    font-size: 2rem;
    line-height: 2rem;
    text-align: center;
  }
  @media (max-width: 1250px) {
    width: 100%;
    text-align: center;
  }
  @media (min-width: 1600px) {
    width: 584px;
    font-size: 4.25rem;
    line-height: 4.25rem;
  }
`;
export const Info = styled.p`
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5rem;
  color: hsl(303, 10%, 53%);
  @media (max-width: 600px) {
    font-size: 1.25rem;
    text-align: center;
  }
  @media (max-width: 1250px) {
    text-align: center;
  }
  @media (min-width: 1600px) {
    font-size: 1.5rem;
    line-height: 2rem;
  }
`;
export const Container = styled.div`
  width: 544px;
  padding: 0 20px;
  margin: 0 auto;
  text-align: left;
  font-family: "Spartan", sans-serif;
  @media (max-width: 600px) {
    width: 100%;
  }
  @media (min-width: 1600px) {
    width: 784px;
  }
`;
