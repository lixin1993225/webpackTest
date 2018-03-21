<template>
	<div class="helper">
		<span class="left">{{returnUnFinishTodos}} items left</span>
		<span class="tabs">
			<span
			v-for="state in states"
			:key="state"
			:class="[state,filter===state?'active':'']"
			@click="toggleFilter(state)">
				{{state}}
			</span>
		</span>
		<span class="clear" @click="clearAllCompleted">Clear Completed</span>
	</div>
</template>
<script type="text/javascript">
	export default {
		props:{
			filter:{
				type:String,
				required:true
			},
			todos:{
				type:Array,
				required:true
			}
		},
		data(){
			return {
				states:['all','actives','completed']
			}
		},
		computed:{
			returnUnFinishTodos(){
				return this.todos.filter(todo=>!todo.completed).length
			}
		},
		methods:{
			toggleFilter(state){
				this.$emit('toggle',state)
			},
			clearAllCompleted(){
				this.$emit('clearAllCompleted')
			}
		}
	}
</script>
<style type="text/css" lang="stylus" scoped>
    .helper
        width 100%
        height 40px
        line-height 40px
        margin 0 auto 
        background #fff
        text-indent 10px
        .left
            float left
        .tabs
            margin-left 100px
            span 
                padding 0 5px
                margin 0 5px
                cursor pointer
            .actived
                border 1px solid #000000

        .active
        	border 1px solid red
        .clear
            float right
            margin-right  10px
</style>