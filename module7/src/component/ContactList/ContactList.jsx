import React from "react";
import { List } from "./ContactList.styled";
import { useFetchContactsQuery } from "../../redux/contactsApi";
import { Oval } from "react-loader-spinner";
import ContactListItem from "../ContactListItem/ContactListItem";
import { useSelector } from "react-redux";

const ContactList = () => {
  const { data, isFetching } = useFetchContactsQuery();
  const filter = useSelector((state) => state.contacts.filter);

  const contacts = () => {
    const contact = data;

    const normalizedFilter = filter.toLowerCase();

    return contact.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <>
      {isFetching && <Oval height={80} width={80} />}
      <List>
        {data &&
          contacts().map(({ id, name, number }) => (
            <ContactListItem key={id} id={id} name={name} number={number} />
          ))}
      </List>
    </>
  );
};

export default ContactList;
