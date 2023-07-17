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

// async function listContacts() {
//     try {
//         const contacts = await readFile();
//         if (contacts) {
//             console.table(contacts);
//         } else {
//             console.log('No contacts found.');
//         }
//     } catch (error) {
//         console.error(`Error listing contacts: ${error}`);
//     }
// }


// Возвращает объект контакта с таким id.Возвращает null, если объект с таким id не найден.

// async function getContactById(contactId) {
//     try {
//         const contacts = await readFile();
//         if (contacts) {
//             const contact = contacts.find((c) => c.id === contactId);
//             return contact || null;
//         } else {
//             return null;
//         }
//     } catch (error) {
//         console.error("Error getting contact by ID: ${error}");
//         return null;

//     }

// }



// Возвращает объект удаленного контакта.Возвращает null, если объект с таким id не найден.

// async function removeContact(contactId) {
//     try {
//         const contacts = await readFile();
//         if (contacts) {
//             const updatedContacts = contacts.filter((c) => c.id !== contactId);
//             await writeFile(updatedContacts);
//             return updatedContacts.length !== contacts.length;
//         } else {
//             return false;
//         }
//     } catch (error) {
//         console.error(`Error removing contact: ${error}`);
//         return false;
//     }
// }



// Возвращает объект добавленного контакта. 

// async function addContact(name, email, phone) {
//     try {
//         const contacts = await readFile();
//         const newContact = {
//             id: Date.now(),
//             name,
//             email,
//             phone,
//         };
//         contacts.push(newContact);
//         await writeFile(contacts);
//         console.table(newContact)
//         return newContact;
//     } catch (error) {
//         console.error(`Error adding contact: ${error}`);
//         return null;
//     }
// }

module.exports = {
    // readFile,
    // listContacts,
    // getContactById,
    // removeContact,
    // addContact

}