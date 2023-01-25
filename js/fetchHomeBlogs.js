var idHB = null;
// api url
const urlGetHB = "http://54.243.64.190:8005/api/getAllBlogs";

const getAllHB = async (url) => {
  const response = await fetch(url);

  var data = await response.json();
  if (data.data) {
    getAllHBF(data.data);
  }
};

getAllHB(urlGetHB);

const getAllHBF = (data) => {
  let AllHomeBlogs = ``;
  for (let blog of data) {
    let a = blog.image;
    let b = "/";
    let position = 6;
    let images = [a?.slice(0, position), b, a?.slice(position)]?.join("");

    const date = new Date(blog.createdAt);
    const blogMonth = date.toLocaleString("default", { month: "short" });
    const blogDate = date.getDate();

    AllHomeBlogs += `
    <div class="col-sm-6">
        <div class="blog_inner single">
            <div class="blog_j_img">
                <img
                alt=""
                class="img-responsive"
                style="width: 100%; height: 300px"
                src=${`http://54.243.64.190:8005/${images}`}
                />
                <div class="btn_readmore">
                    <a onclick="getBlogById(${blog.id})">Read more</a>
                </div>
            </div>
            <div class="blog_j_text">
                <p>
                ${blog.title}
                </p>
                <span>${blogDate}, ${blogMonth}</span>
            </div>
        </div>
    </div>
    `;
  }

  document.getElementById("AllHomeBlogs").innerHTML = AllHomeBlogs;
};

const getBlogById = (idHB) => {
  console.log(idHB);
  localStorage.setItem("idHB", idHB);
  window.location.href = "single-post.html";
};

const urlGetHBid = `http://54.243.64.190:8005/api/getBlogById?id=${localStorage.getItem(
  "idHB"
)}`;

const GetHBid = async (url) => {
  const response = await fetch(url);

  var data = await response.json();
  if (data.data) {
    GetHBidF(data.data);
  }
};

GetHBid(urlGetHBid);

const GetHBidF = (data) => {
  let ByIdBlog = ``;
  for (let blog of data) {
    let a = blog.image;
    let b = "/";
    let position = 6;
    let images = [a?.slice(0, position), b, a?.slice(position)]?.join("");

    const date = new Date(blog.createdAt);
    const blogMonth = date.toLocaleString("default", { month: "short" });
    const blogDate = date.getDate();

    ByIdBlog += `
    <div class="col-12">
        <div class="blog row m0 single_post">
            <div class="row m0 titleRow">
                <div class="fleft date">${blogDate}<span>${blogMonth}</span></div>
                <div class="fleft titlePart">
                    <h4 class="blogTitle heading">${blog.title}</h4>
                </div>
            </div>
            <div class="row m0 featureImg">
                <img src=${`http://54.243.64.190:8005/${images}`} alt="" />
            </div>
            <div class="row m0 excerpt">${blog.description}</div>
        </div>
    </div>
    `;
  }
  document.getElementById("ByIdBlog").innerHTML = ByIdBlog;
};
