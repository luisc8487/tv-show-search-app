const form = document.querySelector("#searchForm");
const ul = document.querySelector("ul");

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const searchTerm = form.elements.query.value;
  const config = {params: {q: searchTerm}};
  const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
  makeImages(res.data);
  form.elements.query.value = ""; // Clear the input field after submission
});

const makeImages = (shows) => {
  if (ul) {
    ul.innerHTML = ""; // Clear the ul of the body after resubmission
  }
  for (let result of shows) {
    if (result.show.image) {
      const img = document.createElement("IMG");
      img.id = img.src = result.show.image.medium;
      ul.append(img);
    }
  }
};
