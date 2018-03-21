<template>
	<section>
		<input 
		type="text"
		name=""
		class="addinf"
		autofocus="autofocus"
		@keyup.enter="addtodo" 
		/>
		<item 
		v-for="todo in filteredTodos"
		:key="todo.id"
		:todo="todo" 
		@del="deleteTodo"
		/>
		<tabs 
		:filter="filter"
		:todos="todos"
		@toggle="toggleFilter"
		@clearAllCompleted="clearAllCompleted"
		/>
	</section>
</template>
<script type="text/javascript">
	import Item from './items.vue'
	import Tabs from './tab.vue'
	let id = 0
	export default{
		data(){
			return {
				// todo:{
				// 	id:0,
				// 	content:'this is todo',
				// 	completed:false
				// },
				todos:[],
				filter:'all'
			}
		},
		computed:{
			filteredTodos(){
				if(this.filter=='all'){
					return this.todos
				}else{
					const completed = this.filter =='completed'//这里是一举两得方式，既可以判断完成的也可以判断没有完成的，nice
					return this.todos.filter(todo=>completed===todo.completed)				
				}
			}
		},
		methods:{
			addtodo(e){
				this.todos.unshift({
					id:id++,
					content:e.target.value.trim(),
					completed:false
				})
				e.target.value=''
			},
			deleteTodo(id){
				this.todos.splice(this.todos.findIndex(item=>item.id===id),1)
			},
			toggleFilter(state){
				this.filter = state
			},
			clearAllCompleted(){
				this.todos = this.todos.filter(todo=>!todo.completed)
			}
		},
		components:{
			Item,
			Tabs
		}
	}
</script>
<style type="text/css" lang="stylus" scoped>
	section
		width 700px
		margin 0 auto
		.addinf
			width 700px
			height 50px
			border 1px solid #ccc
			outline none
</style>