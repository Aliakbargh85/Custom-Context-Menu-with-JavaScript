let $ = document;

const contextMenu = $.getElementById("contextMenu");

function contextHandler(e) {
  e.preventDefault();

  if (contextMenu.style.display === "none") {
    contextMenu.style.left = e.pageX + "px";
    contextMenu.style.top = e.pageY + "px";
    contextMenu.style.display = "block";
  } else {
    contextMenu.style.left = e.pageX + "px";
    contextMenu.style.top = e.pageY + "px";
  }

  console.log(e);
}

function clickContextMenu() {
  contextMenu.style.display = "none";
}

function keyDownHandler(e) {
  if (e.key === "Escape") {
    contextMenu.style.display = "none";
  }
}

$.body.addEventListener("contextmenu", contextHandler);
$.body.addEventListener("click", clickContextMenu);
$.body.addEventListener("keydown", keyDownHandler);
