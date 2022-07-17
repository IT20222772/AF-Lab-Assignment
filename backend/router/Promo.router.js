import Router from '@koa/router';
import {save,getAll} from '../api/Promo.api.js';



const PromoRouter = new Router({
    prefix: '/promo'
});


PromoRouter.get('/getpromo',(ctx)=>{
    const post = getAll();
    ctx.body = {success:true, exsitingpromotion:post}
    ctx.set('Content-Type','application/json');
    ctx.status = 200;
});

PromoRouter.post('/savepromo',(ctx)=>{
    const data = ctx.request.body;
    const post = save(data);
    ctx.body = {success:true};

    ctx.set('Content-Type','application/json');
    ctx.status = 201;
});





export default  PromoRouter;