import { randomUUID } from 'crypto';

const Items= new Map();

export const save=({name,quentity,price,type})=>{
    const Item = {id:randomUUID(), name,quentity,price,type,
        ItemedDate: new Date()
    };
    Items.set(Item.id,Item);
    return Item;

};



export const get=(id)=>{
    const Item = Items.get(id);
    if(!Item){
        throw new Error(`Not found the ID ${id}`);
    }
    return Item;

};


export const getAll = () => {
    return [...Items.values()];

};


export const update = (id,{name,quentity,price,type}) =>{
    if(!Items.has(id)){
        throw new Error(`Not found the ID ${id}`);

    }

    const Item = {id,name,age,quentity,price,type,ItemedDate: new Date()};
    Items.set(Item.id,Item);
    return Item;

};


export const deleteItem = (id)=>{
    if(!Items.has(id)){
        throw new Error (`Not found the ID ${id}`);

    }
    Items.delete(id);
};