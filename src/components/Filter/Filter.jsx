import { useDispatch, useSelector } from 'react-redux';
import { LabelFilter, InputFilter } from './Filter.styled';
import { changingFilter } from 'redux/slices/filterSlice';
import { getFilter } from 'redux/selectors';
// import {
//   Editable,
//   EditableInput,
//   EditableTextarea,
//   EditablePreview,
// } from '@chakra-ui/react';

const Filter = () => {
  const dispatch = useDispatch();
  const selectedQuery = useSelector(getFilter);
  return (
    // <Editable defaultValue="Look for a contact">
    //   <EditablePreview />
    //   <EditableInput
    //     type="text"
    //     value={selectedQuery}
    //     onChange={e => {
    //       dispatch(changingFilter(e.currentTarget.value));
    //     }}
    //   />
    //   <EditableTextarea />
    // </Editable>

    <LabelFilter>
      Find contacts by name
      <InputFilter
        type="text"
        value={selectedQuery}
        onChange={e => {
          dispatch(changingFilter(e.currentTarget.value));
        }}
      />
    </LabelFilter>
  );
};

export default Filter;
