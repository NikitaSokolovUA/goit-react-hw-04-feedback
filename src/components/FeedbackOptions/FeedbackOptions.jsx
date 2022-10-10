import React, { Component } from "react";
import { ButtonList, Button } from './FeedbackOptions.styled'


class FeedbackOptions extends Component {

    render() {
        const { options, onLeaveFeedback } = this.props
    
       return  <>
        <h2>Please leave feedback</h2>
  
           <ButtonList>
               {options.map((option, id) => {
                   return <li key={id}>
                       <Button type='button' onClick={() => onLeaveFeedback(option)}>{option}</Button>
                   </li>
               })}
          {/* <li><Button type='button' onClick={()=>onLeaveFeedback('good')}>Good</Button></li>
          <li><Button type='button' onClick={()=>onLeaveFeedback('neutral')}>Neutral</Button></li>
          <li><Button type='button' onClick={()=>onLeaveFeedback('bad')}>Bad</Button></li> */}
      </ButtonList>
        </>
    }
}

export default FeedbackOptions