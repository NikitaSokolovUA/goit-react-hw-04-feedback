import React from "react";
import { ListItem, Text, StatisticText } from "./Statistic.styled";
import PropTypes from 'prop-types';


 const Statistic = ({good, neutral, bad, total, positivePercentage}) => {
    return <>
      <ul>
        <ListItem>
          <Text>Good: <StatisticText>{ good }</StatisticText></Text>
        </ListItem>
        <ListItem>
          <Text>Neutral: <StatisticText>{ neutral}</StatisticText></Text>
        </ListItem>
        <ListItem>
          <Text>Bad: <StatisticText>{ bad }</StatisticText></Text>
        </ListItem>
        <ListItem>
          <Text>Total: <StatisticText>{total}</StatisticText></Text>
        </ListItem>
        <ListItem>
          <Text>Positive feedback: <StatisticText>{positivePercentage} %</StatisticText></Text>
        </ListItem>
        </ul>
    </>
}

export default Statistic 

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
}