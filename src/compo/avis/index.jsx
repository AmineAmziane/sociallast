import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import colton from "./../../images/image-colton.jpg";
import anne from "./../../images/image-anne.jpg";
import irene from "./../../images/image-irene.jpg";
import {
  AContainer,
  TitleContainer,
  AvatarDiv,
  Title,
  Buyer,
  About,
  AvisContainer,
} from "./styled.jsx";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(6),
    height: theme.spacing(6),
    [theme.breakpoints.up(1600)]: {
      width: theme.spacing(8),
      height: theme.spacing(8),
    },
  },
}));
const Card = ({ img, title, text, transform }) => {
  const classes = useStyles();
  return (
    <div>
      <AContainer transform={transform}>
        <TitleContainer>
          <AvatarDiv>
            <Avatar alt={title} src={img} className={classes.large} />
          </AvatarDiv>
          <div>
            <Title>{title}</Title>
            <Buyer>Verified Buyer</Buyer>
          </div>
        </TitleContainer>
        <About>{text}</About>
      </AContainer>
    </div>
  );
};
const Cards = () => {
  return (
    <div>
      <AvisContainer>
        <Card
          img={colton}
          title="Colton Smith"
          text='"We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!"'
        />
        <Card
          img={anne}
          title="Irene Roberts"
          text='"Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."'
          transform="20px"
        />
        <Card
          img={irene}
          title="Anne Wallace"
          text='"Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!"'
          transform="40px"
        />
      </AvisContainer>
    </div>
  );
};
export default Cards;
