// console.log("Hello");
// const user = {
//   name: "John",
//   age: 25,
//   parents: {
//     father: "John",
//     mother: "Alice",
//   },
//   friends: ["Nikita", "chj", "dfsdfsd"],
// };
// const sfdsfsdfsdfsd = prompt("Enter value");

// console.log(user[sfdsfsdfsdfsd]);

// const arr = ["dsddss", "gfghjkllkllkjk"];
// console.log(arr[0])
// ==========================

// const english = {
//   edit: "Edit",
// };

// const ukrainian = {
//   edit: "Редагувати",
// };

// const russian = {
//   edit: "Редактировать",
// };

// const languages = {
//   english,
//   ukrainian,
//   russian,
// };

// const language = prompt("Enter you language");

// const currentLanguage = language.hasOwnProperty(language)
//   ? language
//   : "russian";

// console.log(languages[currentLanguage].edit);

// ======================

// const user = {
//   name: "John",
//   age: 25,
//   parents: {
//     father: "John2",
//     mother: "Alice",
//   },
//   friends: ["Nikita", "chj", "dfsdfsd"],
//   sayHello(word) {
//     console.log(word);
//   },
//   getInfo() {
//     console.group(`${this.name}'s properties`);
//     console.log(`user.name`, this.name);
//     console.log(`user.age`, this.age);
//     console.groupEnd();
//   },
// };

// user.status = "online";
// console.log(user);

// console.log(this);

// this.aaaaaaaaaaaaaaaaa = function () {
//   console.log("Hello");
// };

// const person = user;
// console.log(this.name);
// user.getInfo();

// console.log(user);

// user.sayHello("Hello World");
// user.sayHello("By World");

// ================

// const user = {
//   name: "John",
//   age: 25,
//   parents: {
//     father: "John2",
//     mother: "Alice",
//   },
//   friends: ["Nikita", "chj", "dfsdfsd"],
//   sayHello(word) {
//     console.log(word);
//   },
//   getInfo() {
//     console.group(`${this.name}'s properties`);
//     console.log(`user.name`, this.name);
//     console.log(`user.age`, this.age);
//     console.groupEnd();
//   },
// };

// delete object.property

// const key = prompt("Enter key")
// delete user[key];

// console.log(user);

// ======================
// const user = {
//   name: "John",
//   age: 25,
//   parents: {
//     father: "John2",
//     mother: "Alice",
//   },
//   friends: ["Nikita", "chj", "dfsdfsd"],
//   sayHello(word) {
//     console.log(word);
//   },
//   getInfo() {
//     console.group(`${this.name}'s properties`);
//     console.log(`user.name`, this.name);
//     console.log(`user.age`, this.age);
//     console.groupEnd();
//   },
// };

// for (const key in user) {
//   console.log(key);
// }

// const keys = Object.keys(user);
// console.log(`keys`, keys);

// for (const key of keys) {
//   console.log(user[key]);
// }
// console.log(Object.values(user));

// console.log(Object.entries(user));

// ====================================
// const animal = {
//   legs: 4,
// };

// const dog = Object.create(animal);

// console.log(`dog`, dog);
// //   dog.name = "Манго";

// console.dir(animal.hasOwnProperty("legs"));

// //   console.log(dog); // {name: 'Манго'}
// //   console.log(dog.name); // 'Манго'
// //   console.log(dog.legs); // 4

// const userProto = {
//   email: "user",
//   password: "user",
//   rules: {},
// };

// const admin = Object.create(userProto);
// console.log(`admin.email`, admin.email);

// admin.email = "admin";
// console.log(`admin`, admin);

// console.log(`admin.email`, admin.email);

const goods = [
  {
    name: "Кабель ColorWay USB - 3в1 (Lightning+MicroUSB+Type-C) Magnetic 2.4А 1 м",
    price: 119,
    discount: 199,
    images: [
      "https://content1.rozetka.com.ua/goods/images/preview/26028818.jpg",
    ],
  },
  {
    name: "Ноутбук HP Pavilion Gaming 15-ec2004ua (4A7M7EA) Shadow Black",
    price: 29999,
    discount: 224,
    images: [
      "https://content2.rozetka.com.ua/goods/images/preview/229873878.jpg",
      "https://content2.rozetka.com.ua/goods/images/preview/229873878.jpg",
    ],
    colors: ["gray", "pink"],
  },
  {
    name: "Кабель ColorWay USB - 3в1 (Lightning+MicroUSB+Type-C) Magnetic 2.4А 1 м",
    price: 119,
    discount: 199,
    images: [
      "https://content1.rozetka.com.ua/goods/images/preview/26028818.jpg",
    ],
  },
  {
    name: "Ноутбук HP Pavilion Gaming 15-ec2004ua (4A7M7EA) Shadow Black",
    price: 29999,
    discount: 224,
    images: [
      "https://content2.rozetka.com.ua/goods/images/preview/229873878.jpg",
      "https://content2.rozetka.com.ua/goods/images/preview/229873878.jpg",
    ],
    colors: ["gray", "pink"],
  },
];

const getMarkup = (goods) => {
  let result = "";
  for (const good of goods) {
    result += `<li class='listItem'>
        <h2 class="title">${good.name}</h2>
          <img
            src=${good.images[0]}
            alt=${good.name}
            class="image"
          />
          <p>${good.price}</p>
          <p>${good.discount}</p>
        </li>
       `;
  }
  return result;
};

console.log(`getMarkup(goods);`, getMarkup(goods));
const element = document.querySelector(".goodsList");
element.innerHTML = getMarkup(goods);

// `<li className='listItem'>
//   <img
//     src='https://rozetka.com.ua/colorway_cw_cbuu020_bk/p224179489/'
//     alt='Кабель ColorWay USB - 3в1 (Lightning+MicroUSB+Type-C) Magnetic 2.4А 1 м'
//   />
//   <p>119</p>
//   <p>discount</p>
// </li>
// `
