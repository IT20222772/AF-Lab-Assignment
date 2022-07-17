import Router from '@koa/router';
import {get,save,getAll, update, deleteItem} from '../api/Item.api.js';



const ItemRouter = new Router({
    prefix: '/Items'
});


ItemRouter.get('/getall',(ctx)=>{
    const post = getAll();
    ctx.body = {success:true, exsitingItems:post}
    ctx.set('Content-Type','application/json');
    ctx.status = 200;
});


ItemRouter.post('/save',(ctx)=>{
    const data = ctx.request.body;
    const post = save(data);
    ctx.body ={success:true};

    ctx.set('Content-Type','application/json');
    ctx.status = 201;
});


ItemRouter.get('/:id',(ctx)=>{
    const id = ctx.params.id;
    ctx.body = get(id);
    ctx.set('Content-Type','application/json');
    ctx.status = 200;
});


ItemRouter.put('/updateitem/:id',(ctx)=>{
    const id = ctx.params.name;
    ctx.body = update(id,ctx.request.body);
    ctx.set('Content-Type','application/json');
    ctx.status = 200;
});



ItemRouter.delete('/itemdelete/:id',(ctx)=>{
    const id = ctx.params.id;
   deleteItem(id);
    ctx.status = 204;
});




export default  ItemRouter;