import React from "react";
import { ListItem, Text, StatisticText } from "./Statistic.styled";

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