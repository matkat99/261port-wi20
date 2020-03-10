function getJson(url) {
  return fetch(url)
    .then(response => {
      console.log(response);
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("not ok");
        console.log("will not run");
      }
    })
    .catch(err => {
      console.log(err);
    });
}

const baseUrl = "https://pokeapi.co/api/v2/";
const pokemon = [];

async function displayPokemon() {
  const pokeList = await getJson(baseUrl + "pokemon");
  buildList(pokeList);
}

function buildList(pokemon) {
  const element = document.getElementById("listElement");
  element.innerHTML = pokemon
    .map(item => {
      return `<li><a href="${item.url}">${item.name}</a></li>`;
    })
    .join("");
}
displayPokemon();

getJson("foods.json").then(data => {
  console.log(data);
});

function longProcess() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (true) {
        resolve(42);
      } else {
        reject("it didnt work");
      }
    }, 200);
  });
}
longProcess().then(
  response => {
    const total = 100 + response;
    console.log("total", total);
  },
  err => {
    console.log(err);
  }
);
//const total = 100 + longProcess();
//console.log("total", total); // NaN
