import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { addContactStore } from "../../redux/contactSlice";
import { getContacts } from "../../redux/selectors";
import { notify } from "../../utils/notify";
import { Label, Input, Button } from "./ContactForm.styled";

const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const addContact = (e) => {
    e.preventDefault();

    contacts.find((el) => el.name === name)
      ? notify(`${name} is alredy in contacts`)
      : (dispatch(
          addContactStore({
            id: uuidv4(),
            name: name,
            number: number,
          })
        ),
        setName(""),
        setNumber(""));
  };
  const onChangeState = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        setName(value);
        break;

      case "number":
        setNumber(value);
        break;

      default:
        return;
    }
  };
  return (
    <form onSubmit={addContact}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={onChangeState}
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={onChangeState}
        />
      </Label>
      <Button>Add contact</Button>
    </form>
  );
};

export default ContactForm;
