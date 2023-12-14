// Exercise #6
let getJohnProfile = async () => {
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

let getJohnOrders = async () => {
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
// const item = await getJohnProfile () 
// console.log(item);
// const item1 = await getJohnOrders () 
// console.log(item1);

let getJohnData = async () => {
  try {
  const johnProfile = await getJohnProfile();
  console.log(johnProfile);
  
  const johnOrder = await getJohnOrders();
  console.log(johnOrder);
  } catch (error) {
  console.log(error);
  }
  };
  getJohnData();