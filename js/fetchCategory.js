// api url
const getAllProductsUrl = "http://54.243.64.190:8005/api/getAllProducts";

// Defining async function
const getAllProducts = async (url) => {
  // Storing response
  const response = await fetch(url);

  // Storing data in form of JSON
  var data = await response.json();
  if (data.data) {
    getFeaturedProducts(
      data.data?.filter((item) => item.category === "Featured")
    );
  }
};
// Calling that async function
getAllProducts(getAllProductsUrl);

const getFeaturedProducts = (data) => {
  console.log(data);
  let FeaturedProducts = ``;
  for (let product of data) {
    let a = product.image;
    let b = "/";
    let position = 6;
    let images = [a?.slice(0, position), b, a?.slice(position)]?.join("");

    FeaturedProducts += `
    <div class="col-sm-3 product">
      <div class="productInner row m0">
        <div class="row m0 imgHov">
          <img src=${`http://54.243.64.190:8005/${images}`} alt="" />
          <div class="row m0 hovArea">
            <div class="row m0 proType"><a href="#">${
              product.category
            }</a></div>
            
            <div class="row m0 proPrice">
              <i class="fas fa-usd"></i>125.00
            </div>
          </div>
        </div>
        <div class="row m0 proName">
          <a href="single-product.html">${product.name}</a>
        </div>
      </div>
    </div>
    `;
  }
  document.getElementById("FeaturedP").innerHTML = FeaturedProducts;
};
