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

function createItem(text) {
  const itemRow = document.createElement("li");
  itemRow.setAttribute("class", "item__row");
  const item = document.createElement("div");
  item.setAttribute("class", "item");

  const name = document.createElement("span");
  name.setAttribute("class", "item__name");
  name.innerHTML = text;
  const btn = document.createElement("button");
  btn.setAttribute("class", "item__trash");
  btn.innerHTML = '<i class="fas fa-trash-alt"></i>';
  btn.addEventListener("click", () => {
    memo.removeChild(itemRow);
  });

  item.appendChild(name);
  item.appendChild(btn);
  const divider = document.createElement("div");
  divider.setAttribute("class", "item__divider");

  itemRow.appendChild(item);
  itemRow.appendChild(divider);
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
