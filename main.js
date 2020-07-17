"use strict";

const memo = document.querySelector(".memo");
const input = document.querySelector(".footer__input");
const addBtn = document.querySelector(".footer__button");

function onAdd() {
  const text = input.value;
  if (text === "") {
    input.focus();
    return;
  }

  const item = createItem(text);

  memo.appendChild(item);
  item.scrollIntoView({ block: "center" });
  input.value = "";
  input.focus();
}

let id = 0;
function createItem(text) {
  const itemRow = document.createElement("li");
  itemRow.setAttribute("class", "item__row");
  itemRow.setAttribute("data-id", id);
  itemRow.innerHTML = `
      <div class="item">
        <span class="item__name">${text}</span>
        <button class= "item__trash">
          <i class="fas fa-trash-alt" data-id=${id}></i>
        </button>
      </div> 
      <div class="items__divider"></div>`;
  id++;
  return itemRow;
}

addBtn.addEventListener("click", () => {
  onAdd();
});

input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    onAdd();
  }
});

memo.addEventListener("click", (event) => {
  const id = event.target.dataset.id;
  if (id) {
    const tmp_item = document.querySelector(`.item__row[data-id="${id}"]`);
    //memo.removeChild(tmp_item);
    tmp_item.remove();
  }
});
