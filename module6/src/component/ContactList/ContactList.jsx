import React from "react";
import { useSelector, useDispatch } from "react-redux";
import firstLaterToUpperCase from "../../utils/firstLaterToUpperCase";
import { deleteContactStore } from "../../redux/contactSlice";
import { getVisibleContactList } from "../../redux/selectors";
import { List, Items, Text, Button } from "./ContactList.styled";
import { AiFillCloseCircle } from "react-icons/ai";

const ContactList = () => {
  const contacts = useSelector(getVisibleContactList);
  const dispatch = useDispatch();
  const deleteContact = ({ currentTarget: { name } }) => {
    dispatch(deleteContactStore(name));
  };

  return (
    <List>
      {contacts.length > 0 &&
        contacts.map(({ id, name, number }) => (
          <Items key={id}>
            <Text>
              {firstLaterToUpperCase(name)}: {number}
            </Text>
            <Button name={id} onClick={deleteContact}>
              Delete
              <AiFillCloseCircle />
            </Button>
          </Items>
        ))}
    </List>
  );
};

export default ContactList;
