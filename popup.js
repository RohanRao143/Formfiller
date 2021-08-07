
chrome.storage.sync.get("color", ({ color }) => {
  let changeColor = document.getElementById("changeColor");
  changeColor.style.backgroundColor = color;
});