import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(reaction => (
        <button
          key={reaction}
          onClick={() => onLeaveFeedback(reaction)}
          style={{ margin: '10px', fontSize: '20px' }}
        >
          {reaction}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
