import { randomUUID } from 'crypto';

const Profile= new Map();

export const save=({name,age,email,phonenum,address})=>{
    const post = {id:randomUUID(), name,age,email,phonenum,address,
        postedDate: new Date()
    };
    Profile.set(post.id,post);
    return post;

};

export const get=(id)=>{
    const post = Profile.get(id);
    if(!post){
        throw new Error(`Not found the ID ${id}`);
    }
    return post;

};


export const getAll = () => {
    return [...Profile.values()];

};


