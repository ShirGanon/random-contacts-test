import React,{useEffect, useState} from 'react'
import axios from 'axios';

import ContactsScreen from './ContactsScreen';
import InfoScreen from './InfoScreen';

export default function Main() {
    const [contacts, setContacts] = useState([]);
    const [selected, setSelected] = useState(null);
    const [selectedUser, setSelectedUser] = useState(null);
    const [status, setStatus] = useState("Loading");

    //Random Contacts api calls
    const getData = async () =>{
        let results = [];
        const arr = Array.from(Array(10).keys()).map(i => 
            axios.get('https://randomuser.me/api')
            .then((response) => {
                results.push(response.data.results[0]);
            })
            .catch((error) => {
                setStatus("Error");
                alert(error);
            })
        )
        await Promise.all(arr);
        return(results);
    }

    //on contact click for more info
    const onContactClick = (id) => {
        setSelected(id);
        setSelectedUser(contacts.find(user => user.login.uuid === id))
    }

    //back button to main page
    const onBackClick = () =>{
        setSelected(null);
        setSelectedUser(null)
    }


 
    useEffect(() => {
        const getContacts = async () => {
            const res = await getData();
            setContacts(res);
        }
        getContacts();
    }, [])



    return (
        <div>
            {contacts.length === 0 || status === "Error" ?
            <div className="loadingDiv" data-testid="loadingTest">{status}</div>
            :
            selected ?
                <InfoScreen selectedUser={selectedUser} onBackClick={onBackClick} />
                :
                <div className="contactsDiv" data-testid="contactsTest">
                <ContactsScreen contacts={contacts} onContactClick={onContactClick}/>
                </div>
            }
        </div>
    )
}
