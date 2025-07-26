const foo = (arg1) => {
  console.log(arg1);
};

let productList = []; // Initialize empty array

function loadProducts(renderProductWithData) {
  setTimeout(() => {
    productList = [...productListFromServer]; // Copy the data from data.js
    renderProductWithData();
  }, 2000);
}
function renderProducts() {
  //Fetch the data from server
  //Connnect the data into html and render on UI

  function renderProductWithData() {
    if (productList.length === 0) {
      document.getElementById("data").innerHTML = "Loading data from server...";
      return;
    }
    document.getElementById("data").innerHTML = `
         <thead>
                <tr>
                    <th>Serial No.</th>
                    <th>Product name</th>
                    <th>Price</th>
                    <th>Description</th>
                </tr>
            </thead>
        <tbody>
            ${productList
              .map((product, index) => {
                return `
              
                <tr>
                    <td>${index + 1}</td>
                    <td>${product.name}</td>
                    <td>${product.price}</td>
                    <td>${product.description}</td>
                </tr>
                `;
              })
              .join("")}
        </tbody>`;
  }

  // Show loading message initially
  renderProductWithData();
  // Then load products
  loadProducts(renderProductWithData);
  //this functionality is acieved by hooks in React using methods like useEffect()
}
renderProducts();
