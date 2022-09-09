const btnAdd = document.getElementById("btnAjouter");
const btnDel = document.getElementById("btnEffacer");

const intituler = document.getElementById("intitule");
const somme = document.getElementById("somme");

const list = document.getElementById("listDep");
const total = document.getElementById("total");

var totalDep = 0;

btnAdd.addEventListener("click", () => {
	console.log(intituler.value, somme.value);

	if (intitule.value.trim().length == 0 || somme.value.trim().length == 0) {
		// console.log("Champs obligatoire !");
		presentAlert();
		return;
	}

	const newLabel = document.createElement("ion-label");
	// newLabel.textContent = intituler.value + " : " + somme.value + "$";
	newLabel.textContent = `${intituler.value} : ${somme.value} $`;

	const newItem = document.createElement("ion-item");
	newItem.appendChild(newLabel);

	list.appendChild(newItem);

	// totalDep += Number(somme.value);
	totalDep += +somme.value;
	total.textContent = totalDep;

	clear();
});

btnDel.addEventListener("click", clear);

function clear() {
	intituler.value = "";
	somme.value = "";
}

function presentAlert() {
	const alert = document.createElement("ion-alert");
	alert.header = "Alert";
	alert.subHeader = "Important message";
	alert.message = "Les champs sont obligatoire !";
	// alert.buttons = ["OK", "Cancel"];
	alert.buttons = [
		{
			text: "Yes",
			role: "ok",
			handler: () => {
				console.log("Yes");
			},
		},
		{
			text: "No",
			role: "cancel",
			handler: () => {
				console.log("No");
			},
		},
	];

	document.body.appendChild(alert);
	alert.present();
}
