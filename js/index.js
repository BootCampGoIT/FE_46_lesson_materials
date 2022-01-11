// const arr1 = [1, 2, 3, 4, 5];

// const arr2 = [6, 7, 8];

// const res = [...arr1, ...arr2];

// console.log(`res`, res);

// ===============================

// const user = { name: "Alex", age: 20 };
// const data = { status: "online", friends: ["Nikita", "Oleg"] };

// const res = { ...user, ...data };
// console.log(`res`, res);
// ==============================

// const getData = (a, b, c, ...numbers) => {
//   let result = 0;
//   for (const num of numbers) {
//     result += num;
//   }
//   console.log(result);
//   return result;
// };

// const data = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9];

// const res = getData(1, 2, 3, 4, 5, 5, 6, 7, 8, 9);
// console.log(`res`, res);
// getData(1, 2);
// getData(1, 2, 4, 5, 667);

// console.log(Math.min(...data));

// console.log(1 + +"5");

// ====================================
// const user = {
//   firstName: "Alex",
//   userAge: 20,
//   status: "online",
//   parents: {
//     father: {
//       firstName: "Bob",
//       age: 25,
//     },
//     mother: {
//       firstName: "Alisa",
//       age: 25,
//     },
//   },
//   friends: ["Nikita", "Oleg"],
// };

// const key1 = prompt("ke1");
// const key2 = prompt("ke2");
// const key3 = prompt("ke3");

// const value = user[key1][key2][key3];
// console.log(`value`, value);
// // const {
// //   parents: {
// //     father: { firstName: father },
// //     mother: { firstName: mother },
// //   },
// // } = user;

// const firstName = user?.parents?.father?.firstName;
// console.log(firstName);

// // const name = user.name;
// // const age = user.age;
// // console.log(father);

// const arr = [
//   [1, 2],
//   [3, 4],
// ];
// const res = arr[1][1];
// console.log(res);

// const arr = [1, "Hello", 3, 4, 5, [6, 7, 8, [9, 10]]];

// const [, value] = arr[5][3];

// console.log(`value`, value);

// const line = [
//   [100, 200],
//   [500, 600],
// ];

// // const [[x1, y1], [x2, y2]] = line;

// const [[x1, y1], [x2, y2]] = line;
// console.log(`x1, y1, x2, y2`, x1, y1, x2, y2);

// const users = [
//   {
//     name: "Alex",
//     age: 20,
//   },
//   {
//     name: "Nikita",
//     age: 26,
//   },
//   {
//     name: "Valera",
//     age: 27,
//   },
// ];

// const getName = () => {};

// const getName = function (...args) {
//   console.log(args);
// };
// const getName = (...args) => {
//   console.log(args);
// };

// const user = {
//   name: "Alex",
//   age: 20,
// };

// getName(user.name, user.age);

// users.forEach(({ name, age }) => {
//   console.log(name);
//   console.log(age);
// });

// for (const { name, age } of users) {
//   console.log(name);
//   console.log(age);
// }

// function doStuffWithBook({ title, downloads, rating, publics, numberOfPages }) {
//   console.log(title);
//   console.log(numberOfPages);
// }

// doStuffWithBook({
//   title: "The Last Kingdom",
//   numberOfPages: 736,
//   downloads: 10283,
//   rating: 8.38,
//   publics: true,
// });

// ==========================

// const arr = [1, 2, 3, 4];
// const arr2 = [...arr];

// arr2[0] = 100;

// console.log(`arr`, arr);
// console.log(`arr2`, arr2);

// const user = {
//   name: "Alex",
//   age: 30,
//   parents: { mother: "Alisa", father: "Bob" },
// };

// // const stringUser = JSON.stringify(user);
// // console.log(stringUser);
// // const myUser = JSON.parse(stringUser);
// // console.log(myUser);

// const myUser = JSON.parse(JSON.stringify(user));

// myUser.parents.father = "Kolya";

// console.log(`user`, user);
// console.log(`myUser`, myUser);

// console.log(stringUser.constructor.name);
// console.log(typeof stringUser);

// const newUser = ;

// const newPerson = user;
// const newUser = { ...user, parents: { ...user.parents } };
// newUser.name = "Nikita";
// newUser.parents.mother = "Victoria";

// console.log(`user`, user);
// console.log(`newUser`, newUser);

// ========================
// const data = [12, 3, 4];

// const getData = (...rest) => {};

// getData(...data);

// const system = {
//   users: [
//     { name: "Oleg", age: 45 },
//     { name: "Alex", age: 20 },
//     { name: "Nikita", age: 25 },
//   ],
//   getUsers() {
//     return this.users;
//   },
//   addUser(user) {
//     //{name: "Oleg", age: 45}
//     const { name: newName } = user;
//     for (const { name } of this.users) {
//       if (name === newName) {
//         console.log("User already exist");
//         return;
//       }
//     }
//     this.users.push(user);
//     console.log("addUser", this.users);
//   },
//   removeUser(name) {
//     for (let i = 0; i < this.users.length; i += 1) {
//       if (this.users[i].name === name) {
//         this.users.splice(i, 1);
//         console.log("remove:", this.users);
//         return;
//       }
//     }
//     console.log("user does not exist");
//   },
//   updateName(oldName, newName) {
//     for (let i = 0; i < this.users.length; i += 1) {
//       if (this.users[i].name === oldName) {
//         this.users[i].name = newName;
//         console.log("update:", this.users);
//         return;
//       }
//     }
//     console.log("user does not exist");
//   },
// };

// system.removeUser("Oleg");
// console.log(system.users.length);
// system.addUser({ name: "Oleg", age: 45 });
// system.updateName("Oleg", "Vladilen");

// var a = new String("a");

// ================
// const getDate = function () {};

// console.dir(getDate);
// getDate.prop = "Alex";

// console.dir(getDate.prop);
// =======================
