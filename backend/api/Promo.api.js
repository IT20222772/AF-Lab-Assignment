import { randomUUID } from 'crypto';

const Promo= new Map();

export const save=({name,price,discount})=>{
    const post = {id:randomUUID(), name,price,discount,
        postedDate: new Date()
    };
    Promo.set(post.id,post);
    return post;

};



export const get=(id)=>{
    const post = promotion.get(id);
    if(!post){
        throw new Error(`Not found the ID ${id}`);
    }
    return post;

};


export const getAll = () => {
    return [...Promo.values()];

};


