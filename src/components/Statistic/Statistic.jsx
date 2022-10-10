import React from "react";

 const Statistic = ({good, neutral, bad, total, positivePercentage}) => {
    return <>
    <h2>Statistic</h2>
      <ul>
        <li>
          <p>Good: <span>{ good }</span></p>
        </li>
        <li>
          <p>Neutral: <span>{ neutral}</span></p>
        </li>
        <li>
          <p>Bad: <span>{ bad }</span></p>
        </li>
        <li>
          <p>Total: <span>{total}</span></p>
        </li>
        <li>
          <p>Positive feedback: <span>{positivePercentage} %</span></p>
        </li>
        </ul>
    </>
}

export default Statistic 