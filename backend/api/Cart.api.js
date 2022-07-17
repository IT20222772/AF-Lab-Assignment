import { randomUUID } from 'crypto';

const Cart= new Map();

export const save=({name,quentity,price})=>{
    const Item = {id:randomUUID(), name,quentity,price,
        ItemedDate: new Date()
    };
    Cart.set(Item.id,Item);
    return Item;

};



export const get=(id)=>{
    const Item = Cart.get(id);
    if(!Item){
        throw new Error(`Not found the ID ${id}`);
    }
    return Item;

};


export const getAll = () => {
    return [...Cart.values()];

};


export const update = (id,{name,quentity,price,type}) =>{
    if(!Cart.has(id)){
        throw new Error(`Not found the ID ${id}`);

    }

    const Item = {id,name,quentity,price,type,ItemedDate: new Date()};
    Cart.set(Item.id,Item);
    return Item;

};


export const deleteItem = (id)=>{
    if(!Cart.has(id)){
        throw new Error (`Not found the ID ${id}`);

    }
    Cart.delete(id);
};