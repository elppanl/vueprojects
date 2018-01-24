<template>
	<div>
		<hr />
		<h3>这里是fen1的第一个孩子fen1child1</h3>
		<!--使用router-link标签的to属性传值注意：to前要加冒号，name和路径的name值对应-->
		<router-link :to="{name:'fjieshou', params:{id:'张亮', key:12}}" class="btn1">使用router-link标签传参</router-link>
		<router-link to="/fenzhi1/fen5/198/zhangliang" class="btn1">使用url传参</router-link>
		<router-link to="/fenzhi1/fen6/220/zhangming" class="btn1">使用重定向的url传参</router-link>
	</div>
</template>

<script>
</script>

<style>
</style>