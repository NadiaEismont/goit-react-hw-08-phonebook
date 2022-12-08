import { useDispatch, useSelector } from 'react-redux';
import { changingFilter } from 'redux/slices/filterSlice';
import { getFilter } from 'redux/selectors';
import { Input } from '@chakra-ui/react';

const Filter = () => {
  const dispatch = useDispatch();
  const selectedQuery = useSelector(getFilter);
  return (
    <Input
      value={selectedQuery}
      onChange={e => {
        dispatch(changingFilter(e.currentTarget.value));
      }}
      type="text"
      name="filter"
      placeholder="Look for a contact"
    />
  );
};

export default Filter;
