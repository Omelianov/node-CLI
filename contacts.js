const fs = require('fs/promises');
const path = require('path');

// TODO: задокументировать каждую функцию

const contactsPath = path.join(__dirname, 'db/contacts.json');

async function readFile() {
    try {
        const data = await fs.readFile(contactsPath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error("Error reading file ${error}");
        return null;
    }
}

async function writeFile(contacts) {
    try {
        await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
        console.log('Contacts saved successfully.');
    } catch (error) {
        console.error(`Error writing file: ${error}`);
    }
}

// Возвращает массив контактов.

async function listContacts() {
    try {
        const contacts = await readFile();
        if (contacts) {
            console.log(contacts);
        } else {
            console.log('No contacts found.');
        }
    } catch (error) {
        console.error(`Error listing contacts: ${error}`);
    }
}


// Возвращает объект контакта с таким id.Возвращает null, если объект с таким id не найден.

// function getContactById(contactId) {
//     // ...твой код. Возвращает объект контакта с таким id. Возвращает null, если объект с таким id не найден.
// }


// Возвращает объект удаленного контакта.Возвращает null, если объект с таким id не найден.

// function removeContact(contactId) {
//     // ...твой код. Возвращает объект удаленного контакта. Возвращает null, если объект с таким id не найден.
// }


// Возвращает объект добавленного контакта. 

// function addContact(name, email, phone) {
//     // ...твой код. Возвращает объект добавленного контакта. 
// }

module.exports = {
    readFile,
    listContacts,

}