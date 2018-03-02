// Your code goes here
var rootNode = document.getElementById("root");

function pageOne(tanks) {
	var thumbnails = document.createElement("div");
	thumbnails.className = 'thumbnails';
	
	var h1 = document.createElement("h1");
	h1.innerHTML = 'Most popular tanks';
	thumbnails.appendChild(h1);
	
	var divBox = document.createElement("div");
	divBox.className = 'box';
	thumbnails.appendChild(divBox);
	
	for(var i = 0; i < tanks.length; i++) {
		var a = document.createElement("a");
		a.setAttribute('href', '#' + tanks[i].model);
		
		var div = document.createElement("div");
		div.className = 'box-obj';
		div.setAttribute('title', 'Click to details');
		a.appendChild(div);
		divBox.appendChild(a);

		var divImgTank = document.createElement("div");
		divImgTank.className = "img-tanks";
		
		var imgTank = document.createElement("img");
		imgTank.setAttribute('src', tanks[i].preview);
		divImgTank.appendChild(imgTank);
		
		var divInfo = document.createElement("div");
		divInfo.className = "info-tanks";
		
		var imgCountry = document.createElement("img");
		imgCountry.setAttribute('src', tanks[i].country_image)
		
		var divImgCountry = document.createElement("div");
		divImgCountry.className = "img-country";
		divImgCountry.appendChild(imgCountry);


		var divLevel = document.createElement("div");
		divLevel.className = "level";
		divLevel.innerHTML = tanks[i].level;
		
		var divModel = document.createElement("div");
		divModel.className = "model";
		divModel.innerHTML = tanks[i].model;
		
		divInfo.appendChild(divImgCountry);
		divInfo.appendChild(divLevel);
		divInfo.appendChild(divModel);
		div.appendChild(divImgTank);
		div.appendChild(divInfo);
	}
	return thumbnails;
	
}

function pageTwo(tanks) {
	
	var tankDetails = document.createElement("div");
	tankDetails.className = 'tanks-details';
		
		var divImgTank = document.createElement("div");
		divImgTank.className = "img-tanks";
		
		var imgTank = document.createElement("img");
		imgTank.setAttribute('src', tanks.preview);
		divImgTank.appendChild(imgTank);

		var divObject = document.createElement("div");
		divObject.setAttribute('id', tanks.model);
		tankDetails.appendChild(divObject);

		var divInfo = document.createElement("div");
		divInfo.className = "info-tanks-details";
		
		var imgCountry = document.createElement("img");
		imgCountry.setAttribute('src', tanks.country_image)
		
		var divImgCountry = document.createElement("div");
		divImgCountry.className = "img-country-details";
		divImgCountry.appendChild(imgCountry);


		var divLevel = document.createElement("div");
		divLevel.className = "level-details";
		divLevel.innerHTML = '(level ' +tanks.level+ ')';
		
		var divModel = document.createElement("div");
		divModel.className = "model-details";
		divModel.innerHTML = tanks.model;

		divInfo.appendChild(divImgCountry);
		divInfo.appendChild(divModel);
		divInfo.appendChild(divLevel);
		divObject.appendChild(divInfo);
		
		var divBox = document.createElement("div");
		divBox.className = 'box-details';
		divObject.appendChild(divBox);
		
		var divPreview = document.createElement('div');
		divPreview.className = 'preview';
		
		var divCharacteristic = document.createElement('div');
		divCharacteristic.className = 'characteristic';
		divBox.appendChild(divPreview);
		divBox.appendChild(divCharacteristic);

		var h2 = document.createElement("h2");
		h2.innerHTML = 'Preview';
		divPreview.appendChild(h2);

		var h2 = document.createElement("h2");
		h2.innerHTML = 'Characteristic';
		divCharacteristic.appendChild(h2);

		divPreview.appendChild(divImgTank);

		var table = document.createElement("table");
		for (var prop in tanks.details) {
			var tr = document.createElement("tr");
			var tdFifst = document.createElement("td");
			tdFifst.innerHTML = prop.replace(/_/g , " ");
			var tdSecond = document.createElement("td");
			tdSecond.innerHTML = tanks.details[prop];
			tr.appendChild(tdFifst);
			tr.appendChild(tdSecond);
			table.appendChild(tr);
		}
		divCharacteristic.appendChild(table);
		
		var linkBack = document.createElement('a');
		linkBack.setAttribute('href', '#');

		var textBack = document.createElement("h4");
		textBack.innerHTML = 'Back to list view';
		linkBack.appendChild(textBack);
	
	tankDetails.appendChild(linkBack);
	return tankDetails;
}

window.onhashchange = change

function change() {
	var parent = document.getElementById('root');
	var child = parent.childNodes;
	var oldNode;
	for (var i=0; i < child.length; i++) {
		if (child[i].nodeType === Node.ELEMENT_NODE) {
			oldNode = child[i];
			break;
		}
	}
	if (!oldNode) {
		parent.appendChild(pageOne(tanks));
		return;
	} else if (location.hash === '') {
		parent.replaceChild(pageOne(tanks), oldNode);
	} else {
		for (var i = 0; i < tanks.length; i++) {
			if ('#'+tanks[i].model===location.hash) {
				parent.replaceChild(pageTwo(tanks[i]), oldNode);
				return;
			}
		}
	}
}
change();