# TV Show Search App

Welcome to the TV Show Search App! This simple web application allows you to search for TV shows and displays images of the shows that match your search. It uses HTML, JavaScript, and the Axios library to fetch data from the TVMaze API.

![tvMazeAPI](https://github.com/user-attachments/assets/e91e0668-d727-4bef-b61c-5255f9940ef3)

## How it Works

### 1. HTML Form for User Input

The app includes a search form where you can type the name of a TV show. Here's the form from the `index.html` file:

```html
<form id="searchForm">
  <input
    type="text"
    placeholder="Enter TV show name"
    id="search-input"
    name="query"
  />
  <button>Search</button>
</form>
```

- The form has an input field where you can type the name of a TV show.
- A `Search` button submits the form.

### 2. Fetching Data from the TVMaze API

When you type a TV show name and click "Search", the app uses JavaScript and the Axios library to send a request to the TVMaze API. Here's the relevant code from `app.js`:

```js
form.addEventListener("submit", async function (e) {
  e.preventDefault(); // Prevents the page from refreshing
  const searchTerm = form.elements.query.value; // Gets the input value
  const config = {params: {q: searchTerm}}; // Prepares the API request
  const res = await axios.get(`https://api.tvmaze.com/search/shows`, config); // Fetches data
  makeImages(res.data); // Displays the results
  form.elements.query.value = ""; // Clears the input field
});
```

- The app sends the search term to the TVMaze API.
- It retrieves a list of TV shows that match the search term.

### 3. Display TV Show Images

The app processes the API response and displays images of the TV shows. Here's how it works in `app.js`:

```js
const makeImages = (shows) => {
  if (ul) {
    ul.innerHTML = ""; // Clears previous search results
  }
  for (let result of shows) {
    if (result.show.image) {
      const img = document.createElement("IMG");
      img.src = result.show.image.medium; // Sets the image source
      ul.append(img); // Adds the image to the page
    }
  }
};
```

- The app creates an image element for each TV show that has an image.
- It clears any previous search results to avoid clutter.

### 4. Improved User Experience

To make the app more user-friendly:

- The input field is cleared after each search, so you can quickly type a new search term.
- Previous search results are removed before displaying new ones, so the page stays clean and organized.

## Try It Out!

1. Open the `index.html` file in your browser.
2. Type the name of a TV show in the search bar.
3. Click `Search` to see images of matching TV shows.
