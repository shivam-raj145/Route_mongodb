const mongoose=require(`mongoose`);
 const student=require("./models/student.js");

 require("dotenv").config();



 async function main() {
   await mongoose.connect(process.env.MONGO_URL);
 }
 
 main()
   .then(() => console.log("Successfully connected to DB "))
   .catch((err) => console.log(err));



   const { faker } = require('@faker-js/faker');

let createRandomUser=()=> {
  return {
    name: faker.internet.username(),
    email: faker.internet.email(),
    img: faker.image.avatar(),
    password: faker.internet.password(),
    birth: faker.date.birthdate(),
  };
}
let data=[];
for(let i=1;i<=10;i++){
   data.push(createRandomUser());
} 
//  student.insertMany(data).then(res=>console.log("data entered sucessfully")).catch(err=>console.log(err))


