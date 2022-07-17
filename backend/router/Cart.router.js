import Router from '@koa/router';
import {get,save,getAll, update} from '../api/Cart.api.js';



const CartRouter = new Router({
    prefix: '/carts'
});




CartRouter.get('/',(ctx)=>{
    ctx.body = getAll();
    ctx.set('Content-Type','application/json');
    ctx.status = 200;
});




CartRouter.post('/',(ctx)=>{
    const data = ctx.request.body;
    const post = save(data);
    ctx.body = post;

    ctx.set('Content-Type','application/json');
    ctx.status = 201;
});


CartRouter.get('/:id',(ctx)=>{
    const id = ctx.params.id;
    ctx.body = get(id);
    ctx.set('Content-Type','application/json');
    ctx.status = 200;
});


CartRouter.put('/:id',(ctx)=>{
    const id = ctx.params.id;
    ctx.body = update(id,ctx.request.body);
    ctx.set('Content-Type','application/json');
    ctx.status = 200;
});



CartRouter.delete('/:id',(ctx)=>{
    const id = ctx.params.id;
   deletePost(id);
    ctx.status = 204;
});




export default CartRouter;