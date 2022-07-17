import Router from '@koa/router';
import {save,getAll} from '../api/Profile.api.js';


const ProfileRouter = new Router({
    prefix: '/profile'
});


ProfileRouter.get('/getall',(ctx)=>{
    const post = getAll();
    ctx.body = {success:true, exsitingprofile:post}
    ctx.set('Content-Type','application/json');
    ctx.status = 200;
});

ProfileRouter.post('/create',(ctx)=>{
    const data = ctx.request.body;
    const post = save(data);
    ctx.body = {success:true};

    ctx.set('Content-Type','application/json');
    ctx.status = 201;
});





export default  ProfileRouter;