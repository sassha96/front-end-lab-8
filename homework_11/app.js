let rootNode = document.getElementById("root");
let parentNode = createElFunc("ul");
rootNode.appendChild(parentNode);

function buildTree(structureArr, parent) {
  for (let i = 0; i < structureArr.length; i++) {
    let ul = createElFunc("ul");
    let li = createElFunc("li");
    let p = createElFunc("p");
    let icon = createElFunc("i", "material-icons");

    if (structureArr[i].folder) {
      icon.innerHTML = "folder";
    } else {
      icon.innerHTML = "insert_drive_file";
      p.className = "file";
    }

    let title = createElFunc("span", "item-text", structureArr[i].title);
    p.appendChild(icon);
    p.appendChild(title);
    li.appendChild(p);
    parent.appendChild(li);
    p.addEventListener("click", toggle);

    if (structureArr[i].children) {
      li.appendChild(ul);
      if (structureArr[i].folder) {
        icon.innerHTML = "folder";
      } else {
        icon.innerHTML = "insert_drive_file";
      }

      ul.style.display = "none";
      buildTree(structureArr[i].children, ul);
    } else if (structureArr[i].folder && !structureArr[i].children) {
      parent.appendChild(ul);

      let empty = createElFunc("li", "empty-text", "Folder is empty");
      li.appendChild(empty);
      empty.style.display = "none";
    }
  }
}

function createElFunc(tag, elClass = "", insideText = "") {
  let el = document.createElement(tag);
  el.className = elClass;
  el.innerHTML = insideText;
  return el;
}

function toggle(el) {
  if (this.nextElementSibling.style.display === "none") {
    this.nextElementSibling.style.display = "block";
    this.firstElementChild.innerHTML = "folder_open";
  } else {
    this.nextElementSibling.style.display = "none";
    this.firstElementChild.innerHTML = "folder";
  }
}

buildTree(structure, parentNode);
rootNode.appendChild(parentNode);