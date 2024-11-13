const fs = require('fs');
const chalk = require('chalk');
const val = require('validator');



// const readline = require('readline');
// const rl = readline.createInterface({
//    input: process.stdin,
//    output: process.stdout
// });

// make folder if doesn't exist
const dirPath = './data';
if (!fs.existsSync(dirPath)) {
   fs.mkdirSync(dirPath);
}

// make json file if doesn't exist
const dataPath = './data/contacts.json';
if (!fs.existsSync(dataPath)) {
   fs.writeFileSync(dataPath,'[]','utf-8');
}

// make question
// const writeQuestion = (question_) => {
//    return new Promise((resolve,reject) => {
//       rl.question(question_, (name) => {
//          resolve(name);
//       });
//    });
// };

const saveContact = (name,email,noHP) => {
   const contact = {
      name: name,
      email: email,
      noHP: noHP
   };
   const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8');
   const contacts = JSON.parse(fileBuffer); // change str into json

   // checking duplicat
   const duplicatEmail = contacts.find((contact) => contact.email === email);
   if(duplicatEmail) {
      console.log(
         chalk.red.inverse.bold('Email sudah terdaftar, gunakan email lain!')
      );
      return false;
   };
   const duplicatNoHP = contacts.find((contact) => contact.noHP === noHP);
   if(duplicatNoHP) {
      console.log(
         chalk.red.inverse.bold('No HP sudah terdaftar, gunakan No HP lain!')
      );
      return false;
   };

   // checking email
   if(email) {
      if(!val.isEmail(email)) {
         console.log(
            chalk.red.inverse.bold('Email tidak valid')
         );
         return false;
      };
   };

   // checking No HP
   if(!val.isMobilePhone(noHP, 'id-ID')) {
      console.log(
         chalk.red.inverse.bold('No HP tidak valid')
      );
      return false;
   };

   contacts.push(contact);
   fs.writeFileSync('data/contacts.json', JSON.stringify(contacts)); // change json into str
   console.log(`Terima kasih sudah memasukkan data`);
};

module.exports = {saveContact: saveContact};