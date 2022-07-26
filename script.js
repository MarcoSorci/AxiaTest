fetch("https://api.punkapi.com/v2/beers")
  .then((resp) => resp.json())
  .then((data) => displayData(data));

function displayData(data) {
  data.forEach((element) => {
    let div = document.createElement("div");
    div.className = "beer";
    let front = document.createElement("div");
    front.className = "front";
    let back = document.createElement("div");
    back.className = "back";
    front.innerHTML = `<img src="${element.image_url}" alt="${element.name}">
        <h2>${element.name}</h2>`;
    back.innerHTML = `<p>${element.description}</p>
        <p>First Brew Date: ${element.first_brewed}</p>
        <p>ABV: ${element.abv}%</p>`;
    if (element.name !== "Bramling X") {
        back.style.justifyContent = "center";
    }
    div.appendChild(front);
    div.appendChild(back);
    document.getElementById("container").appendChild(div);
  });
}
