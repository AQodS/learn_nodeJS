const yargs = require('yargs');
const contacts = require('./contacts');

yargs.command({
   command: 'add',
   desrcribe: 'adding new contact',
   builder: {
      name: {
         describe: 'Full name',
         demandOption: true,
         type: 'string'
      },
      email: {
         describe: 'Email',
         demandOption: false,
         type: 'string'
      },
      noHP: {
         describe: 'Number phone',
         demandOption: true,
         type: 'string'
      }
   },
   handler(argv) {
      contacts.saveContact(argv.name, argv.email, argv.noHP);
   } 
});

yargs.parse()



// const contacts = require('./contacts.js');

// const main = async () => {
//    const name = await contacts.writeQuestion('Masukkan nama Anda: ');
//    const email = await contacts.writeQuestion('Masukkan email Anda: ');
//    const noHP = await contacts.writeQuestion('Masukkan No HP Anda: ');

//    contacts.saveContact(name,email,noHP);
// };

// main();
