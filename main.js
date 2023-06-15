const resultEl = document.querySelector("#result");
const filterEl = document.querySelector("#filter");

const listItems = [];

function filterData(search) {
  listItems.forEach((item) => {
    const condition = item.innerText
      .toLowerCase()
      .includes(search.toLowerCase());

    if (condition) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
}

filterEl.addEventListener("input", (e) => filterData(e.target.value));

getData().catch((resultEl.innerHTML = "<h3>Something went wrong</h3>"));

async function getData() {
  const res = await fetch("https://randomuser.me/api?results=100");

  const { results } = await res.json();

  // Clear result
  resultEl.innerHTML = "";

  results?.forEach((user) => {
    const li = document.createElement("li");

    listItems.push(li);

    li.innerHTML = `
      <img src="${user?.picture?.large}" alt="${user?.name?.first}">
      <div class="user-info">
        <h4>${user?.name?.first} ${user?.name?.last}</h4>
        <p>${user?.location?.city}, ${user?.location?.country}</p>
      </div>
    `;

    resultEl.appendChild(li);
  });
}
