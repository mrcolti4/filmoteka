import React from 'react';

const RadioButton = ({ onChange, value, mediaType }) => {
  return (
    <label>
      <span>{value}</span>
      <input
        onChange={onChange}
        type="radio"
        name="media_type"
        value={value}
        checked={mediaType === value}
      />
    </label>
  );
};

export default RadioButton;
