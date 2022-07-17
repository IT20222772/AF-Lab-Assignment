import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';
import PostRouter from './router/Post.router.js';
import ItemRouter from './router/Item.router.js';
import ProfileRouter from './router/Profile.router.js';
import PromoRouter from './router/Promo.router.js';
import CartRouter from './router/Cart.router.js';
import ListRouter from './router/List.router.js';
import PaymentRouter from './router/Payment.router.js';


const app = new Koa();


app.use(bodyParser());
app.use(cors());


app.use(PostRouter.routes())
.use(PostRouter.allowedMethods());

app.use(ProfileRouter.routes())
.use(ProfileRouter.allowedMethods());

app.use(ItemRouter.routes())
.use(ItemRouter.allowedMethods());

app.use(ListRouter.routes())
.use(ListRouter.allowedMethods());

app.use(PromoRouter.routes())
.use(PromoRouter.allowedMethods());

app.use(CartRouter.routes())
.use(CartRouter.allowedMethods());

app.use(PaymentRouter.routes())
.use(PaymentRouter.allowedMethods());

app.use(ctx=>{
    ctx.set('Content-Type','text/html');
    ctx.body='<h4>not found</h4>';
    ctx.status=404;
});


app.listen(8000, () => console.log(`Server Started...`));