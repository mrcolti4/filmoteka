import Select from 'react-select';

const SelectFilter = props => {
  return (
    <Select
      {...props}
      closeMenuOnSelect={false}
      isMulti
      name="genres"
      placeholder="Choose genres"
    />
  );
};

export default SelectFilter;
