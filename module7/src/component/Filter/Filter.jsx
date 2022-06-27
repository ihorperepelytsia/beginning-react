import React from "react";
import { onChangeFilterStore } from "../../redux/contactsSlice";
import { useSelector, useDispatch } from "react-redux";
import { getFilter } from "../../redux/selectors";
import { Label, Input } from "../ContactForm/ContactForm.styled";

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChangeFilter = ({ target: { value } }) => {
    dispatch(onChangeFilterStore(value));
  };
  return (
    <Label>
      Find Contacts by Name
      <Input name="filter" onChange={onChangeFilter} value={filter} />
    </Label>
  );
};

export default Filter;
