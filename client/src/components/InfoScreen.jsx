import React from 'react'
import icon from '../arrow_back.svg'

export default function InfoScreen(props) {
    const {selectedUser, onBackClick} = props;
    let location = selectedUser.location;
    location = `${location.street.name} ${location.street.number}, ${location.city}, ${location.state}, ${location.postcode}`;
    const name = `${selectedUser.name.first}  ${selectedUser.name.last}`;

    return (
        <div>
            <div className="infoHeader header">
                <div className="backButtonDiv" onClick={onBackClick}>
                    <img src={icon} alt="back"/>
                    <button className="backButton">Back</button>
                </div>
                <h3 className="infoHeaderTitle">{name}</h3>
            </div>
            <div className="infoImageDiv"><img src={selectedUser.picture.medium} alt="contact"/></div>
            <div>
                <p>{name}</p>
                <p>{location}</p>
                <p>{`${selectedUser.email}`}</p>
                <p>{`${selectedUser.phone}`}</p>                
            </div>
            
        </div>
    )
}
