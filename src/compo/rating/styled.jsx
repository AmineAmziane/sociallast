import styled from "styled-components";
export const RContainer = styled.div`
  width: 450px;
  background: hsl(300, 24%, 96%);
  display: flex;
  align-items: center;
  color: hsl(300, 43%, 22%);
  padding: 1em;
  margin: 1em 0;
  @media (max-width: 1250px) {
    margin: 1em auto;
  }
  @media (max-width: 600px) {
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
  }
  @media (min-width: 1600px) {
    width: 500px;
    padding: 1.5em 1em;
  }
  margin-left: ${(props) => props.transform};
`;
export const Text = styled.h4`
  width: 300px;
  margin-left: 1em;
  @media (max-width: 600px) {
    text-align: center;
    margin: 0.5em 0;
  }
  @media (min-width: 1600px) {
    font-size: 1.25rem;
  }
`;
