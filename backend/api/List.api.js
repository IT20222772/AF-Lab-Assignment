import { randomUUID } from 'crypto';

const List= new Map();

export const save=({name,quentity})=>{
    const Item = {id:randomUUID(), name,quentity,
        ItemedDate: new Date()
    };
    List.set(Item.id,Item);
    return Item;

};



export const get=(id)=>{
    const Item = List.get(id);
    if(!Item){
        throw new Error(`Not found for the ID ${id}`);
    }
    return Item;

};


export const getAll = () => {
    return [...List.values()];

};


