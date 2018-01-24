<template>
	<div>
		<h2>路由知识总结</h2>
		<h3>第一节：基本用法</h3>
		<ul>
			<li>首先在src/components/目录下新建一个页面（模块）</li>
			<li>在src/router/index.js中设置新建页面的路径</li>
			<li>以上操作后，可以使用了。</li>
		</ul>
		<br />
		<h3>第二节：路由的三种用法</h3>
		<ul>
			<li>普通用法(当前页面就是路由的最普通用法)</li>
			<li>单页面多路由区域的用法（一个页面中使用多个router-view标签）（HOME页面就是单页面多路由区域的例子）</li>
			<li>子路由的配置和用法（fan1页面就是子路由的例子）</li>
		</ul>
		<br />
		<h3>第三节：传递参数的三种方法</h3>
		<ul>
			<li>使用路由的name属性传参，不常用（home页面里面有例子）</li>
			<li>使用router-link标签的to属性传参，官方推荐（fen1child1页面里有例子）</li>
			<li>使用url传参（fen1child1页面里有例子）</li>
		</ul>
		<br />
		<h3>第四节：重定向</h3>
		<ul>
			<li>在src/router/index.js中routes:[]里直接设置路由path，然后使用redirect设置重定向到哪个页面</li>
			<li>导航栏的返回首页按钮就是重定向的例子,注意，使用重定向跳转的页面地址栏的url显示就是跳转的那个页面的路径</li>
			<li>重定向跳转同时传参例子，请见fen1child1页面的“使用重定向的url传参”按钮</li>
			<li>使用alias别名，和上面的区别就是使用alias跳转后的页面地址栏里显示的url是alias设置的别名</li>
		</ul>
		<br />
		<h3>第五节：路径切换时的动画效果</h3>
		<ul>
			<li>用transition标签来包裹要被使用动画的router-view标签，然后通过CSS设置动画效果</li>
			<li>transition标签里的属性name和CSS里的类名相对应</li>
			<li>transition标签里的属性mode，是用来设置多个组件动画时的顺序的</li>
			<li>src/App.vue页面里有动画效果的例子</li>
		</ul>
		<br />
		<h3>第六节：路由设置中的mode属性</h3>
		<ul>
			<li>在src/router/index.js文件的export default new Router({})里加mode:'history'</li>
			<li>默认不写mode时或者写mode:'hash'，地址栏里是#/加路由的形式，而加了mode属性后，地址栏里是正常的形式</li>
		</ul>
		<br />
		<h3>第七节：404页面的设置</h3>
		<ul>
			<li>建立一个新页面，设置路由的path为星号</li>
			<li>fen1child2页面里有一个测试404页面的按钮</li>
		</ul>
		<br />
		<h3>第八节：路由的钩子函数</h3>
		<ul>
			<li>路由的钩子函数可以写在两个地方，一个是设置路由的index.js页里，一个是写在具体模板页面里</li>
			<li>写在路由设置页面index.js里的只有一个钩子，beforeEnter （index.js里fen3页面的路由有例子）</li>
			<li>写在模板页面里的钩子有两个，beforeRouteEnter和beforeRouteLeave （/src/components/fenzhi1/fen5.vue里有详细例子）</li>
		</ul>
		<br />
		<h3>第九节：编程式导航</h3>
		<ul>
			<li>编程式导航就是使用js来完成路由的跳转</li>
			<li>src/App.vue里的button按钮是前进和后退和跳转到特定页的例子</li>
		</ul>
	</div>
</template>

<script>
</script>

<style>
</style>