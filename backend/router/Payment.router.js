import Router from '@koa/router';
import {save,getAll} from '../api/Payment.api.js';

const PaymentRouter = new Router({
    prefix: '/payment'
});


PaymentRouter.get('/',(ctx)=>{
    const post = getAll();
    ctx.body = {success:true, exsitingpayment:post}
    ctx.set('Content-Type','application/json');
    ctx.status = 200;
});


PaymentRouter.post('/',(ctx)=>{
    const data = ctx.request.body;
    const post = save(data);
    ctx.body = post;

    ctx.set('Content-Type','application/json');
    ctx.status = 201;
});



export default  PaymentRouter;