import React from "react";
import { ButtonList, Button } from './FeedbackOptions.styled'


const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    
       return  <>     
           <ButtonList>
               {options.map((option, id) => {
                   return <li key={id}>
                       <Button type='button' onClick={() => onLeaveFeedback(option)}>{option}</Button>
                   </li>
               })}
      </ButtonList>
        </>
  
}

export default FeedbackOptions