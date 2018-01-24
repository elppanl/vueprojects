import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ff1 from '@/components/fenzhi1/fen1'  //ff1是自己起的组件名
import ff1c1 from '@/components/fenzhi1/fen1child1'
import ff1c2 from '@/components/fenzhi1/fen1child2'
import ff2 from '@/components/fenzhi1/fen2'
import ffz from '@/components/fenzhi1/fenz'
import ff3 from '@/components/fenzhi1/fen3'
import ff5 from '@/components/fenzhi1/fen5'
import ff6 from '@/components/fenzhi1/fen6'
import ero from '@/components/fenzhi1/error'  //404页面

Vue.use(Router)

export default new Router({
	mode:'history',  //默认不写mode时或者写mode:'hash'，地址栏里是#/加路由的形式，而加了mode属性后，地址栏里是正常的形式
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
//    component: HelloWorld
//				同一个页面中有多个court-view标签的写法如下
//					component要加s
//					default是对应App.vue中的第一个router-view标签(不加name属性的那个)
//					component中ff2对应的是import ff2 from '@/components/fenzhi1/fen2'中的ff2
//					component中fff2对应的是App.vue中的<router-view name="fff2"></router-view>的name值
				components: {
				default: HelloWorld,
				fff2:ff2	
			}
    },
    {
    	path:'/fenzhi1/fen1',  //这里是自己设置的路由路径，可随意设置比如/fenzhi2/fen3
    	name: 'fen1',  
    	component:ff1,  //和上面import自己起的组件名ff1对应
    	children: [
    		//{path:'/', component:ff1},  //这个根路径/是相对的，/代表的其实是/fenzhi1/fen1
    		{path:'fen1child1', component:ff1c1},  //因此fen1child1是/下面的，代表的是/fenzhi1/fen1/fen1child1,页面中链接要写成<router-link to="/fenzhi1/fen1/fen1child1">fen1child1</router-link>
    		{path:'fen1child2', component:ff1c2}
    	]
    },
    {
    	path:'/fenzhi1/fenz',
    	name:'说明页',
    	component:ffz,
    	alias:'/fenzhi1/shuoming'  //通过alias设置一个别名，也就是通过这个设置的路径也可以访问该页面
    },
    {
    	path:'/fenzhi1/fen3',
    	name:'fjieshou',
    	component:ff3,
//  	设置路由的钩子函数
    	beforeEnter:(to, from, next)=>{
    		console.log(to);
    		console.log(from);
    		next();  //跳转动作，不写就不跳转，可以用作验证等也可以有参数如  next(false);
    	}
    },
    {
    	path:'/fenzhi1/fen5/:ip/:name',
    	name:'fjieshou2',
    	component:ff5
    },
    {
    	path:'/fenzhi1/gohome',  //设置一个重定向路由
    	redirect:'/'  //重定向到home页面
    },
    {
    	path:'/fenzhi1/fen6/:ip/:name',
    	name:'fjieshou3',
    	component:ff6
    },
    {
    	path:'fenzhi1/rdc1/:ip/:name',
    	redirect:'/fenzhi1/fen6/:ip/:name'  //设置重定向传参到fen6
    },
    {
    	path:'*',  //设置一个404页面
    	component:ero
    }
  ]
})
