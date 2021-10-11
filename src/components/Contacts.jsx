import React, { Component } from 'react'
import contacts from '../contacts.json'

class Contacts extends Component {

    state = {
        allContacts: contacts.slice(0,5)
    }

    handleNewContact = () => {
        console.log('New contact on the list!')

        // Need to find the new contact
        const randomContactIndex = Math.floor(Math.random() * contacts.length)
        const randomContact = contacts[randomContactIndex]

        // Need to add the contact to the list
        this.setState({allContacts: [randomContact, ...this.state.allContacts]})

    }


// THIS 2 HANDLESORT COULD BE REDUCE TO ONLY 1
    handleSortContacts = () => {
        console.log('Contacts sorted!')
        // Clone the array to sort it
        const clonedContacts = [...this.state.allContacts]

        // Use an if a>b 
        clonedContacts.sort((a, b) => {
            return a.name > b.name ? 1 : -1
        })

        // Update the order
        this.setState({allContacts: clonedContacts})
    }

    handleSort = () => {
        console.log('Contacts sorted!')
        // Clone the array to sort it
        const clonedContactsPop = [...this.state.allContacts]

        // Use an if a>b 
        clonedContactsPop.sort((a, b) => {
            return a.popularity > b.popularity ? 1 : -1
        })

        // Update the order
        this.setState({allContacts: clonedContactsPop})
    }

    hadleDeleteContact = (contactId) => {
        console.log('Contact deleted!', contactId)
        // Look for the Id
        const filteredContacts = this.state.allContacts.filter(eachContact => {
            return eachContact.id === contactId ? false : true
        })
        
        // Update the list
        this.setState({allContacts: filteredContacts})
    }



    render() {
        return (
            <>
                <h1>IronContacts</h1>
                <button onClick={this.handleNewContact}>Add new contact to the list!</button>
                <button onClick={this.handleSortContacts}>Sort the contacts</button>
                <button onClick={this.handleSort}>Sort by popularity</button>
                <table>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                    </tr>
                    {this.state.allContacts.map( eachContact => {
                        return(
                                <tr>
                                    <img src={eachContact.pictureUrl}/>
                                    <td>{eachContact.name}</td>
                                    <td>{eachContact.popularity}</td>
                                    <button onClick={() => this.hadleDeleteContact(eachContact.id)}>Delete this contact!</button>
                                </tr>
                        )
                    })}
                </table>
            </>
        )
    }
}

export default Contacts;
