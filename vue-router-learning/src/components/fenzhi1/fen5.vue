<template>
	<div>
		<h2>这里是fen5页面</h2>
		<p>接收到的从fen1child1页面用url传过来的值：</p>
		<p>姓名:{{$route.params.name}}</p>
		<p>IP:{{$route.params.ip}}</p>
	</div>
</template>

<script>
	export default{
		beforeRouteEnter:(to, from, next) => {
			console.log(to);
			console.log(from);
			console.log("准备进入fen5页面");
			next(true);
		},
		beforeRouteLeave:(to, from, next) => {
			console.log(to);
			console.log(from);
			console.log("准备离开fen5页面");
			next(true);
		}
	}
</script>

<style>
</style>