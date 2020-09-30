import { STORAGE_YOUR_MOVIES } from '../globals/variables';

export const isItemInStorage = (newItem) => {
    let yourMovies = getStorage();
    if(!yourMovies){
        return [];
    }
    if(yourMovies.find(movie => movie.id === newItem.id)){
        return true;
    }
    return false;
}

export const setStorage = (newItem, storageItem = STORAGE_YOUR_MOVIES) => {

    let yourMovies = getStorage();
    if( yourMovies !== false){      
        yourMovies.push(newItem);
    }else{
        yourMovies = [newItem];
    }
    yourMovies = JSON.stringify(yourMovies);
    localStorage.setItem(storageItem, yourMovies);

}

export const getStorage = (storageItem = STORAGE_YOUR_MOVIES) => {
    let item = localStorage.getItem(storageItem);
    if(item){
        item = JSON.parse(item);
        return item;
    }else {
        return false;
    }
}

export const removeFromStorage = (movie, storageItem = STORAGE_YOUR_MOVIES) => {
    let items = getStorage();
    const isMovie = (current) => current.id === movie.id;
    let indexOfItemToRemove = items.findIndex(isMovie);
    items.splice(indexOfItemToRemove, 1);
    let itemsForStorage = JSON.stringify(items);
    localStorage.setItem(storageItem, itemsForStorage);
    return items;
}

export default getStorage