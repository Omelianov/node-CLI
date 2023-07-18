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

// Возвращает массив контактов

async function listContacts() {
    const contacts = await readFile();
    if (contacts) {
        console.table(contacts);
    } else {
        console.log('No contacts found.');
    }
}


// Возвращает объект контакта с таким id.Возвращает null, если объект с таким id не найден.

async function getContactById(id) {
    const contacts = await readFile();
    if (contacts) {
        const contact = contacts.find((c) => c.id === id);
        return contact || null;
    } else {
        return null;
    }
}



// Возвращает объект удаленного контакта.Возвращает null, если объект с таким id не найден.

async function removeContact(id) {
    const contacts = await readFile();
    if (contacts) {
        const updatedContacts = contacts.filter((c) => c.id !== id);
        await writeFile(updatedContacts);
        return updatedContacts.length !== contacts.length;
    } else {
        return false;
    }
}


// Возвращает объект добавленного контакта. 

async function addContact(data) {
    const contacts = await readFile();
    const newContact = {
        id: nanoid(),
        ...data
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
