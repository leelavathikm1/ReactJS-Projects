var products = [];
function getData() {
  console.log("I am from Get Data");
  return new Promise((resolve, reject) => {
    fetch("https://dummyjson.com/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        products = data.products;
        resolve();
      });
  });
}

function displayData() {
  console.log(products);
}

getData();
displayData();
