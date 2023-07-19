const fs = require('fs/promises');
const path = require('path');
const { nanoid } = require('nanoid');

const contactsPath = path.join(__dirname, 'db/contacts.json');


async function readFile() {
    const data = await fs.readFile(contactsPath, 'utf-8');
    return JSON.parse(data);
}

async function writeFile(contacts) {
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    console.log('Contacts saved successfully.');
}


async function listContacts() {
    const contacts = await readFile();
    if (contacts) {
        console.table(contacts);
    } else {
        console.log('No contacts found.');
    }
}


async function getContactById(id) {
    const contacts = await readFile();
    if (contacts) {
        const contact = contacts.find((c) => c.id === id);
        return contact || null;
    } else {
        return null;
    }
}


async function removeContact(id) {
    const contacts = await readFile();
    if (contacts) {
        const updatedContacts = contacts.filter((c) => c.id !== id);
        await writeFile(updatedContacts);
        return updatedContacts.length !== contacts.length;
    } else {
        return null;
    }
}


async function addContact(name, email, phone) {
    const contacts = await readFile();
    const newContact = {
        id: nanoid(),
        name, email, phone
    };
    contacts.push(newContact);
    await writeFile(contacts);
    return newContact;
}

module.exports = {
    readFile,
    writeFile,
    listContacts,
    getContactById,
    removeContact,
    addContact
}
