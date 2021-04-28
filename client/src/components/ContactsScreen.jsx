import React from "react";

export default function ContactsScreen(props) {
  const { contacts, onContactClick } = props;
  return (
    <div className="contactsScreen">
        <div className="contactsHeader header"><h3 className="headerTitle">Randomize me!</h3></div>
        <ul className="contactsList" >
        {contacts.map((user) => (
            <li className="listItem" key={user.login.uuid} onClick={() => onContactClick(user.login.uuid)}>
              {`${user.name.first}  ${user.name.last}`}
            </li>
        ))}
        </ul>
    </div>
  );
}
