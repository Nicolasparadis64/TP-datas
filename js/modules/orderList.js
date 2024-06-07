// import { feedTbody } from "./modules/feedTbody.js";
import feedTbody from "./feedTbody.js";

export function sortData(data, order) {
    if (order === 'asc') {
        data.sort((a, b) => a.nom.localeCompare(b.nom));
    } else if (order === 'desc') {
        data.sort((a, b) => b.nom.localeCompare(a.nom));
    }
    feedTbody(data);
}

