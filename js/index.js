import getDatas from "./modules/getDatas.js";
import feedTbody from "./modules/feedTbody.js";
import { loadDataFromLocalStorage } from "./modules/localStorage.js";
import { sortData } from "./modules/orderList.js";

let data = loadDataFromLocalStorage();

const usersDatasUrl = "./datas/users.json";

const users = await getDatas(usersDatasUrl);

//

if (users) {
	// feedTbody(users);
	localStorage.setItem('users', JSON.stringify(users))
}
if (data) {
	feedTbody(data);
}
document.getElementById('bouttonAsc').addEventListener('click', () => {
	sortData(data, 'asc')
});
document.getElementById('bouttonDesc').addEventListener('click', () => {
	sortData(data, 'desc')
});
