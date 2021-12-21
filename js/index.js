// const clients = ["Mango", "Poly", "Ajax"];
// console.log(clients[0]);

// // console.log(window);

// const arr = new Array(["Mango", "Poly", "Ajax"]);
// console.log(arr);

// clients[45] = "Nikita";

// console.log(clients);
// console.log(clients[45]);

// ============================

// const clients = ["Mango", "Poly", "Ajax"];
// clients[3] = "Test";
// console.log(`clients`, clients);
// clients[0] = "Kiwi";
// clients[1] = "Pango";
// console.log(clients); // ["Kiwi", "Pango", "Ajax"]

// ====================
// const clients = ["Mango", "Ajax", "Poly"]; //3

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(`i: ${i}`, clients[i]);
// }

// ===============
// const clients = ["Mango", "Ajax", "Poly", "Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// ======================================

// const user = ["Nikita", 25, "student"];

// const user2 = user;

// console.log(`user`, user);
// console.log(`user2`, user2);

// user[1] = 26;

// console.log(`user`, user);
// console.log(`user2`, user2);

// =============================

// let x = 5;
// let y = x;
// x = 25;
// console.log(`y`, y)

// =========================
// const clients = ["Mango", "Ajax", "Poly"];

// const res = ["Mango", "Ajax", "Poly"][0].split("").join("-");
// console.log(`res`, res);
// const newRes = res.join("-");
// console.log(`newRes`, newRes);

// const name = "Alex";

// const res = name.split("");

// console.log(`res`, res);

// ===============================

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.indexOf("Poly")); // 2
// console.log(clients.indexOf("Monkong")); // -1

// =======================================
// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];

// console.log(clients.includes("Aja"));

// const str =
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae qui provident illum, similique asperiores ad dignissimos quod aspernatur consequatur laboriosam alias placeat atque tempore? Quisquam iusto nihil harum? Distinctio, earum?";

// console.log(str.includes("si"));

// =================
// const friends = ["Alex", "Nikita", "Boris"];

// const name = prompt("Enter name, please!");

// let message = "UnExist";

// for (const friend of friends) {
//   if (friend.toLowerCase() === name.toLowerCase()) {
//     message = "Exist";
//     break;
//   }
// }
// console.log(message);

// ================================

// const friends = ["Alex", "Nikita", "Boris"];
// friends.push("Test");
// console.log(`friends`, friends);
// friends.pop();
// console.log(`friends`, friends);
// friends.shift();
// friends.unshift("Test");
// console.log(`friends`, friends);
// =================================

// const friends = ["Alex", "Nikita", "Boris", "fghj", "fghjk"];

// // console.log(friends.slice(-2));

// console.log("zsdfxgchvjbkn".slice(0, 5) + );

// ==================
// const friends = ["Alex", "Nikita", "Boris", "fghj", "fghjk"];

// friends.splice(2, 1, "new", "fghj", "dfgh");
// console.log(friends);

// ======================

// const names = [];
// let name;

// do {
//   name = prompt("Enter name: ");
//   name && names.push(name);
// } while (name !== null);

// console.log(names);

// =====================================

// const line = [
//   [0, 0],
//   [300, 200],
// ];

// console.log(line[i][j]);

const cube = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

const elem = 12;
const position = []; //[2,2]
for (let i = 0; i < cube.length; i += 1) {
  for (let j = 0; j < cube[i].length; j += 1) {
    if (elem === cube[i][j]) {
      //   position.push(i, j);
      position[0] = i;
      position[1] = j;
      //   position.push(j);
    }
  }
}

console.log(position);

// "Hello"
