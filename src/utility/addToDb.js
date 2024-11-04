// Mark as read button

const getStoredReadList = () =>{
    // readList 
    const storedListStr = localStorage.getItem('read-list');
    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else{
        return []; 
    }
};

const addToStoredReadList = (id) =>{
    // first you need to get the stored read list then you have to add to the add store list
    // we can get the store list from const storedList = getStored Read list();
    const storedList = getStoredReadList();
    if(storedList.includes(id)){
        console.log(id, 'already exist in the read list')
    }
    else{
        storedList.push(id);
        const storedListString = JSON.stringify(storedList); 
        localStorage.setItem('read-list', storedListString);
    }
};



// Wish List
const getStoredWishList = () =>{
    const storedWishListStrData = localStorage.getItem('wish-list');
    if(storedWishListStrData){
        const wishList = JSON.parse(storedWishListStrData);
        return wishList;
    }
    else{
        return [];
    }
};


const addStoredWishList = (id) =>{
    const wishListData = getStoredWishList();
    if(wishListData.includes(id)){
        console.log(id, 'already exist in wish list');
    }
    else{
        wishListData.push(id);
        const storedWishListToString = JSON.stringify(wishListData);
        localStorage.setItem('wish-list', storedWishListToString);
    }
}



export {addToStoredReadList, addStoredWishList};