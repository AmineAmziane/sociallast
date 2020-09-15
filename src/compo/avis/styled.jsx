import styled from "styled-components";
export const AContainer = styled.div`
  width: 340px;
  background: hsl(300, 43%, 22%);
  font-family: "Spartan", sans-serif;
  border-radius: 5px;
  padding: 2em 1.5em;
  @media (max-width: 1250px) {
    margin: 1em auto;
    transform: translateY(0);
  }
  @media (max-width: 450px) {
    width: 100%;
  }
  @media (min-width: 1600px) {
    width: 420px;
  }
  transform: translateY(${(props) => props.transform});
`;
export const TitleContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 1em 0;
  text-align: left;
`;
export const AvatarDiv = styled.div`
  margin-right: 20px;
`;
export const Title = styled.h5`
  color: #fff;
  margin: 0.5em 0;
  @media (min-width: 1600px) {
    font-size: 18px;
  }
`;
export const Buyer = styled.p`
  font-size: 14px;
  color: hsl(333, 80%, 67%);
  opacity: 0.6;
  @media (min-width: 1600px) {
    font-size: 18px;
  }
`;
export const About = styled.p`
  color: #fff;
  text-align: left;
  font-size: 13px;
  line-height: 24px;
  font-weight: 500;
  @media (min-width: 1600px) {
    font-size: 18px;
  }
`;
export const AvisContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 1250px) {
    flex-direction: column;
  }
`;
