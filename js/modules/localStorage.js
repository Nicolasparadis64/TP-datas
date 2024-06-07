
export function loadDataFromLocalStorage() {
    const storedData = localStorage.getItem('users');
    if (storedData) {
        const data = JSON.parse(storedData);
        console.log('data depuis le local storage:', data);
        return data;
    } else {
        console.log('pas de data dans le local storage');
        return null;
    }
}
