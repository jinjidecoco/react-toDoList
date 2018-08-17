import React,{Component} from 'react'
import Item from './item.js' 

class  Todo extends Component {
	constructor(props){
		super(props);
		this.state={
			itemList:[],
	    }
	}
	handleKeyUp(e){
	  if(e.keyCode==13){
		let value =e.target.value;
		if(!value) return false;
		let newItem ={
			name:value,
			isFinished:false
		}
		this.state.itemList.push(newItem);
		this.setState({itemList:this.state.itemList});
		e.target.value=''
	 }
	}
	changeStates(index,isDone){
		this.state.itemList[index].isFinished = isDone
		this.setState({
			itemList:this.state.itemList
		})
	}
	deleteItem(index){
		this.state.itemList.splice(index,1);
		this.setState({
			itemList:this.state.itemList
		})

	}
	render(){
		//全部
		let totalCount = this.state.itemList.length || 0 ;
		//过滤 已完成
		let doneCount =this.state.itemList.filter((item)=>
			 item.isFinished
		).length || 0
        
		let isShow = this.state.itemList.length>0? 'show':''

		return(
			<div className='container'>
			   <h1>任务列表</h1>	
			   <input type="text" autoFocus   onKeyUp={(e)=>{this.handleKeyUp(e)}} className='input'  placeholder='添加点任务吧(回车提交)' /> 
			   <ul>
			       {this.state.itemList.map((item,index)=>{
			       	  return <Item  task={item} id={index} key={index} isFinished={item.isFinished}
                      changeState ={this.changeStates.bind(this)} deleteItem={this.deleteItem.bind(this)}
			       	  />
			        })}
			   </ul>	
			   <div className={'footer ' + isShow } >
			       共有<span className='yellow'>{totalCount}</span>件任务, 
			       已完成<span className='green'>{doneCount}</span>件
			   </div>
			</div>
		)	
	}
}
export default Todo
