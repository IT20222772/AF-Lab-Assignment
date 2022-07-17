import Router from '@koa/router';
import {get,save,getAll, update, deletePost} from '../api/Post.api.js';

const PostRouter = new Router({
    prefix: '/posts'
});




PostRouter.get('/',(ctx)=>{
    ctx.body = getAll();
    ctx.set('Content-Type','application/json');
    ctx.status = 200;
});




PostRouter.post('/',(ctx)=>{
    const data = ctx.request.body;
    const post = save(data);
    ctx.body = post;

    ctx.set('Content-Type','application/json');
    ctx.status = 201;
});


PostRouter.get('/:id',(ctx)=>{
    const id = ctx.params.id;
    ctx.body = get(id);
    ctx.set('Content-Type','application/json');
    ctx.status = 200;
});


PostRouter.put('/:id',(ctx)=>{
    const id = ctx.params.id;
    ctx.body = update(id,ctx.request.body);
    ctx.set('Content-Type','application/json');
    ctx.status = 200;
});



PostRouter.delete('/:id',(ctx)=>{
    const id = ctx.params.id;
   deletePost(id);
    ctx.status = 204;
});




export default  PostRouter;