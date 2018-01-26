<template>
  <div id="app">
    <img src="./assets/logo.png">
    <br />
    <router-link to="/" class="btn1">HOME</router-link>
    <router-link to="/fenzhi1/fen1" class="btn1">fen1</router-link>  <!--to属性的值对应router/index.js文件中设置好的路由路径-->
    <router-link to="/fenzhi1/fenz" class="btn1">路径知识总结</router-link>
    <router-link to="/fenzhi1/gohome" class="btn1">返回首页</router-link>
    <br />
    <br />
    <button @click="goBack" class="btn2">后退</button>
    <button @click="goGo" class="btn2">前进</button>
    <button @click="goShuo">跳转到说明页面</button>
    <br />
    <hr />
    <p>路由的name值：{{$route.name}}</p>  <!--可以取到src/router/index.js中routes:[]里路由的name值-->
    <hr />
    <transition name="fade" mode="out-in">  <!--使用transition标签包裹来实现路由跳转的动画效果-->
    	<router-view></router-view>
    </transition>
    <router-view name="fff2"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
  	goBack(){  //vue2.0以后可以这样写，以前是goBack:function(){
  		this.$router.go(-1);
  	},
  	goGo(){
  		this.$router.go(+1);
  	},
  	goShuo(){
  		this.$router.push('/fenzhi1/fenz');  //参数写页面的path
  	}
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.btn1{
	border: 1px solid #e9e9e9;
  color: #5c6b77;
  font-weight: 600;
	border-radius: 5px;
	padding: 15px;
	text-decoration: none;
	position: relative;
}
.btn1:hover{
	background-color: #f7f7f7;
}
.btn1:active{
	top: 1px;
	left: 1px;
}

/*设置路由切换时的动画效果 .fade和transition标签里的name属性的值对应*/
.fade-enter {  /*进入前的状态*/
  opacity:0;
}
.fade-leave{  /*离开前的状态*/
  opacity:1;
}
.fade-enter-active{  /*进入过程*/
  transition:opacity .5s;
}
.fade-leave-active{  /*离开过程*/
  opacity:0;
  transition:opacity .5s;
}
</style>
