var mainCat = "";

const getAllProductsUrl = "http://54.243.64.190:8005/api/getAllProducts";

const getAllProducts = async (url) => {
  const response = await fetch(url);

  var data = await response.json();
  if (data.data) {
    getAllCategoryProducts(data.data);
    getFeaturedProducts(
      data.data?.filter((item) => item.category === "Featured")
    );
  }
};
getAllProducts(getAllProductsUrl);

// For Category
const getAllCategoriesUrl = "http://54.243.64.190:8005/api/getAllCategories";

const getAllCategories = async (url) => {
  const response = await fetch(url);

  var data = await response.json();
  if (data.data) {
    getAllCategory(data.data);
  }
};

const getAllCategory = (data) => {
  let allCategory = ``;
  for (let category of data) {
    allCategory += `
    <li><a onclick="Pass('${category.name}')">${category.name}</a></li>
    `;
  }
  document.getElementById("AllCategory").innerHTML = allCategory;
};

const Pass = (data) => {
  mainCat = data;
  getAllProducts(getAllProductsUrl);
};

getAllCategories(getAllCategoriesUrl);

const getAllCategoryProducts = (data) => {
  let allCategoryProducts = ``;

  if (mainCat) {
    console.log("M");
    var prodData = data?.filter((item) => item.category === mainCat);
  } else {
    console.log("E");
    prodData = data;
  }

  for (let product of prodData) {
    let a = product.image;
    let b = "/";
    let position = 6;
    let images = [a?.slice(0, position), b, a?.slice(position)]?.join("");

    allCategoryProducts += `
      <div class="col-sm-4 product2">
        <div class="row m0 thumbnail">
          <div class="row m0 imgHov">
            <a href="single-product.html">
              <img src=${`http://54.243.64.190:8005/${images}`} alt="" />
            </a>
          </div>
          <div class="row m0 productIntro">
            <h5 class="heading">
              <a href="single-product.html">${product.name}</a>
              <span><del>$240</del> $180</span>
            </h5>
            <h5 class="proCat">${product.category}</h5>
            <div class="row stars m0">
              <i class="fas fa-star stared"></i>
              <i class="fas fa-star stared"></i>
              <i class="fas fa-star stared"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <span class="vote">(8)</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }
  document.getElementById("allCategoryProducts").innerHTML =
    allCategoryProducts;
};
