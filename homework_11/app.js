var rootNode = document.getElementById("root");

function treeView(mainBox, structure) {
	var ul = document.createElement("ul");
	mainBox.appendChild(ul);
	for (var i = 0; i < structure.length; i++) {
		var li = document.createElement("li");
		ul.appendChild(li);
		var div = document.createElement("div");
		div.className = "content";
		li.appendChild(div);
		if (structure[i].folder) {
			div.onclick = function () {
				if (this.nextSibling.style.display === "block") {
					this.nextSibling.style.display = "none";
					this.firstChild.innerHTML = "folder";
				} else {
					this.nextSibling.style.display = "block";
					this.firstChild.innerHTML = "folder_open";
				}
			}
			var icon = document.createElement("i");
			icon.className = "material-icons folder";
			icon.innerHTML = "folder";
			div.appendChild(icon);
			
			var lable = document.createElement("span");
			lable.innerHTML = structure[i].title;
			div.appendChild(lable);

			if (structure[i].children) {
				treeView(li, structure[i].children);
			} else {
				var emptyFolder = document.createElement("span");
				emptyFolder.className = "empty-folder";
				li.appendChild(emptyFolder);
				emptyFolder.innerHTML = "Folder is empty";
			}
		} else {
			var icon = document.createElement("i");
			icon.className = "material-icons file";
			icon.innerHTML = "insert_drive_file";
			div.appendChild(icon);
			
			var lable = document.createElement("span");
			lable.innerHTML = structure[i].title;
			div.appendChild(lable);
		}
	}
}

var div = document.createElement("div");
treeView(div, structure);
rootNode.appendChild(div);