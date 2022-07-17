import { randomUUID } from 'crypto';

const Payment= new Map();

export const save=({paymentno,name,price})=>{
    const post = {id:randomUUID(), paymentno,name,price,
        postedDate: new Date()
    };
    Payment.set(post.id,post);
    return post;

};



export const get=(id)=>{
    const post = Payment.get(id);
    if(!post){
        throw new Error(`Not found the ID ${id}`);
    }
    return post;

};


export const getAll = () => {
    return [...Payment.values()];

};


export const update = (id,{text,age}) =>{
    if(!Payment.has(id)){
        throw new Error(`Not found the ID ${id}`);

    }

    const post = {id,text,agepostedDate: new Date()};
    Payment.set(post.id,post);
    return post;

};


export const deletePost = (id)=>{
    if(!Payment.has(id)){
        throw new Error (`Not found the ID ${id}`);

    }
    Payment.delete(id);
};