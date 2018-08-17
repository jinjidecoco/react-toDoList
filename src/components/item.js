import React,{Component} from 'react'

class Item extends  Component {

	constructor(props){
		super(props)
	}
	handleChange(e){
		let isFinished=!this.props.isFinished;
		this.props.changeState(this.props.id,isFinished,)
	}
	handledelete(){
		this.props.deleteItem(this.props.id);
	}
	render(){
		let content =this.props.isFinished ? 'content':''
		return(
			<li className='item' >
			    <span>{this.props.id + 1}.</span>
                 <input type='checkbox' checked={this.props.isFinishxd} 
                 className='checkbox' onChange={this.handleChange.bind(this)} />
                 <span className={content}>{this.props.task.name}</span>
                 <span className='delete' onClick ={this.handledelete.bind(this)}> x </span>
			</li>
		)
	}

}
export default Item 