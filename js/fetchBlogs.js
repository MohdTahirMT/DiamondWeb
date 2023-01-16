var blogId = null;
// api url
const getAllBlogsUrl = "http://54.243.64.190:8005/api/getAllBlogs";

const getAllBlogs = async (url) => {
  const response = await fetch(url);

  var data = await response.json();
  if (data.data) {
    getAllBlogsF(data.data);
  }
};

getAllBlogs(getAllBlogsUrl);

const getAllBlogsF = (data) => {
  let AllBlogs = ``;

  for (let blog of data) {
    let a = blog.image;
    let b = "/";
    let position = 6;
    let images = [a?.slice(0, position), b, a?.slice(position)]?.join("");

    const date = new Date(blog.createdAt);
    const blogMonth = date.toLocaleString("default", { month: "short" });
    const blogDate = date.getDate();

    AllBlogs += `
    <div class="blog col-sm-12 col-md-6 col-lg-4 m0">
        <div class="row m0 titleRow">
            <div class="fleft date">${blogDate}<span>${blogMonth}</span></div>
            <div class="fleft titlePart">
                <a onclick="getBlogById(${blog.id})">
                    <h4 class="blogTitle heading">
                    ${blog.title}
                    </h4>
                </a>
            </div>
        </div>
        <div class="row m0 featureImg">
            <img src=${`http://54.243.64.190:8005/${images}`} width="300px" height="200px" alt="" />
        </div>
        <div class="row m0 excerpt">
        ${blog.description}
        </div>
    </div>
    `;

    document.getElementById("AllBlogs").innerHTML = AllBlogs;
  }
};

const getBlogById = (blogId) => {
  localStorage.setItem("blogId", blogId);
  window.location.href = "single-post.html";
};

const getBlogsByIdUrl = `http://54.243.64.190:8005/api/getBlogById?id=${localStorage.getItem(
  "blogId"
)}`;

const getBlogsById = async (url) => {
  const response = await fetch(url);

  var data = await response.json();
  if (data.data) {
    getByIdBlogsF(data.data);
  }
};

getBlogsById(getBlogsByIdUrl);

const getByIdBlogsF = (data) => {
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
