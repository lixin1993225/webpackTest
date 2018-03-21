import '../asserts/styles/footer.styl'
export default {
	data(){
		return {
			author:"LiZn"
		}
	},
	render(){
		return (
			<div id="footer">
				<span>Written by {this.author}</span>
			</div>
		)
	}
}