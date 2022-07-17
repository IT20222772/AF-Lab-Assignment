import { randomUUID } from 'crypto';

const Post= new Map();

export const save=({text,age})=>{
    const post = {id:randomUUID(), text,age,
        postedDate: new Date()
    };
    Post.set(post.id,post);
    return post;

};



export const get=(id)=>{
    const post = Post.get(id);
    if(!post){
        throw new Error(`Not found the ID ${id}`);
    }
    return post;

};


export const getAll = () => {
    return [...Post.values()];

};


export const update = (id,{text,age}) =>{
    if(!Post.has(id)){
        throw new Error(`Not found the ID ${id}`);

    }

    const post = {id,text,age,postedDate: new Date()};
    Post.set(post.id,post);
    return post;

};


export const deletePost = (id)=>{
    if(!Post.has(id)){
        throw new Error (`Not found the ID ${id}`);

    }
    Post.delete(id);
};