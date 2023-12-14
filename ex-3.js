//Exercise #3
let getJohnProfile = () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve({
          name: "John",
          age: 20,
          hobbies: ["Coding", "Football"],
        }),
      1000
    );
  });
};

let getJohnOrders = () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve([
          {
            orderId: "001",
            items: ["apple", "banana"],
          },
          {
            orderId: "002",
            items: ["orange", "itim"],
          },
        ]),
      1500
    );
  });
};

// Start coding here
function JohnProfile(item) {
  console.log(item);
}
function JohnOrders(data) {
  console.log(data);
}
getJohnProfile().then(JohnProfile).then(getJohnOrders).then(JohnOrders);
// getJohnProfile()
// .then((johnProfile) => {
// console.log(johnProfile);
// return getJohnOrders();
// })
// .then((johnOrder) => console.log(johnOrder));
