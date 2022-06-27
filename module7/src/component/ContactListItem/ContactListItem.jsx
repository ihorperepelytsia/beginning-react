import React, { useState } from "react";
import firstLaterToUpperCase from "../../utils/firstLaterToUpperCase";
import { Items, Text, Button } from "../ContactList/ContactList.styled";
import { AiFillCloseCircle } from "react-icons/ai";
import {
  useDeleteContactMutation,
  useChangeContactMutation,
} from "../../redux/contactsApi";
import { Oval } from "react-loader-spinner";
import PropTypes from "prop-types";
import { notifySuccess, notifyError } from "../../utils/notify";

const ContactListItem = ({ id, name, number }) => {
  const [editForm, setEditForm] = useState(false);
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  const [changeContact] = useChangeContactMutation();

  const handleDeleteContact = async (id) => {
    try {
      await deleteContact(id);
      notifySuccess("Contact deleted successfully");
    } catch (error) {
      notifyError(error.message);
    }
  };

  const handleChangeEditForm = async (e) => {
    e.preventDefault();
    const nameValue = e.currentTarget.elements.name.value;
    const numberValue = e.currentTarget.elements.number.value;
    e.currentTarget.reset();
    setEditForm(false);

    try {
      if (nameValue === "" && numberValue === "") {
        notifyError("You not change");
        return;
      }

      await changeContact({
        name: nameValue === "" ? name : nameValue,
        number: numberValue === "" ? number : numberValue,
        id,
      });
      notifySuccess("Contact change successfully");
    } catch (error) {
      notifyError(error.message);
    }
  };
  return (
    <Items>
      <Text>
        {id} - {firstLaterToUpperCase(name)}: {number}
      </Text>
      <Button onClick={() => handleDeleteContact(id)} disabled={isLoading}>
        Delete
        {isLoading ? <Oval height={12} width={12} /> : <AiFillCloseCircle />}
      </Button>
      <Button onClick={() => setEditForm(true)}>Edit </Button>
      {editForm && (
        <form onSubmit={handleChangeEditForm}>
          <input name="name" placeholder="name" />
          <input name="number" placeholder="number" />
          <button name={id} type="submit">
            Save edit
          </button>
        </form>
      )}
    </Items>
  );
};
ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
export default ContactListItem;
