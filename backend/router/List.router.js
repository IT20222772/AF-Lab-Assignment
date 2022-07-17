import Router from '@koa/router';
import {save,getAll} from '../api/List.api.js';


const ListRouter = new Router({
    prefix: '/list'
});


ListRouter.get('/getall',(ctx)=>{
    const post = getAll();
    ctx.body = {success:true, exsitingList:post}
    ctx.set('Content-Type','application/json');
    ctx.status = 200;
});

ListRouter.post('/',(ctx)=>{
    const data = ctx.request.body;
    const post = save(data);
    ctx.body = {success:true};

    ctx.set('Content-Type','application/json');
    ctx.status = 201;
});




export default  ListRouter;