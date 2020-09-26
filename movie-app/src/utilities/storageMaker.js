import {STORAGE_YOUR_MOVIES} from '../globals/variables';

export const isItemInStorage = (newItem) => {
    let yourCurrentMovies = getStorage();
    if(!yourCurrentMovies){
        return [];
    }
    if(yourCurrentMovies.find(currentMovie => currentMovie.id === newItem.id)){
        return true;
    }
    return yourCurrentMovies;
}

export const setStorage = (newItem, storageItem = STORAGE_YOUR_MOVIES, test = true) => {
    if(storageItem === STORAGE_YOUR_MOVIES){
        const newMovieForStorage = JSON.stringify(newItem);
        localStorage.setItem(storageItem, newMovieForStorage);
        return newItem;
    }else if(storageItem === STORAGE_YOUR_MOVIES){
        let arrayOfYourMovies;
        if(test === true){
            arrayOfYourMovies = isItemInStorage(newItem);
            if(arrayOfYourMovies === true){
                console.log('Item already in storage')
                return false;
            }
        }else{
            arrayOfYourMovies = getStorage();
        }
        arrayOfYourMovies.push(newItem);
        const arrayOfYourMoviesForStorage = JSON.stringify(arrayOfYourMovies);
        localStorage.setItem(storageItem, arrayOfYourMoviesForStorage);
        return arrayOfYourMovies;
    }else{
        console.log('Invalid storage item');
        return false;
    }    
}

export const getStorage = (storageItem = STORAGE_YOUR_MOVIES) => {
    let item = localStorage.getItem(storageItem);
    if(item){
        item = JSON.parse(item);
        return item;
    }else if(storageItem === STORAGE_YOUR_MOVIES){
        return [];
    }else{
        return false;
    }   
}

export const removeFromStorage = (id, storageItem = STORAGE_YOUR_MOVIES) => {
    let items = getStorage();
    const isMovie = (current) => current.id === id;
    let indexOfMovieToRemove = items.findIndex(isMovie);
    items.splice(indexOfMovieToRemove, 1);
    let itemsForStorage = JSON.stringify(items);
    localStorage.setItem(storageItem, itemsForStorage);
    return items;
}