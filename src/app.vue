<template>
	<div id="app">
		<div class="cover"></div>
		<Header />
		<Todo />
		<Footer />
	</div>
</template>
<script type="text/javascript">
	import Header from './todo/header.vue'
	import Todo from './todo/todo.vue'
	import Footer from './todo/footer.jsx'
	export default{
		data(){
			return{
				
			}
		},
		components:{
			Header,
			Todo,
			Footer
		}
	}
</script>
<style type="text/css" lang="stylus" scoped>
	.cover
		position absolute
		top 0
		left 0
		right 0
		bottom 0
		margin auto
		width 100%
		height 100%
		z-index -1
		background rgba(0,0,0,0.1)
</style>