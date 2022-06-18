fetch("https://www.breakingbadapi.com/api/characters")
  .then((data) => {
    return data.json();
  })
  .then((res) => {
    let viewData = "";
    res.map((item) => {
      viewData += `      
      <div class="col-sm-12 col-md-4 col-lg-4" >
      <img
      src=${item.img}
      class="img-thumbnail images"
      alt="images"
    />
    <h5 class="lead text">${item.name}</h5>
    <p class="lead text">${item.nickname}</p>
    </div>`;
    });
    document.getElementById("data_view").innerHTML = viewData;
  })
  .catch((error) => {
    console.log(error);
  });
