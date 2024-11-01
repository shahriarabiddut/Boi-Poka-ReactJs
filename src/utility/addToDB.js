import { toast } from "react-toastify";

const getStoredReadList = ()=>{
    const storedListStr = localStorage.getItem('read-list');
    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        // return storedList;
        // for surge 
        return Array.isArray(storedList) ? storedList : [];
    }else{
        return [];
    }
}
const addToStoredReadList = (id)=>{
    const storedList = getStoredReadList();
    if(storedList.includes(id)){
        toast('Allready Exist !');
    }else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('read-list',storedListStr);
        toast('Added To Your Read List!');
    }
}
const existOrNot = (id)=>{
    const storedList = getStoredReadList();
    if(storedList.includes(id)){
        return 1;
    }
    return 0;
}

const getStoredWishedList = ()=>{
    const storedListStr = localStorage.getItem('wished-list');
    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        // return storedList;
        // for surge 
        return Array.isArray(storedList) ? storedList : [];
    }else{
        return [];
    }
}
const addToStoredWishedList = (id)=>{
    const storedList = getStoredWishedList();
    if(storedList.includes(id)){
        toast('Allready Exist !');
    }else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('wished-list',storedListStr);
        toast('Added To Your Wish List!');
    }
}
const wishedOrNot = (id)=>{
    const storedList = getStoredWishedList();
    if(storedList.includes(id)){
        return 1;
    }
    return 0;
}
export { addToStoredReadList, addToStoredWishedList, existOrNot, getStoredReadList, getStoredWishedList, wishedOrNot };

