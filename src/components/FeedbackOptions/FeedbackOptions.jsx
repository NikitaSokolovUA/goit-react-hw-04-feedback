import React from 'react';
import { ButtonList, Button } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <ButtonList>
        {options.map((option, id) => {
          return (
            <li key={id}>
              <Button type="button" onClick={() => onLeaveFeedback(option)}>
                {option}
              </Button>
            </li>
          );
        })}
      </ButtonList>
    </>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
