var productId = null;
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
          <a onclick="getProductById(${product.id})">${product.name}</a>
        </div>
      </div>
    </div>
    `;
  }
  document.getElementById("FeaturedP").innerHTML = FeaturedProducts;
};

const getProductById = (productId) => {
  localStorage.setItem("productId", productId);
  window.location.href = "single-product.html";
};

const getProductsByIdUrl = `http://54.243.64.190:8005/api/getProductById?id=${localStorage.getItem(
  "productId"
)}`;

const getProductsById = async (url) => {
  const response = await fetch(url);

  var data = await response.json();
  if (data.data) {
    getByIdProductsF(data.data);
  }
};

getProductsById(getProductsByIdUrl);

const getByIdProductsF = (data) => {
  let ByIdProduct = ``;
  for (let product of data) {
    let a = product.image;
    let b = "/";
    let position = 6;
    let images = [a?.slice(0, position), b, a?.slice(position)]?.join("");

    ByIdProduct += `
    <div class="container">
      <div class="row mb30 singleProduct">
        <div class="col-sm-5 mb30">
          <div>
            <img src=${`http://54.243.64.190:8005/${images}`} width="100%" alt="" />
          </div>
        </div>
        <div class="col-sm-7">
          <div class="row m0">
            <h4 class="heading">${product.name}</h4>
            <h3 class="heading price"><del>$580</del>$420</h3>
            <div class="row m0 starsRow">
              <div class="stars fleft">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-empty"></i>
              </div>
              <div class="fleft">
                5 Review(s) <span>|</span> <a href="#">Add Your Review</a>
              </div>
            </div>
            <div class="row descList m0">
              <dl class="dl-horizontal">
                <dt>manufacturer :</dt>
                <dd>Tartaan & Co</dd>
                <dt>availability :</dt>
                <dd>In Stock 20 Item(s)</dd>
                <dt>product code :</dt>
                <dd>Xuo15</dd>
              </dl>
            </div>
            <div class="row m0 shortDesc">
              <p class="m0">
              Rustic, natural, often made of bark-covered logs or simple
              planks. Look for junk shop finds when in the country (for
              authenticity), or purchase hand-made new versions.<br />
              Rustic, natural, often made of bark-covered logs or simple
              planks. Look for junk shop finds when in the country (for
              authenticity), or purchase hand-made new versions. when in the
              country (for authenticity), or purchase hand-made
              </p>
            </div>
            <div class="row m0">
              <h5 class="heading proAttr">Size :</h5>
              <select class="selectpicker sizeSelect">
                <option value="queen">queen</option>
                <option value="red">red</option>
                <option value="black">black</option>
                <option value="white">white</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div class="row m0 tabRow">
        <ul class="nav nav-tabs" role="tablist" id="shortcodeTab">
          <li role="presentation" class="active">
            <a
              href="#description"
              aria-controls="description"
              role="tab"
              data-toggle="tab"
            >
              <i class="fas fa-align-left"></i> description
            </a>
          </li>
          <li role="presentation">
            <a
              href="#review"
              aria-controls="review"
              role="tab"
              data-toggle="tab"
            >
              <i class="fas fa-thumbs-up"></i> review (1)
            </a>
          </li>
          <li role="presentation">
            <a
              href="#additionInfo"
              aria-controls="additionInfo"
              role="tab"
              data-toggle="tab"
            >
              <i class="fas fa-file-text"></i> Additional Information
            </a>
          </li>
        </ul>
        <div class="tab-content shortcodeTabContent">
          <div
            role="tabpanel"
            class="tab-pane row m0 active"
            id="description"
          >
            <div class="fleft img">
              <img
                class="img-responsive"
                src=${`http://54.243.64.190:8005/${images}`}
                alt=""
              />
            </div>
            <div class="fleft desc">
              <h5 class="heading">Product Details</h5>
              <p>
              Rustic, natural, often made of bark-covered logs or simple
                  planks. Look for junk shop finds when in the country (for
                  authenticity), or purchase hand-made new versions.<br />
                  Rustic, natural, often made of bark-covered logs or simple
                  planks. Look for junk shop finds when in the country (for
                  authenticity), or purchase hand-made new versions. when in the
                  country (for authenticity), or purchase hand-made
              </p>
            </div>
          </div>
          <div role="tabpanel" class="tab-pane row m0" id="review">
            <div class="row m0 reviewCount">1 review for this product</div>
            <div class="row m0 reviewBody">
              <span class="bold">4</span> out of 5 <br />
              <span class="bold">K Admas</span> - March 10, 2018
              <p class="m0">Amazing Product!</p>
            </div>
            <div class="row m0 reviewAdd">
              <h4 class="heading">Add a review</h4>
              <form
                action="#"
                role="form"
                method="post"
                class="row m0 reviewForm"
              >
                <div class="row">
                  <div class="col-sm-6">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Your Name *"
                      required
                    />
                  </div>
                  <div class="col-sm-6">
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Your Email *"
                      required
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-6">
                    <input
                      type="url"
                      class="form-control"
                      placeholder="Your Website"
                    />
                  </div>
                  <div class="col-sm-6 ratingStars">
                    Your Rating
                    <input type="hidden" class="rating" data-fractions="2" />
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-12">
                    <h4 class="heading">Your Review</h4>
                    <textarea
                      name="reviewText"
                      id="reviewText"
                      class="form-control reviewText"
                    ></textarea>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-12">
                    <input type="submit" class="btn btn-primary filled" />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div role="tabpanel" class="tab-pane row m0" id="additionInfo">
            <div class="row m0 additionInfoRow">
              <div class="fleft infoTitle">Material</div>
              <div class="fleft infos">Gold</div>
            </div>
            <div class="row m0 additionInfoRow">
              <div class="fleft infoTitle">Stone</div>
              <div class="fleft infos">Diamond</div>
            </div>
            <div class="row m0 additionInfoRow">
              <div class="fleft infoTitle">Resizable?</div>
              <div class="fleft infos">No</div>
            </div>
            <div class="row m0 additionInfoRow">
              <div class="fleft infoTitle">Item Height</div>
              <div class="fleft infos">4.3 Millimeters</div>
            </div>
            <div class="row m0 additionInfoRow">
              <div class="fleft infoTitle">Item Width</div>
              <div class="fleft infos">2.5 Millimeters</div>
            </div>
            <div class="row m0 additionInfoRow">
              <div class="fleft infoTitle">Item Width</div>
              <div class="fleft infos">2.5 Millimeters</div>
            </div>
            <div class="row m0 additionInfoRow">
              <div class="fleft infoTitle">Ring Size</div>
              <div class="fleft infos">7</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
  }
  document.getElementById("ByIdProduct").innerHTML = ByIdProduct;
};

