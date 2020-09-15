import React from "react";
import Rating from "@material-ui/lab/Rating";
import { makeStyles } from "@material-ui/core/styles";
import { RContainer, Text } from "./styled.jsx";
const useStyles = makeStyles((theme) => {
  return {
    large: {
      [theme.breakpoints.up(1600)]: {
        fontSize: "28px",
      },
    },
  };
});
const Star = ({ text, transform }) => {
  const classes = useStyles();
  return (
    <div>
      <RContainer transform={transform}>
        <Rating name="read-only" value={5} readOnly className={classes.large} />
        <Text>{text}</Text>
      </RContainer>
    </div>
  );
};
const RatingS = () => {
  return (
    <div>
      <Star text="Rated 5 Stars in Reviews" transform="-100px" />
      <Star text="Rated 5 Stars in Report Guru" transform="-50px" />
      <Star text="Rated 5 Stars in BestTech" />
    </div>
  );
};
export default RatingS;
