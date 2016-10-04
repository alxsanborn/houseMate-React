import React from 'react'
import * as actions from '../../actions/index'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class ChoreNew extends React.Component {
  constructor(props){
    super(props)
     this.newChoreHandler = this.newChoreHandler.bind(this)
  }

   newChoreHandler(event){
     event.preventDefault()
     const newChore = {name: this.refs.name.value, category: "chore"}
     this.props.actions.addEvent(newChore)
   }


render(){
  return (
    <div>
      <form onSubmit={this.newChoreHandler}>
        <label>add new chore: </label>
        <input ref='name' />
        <input type="submit"/>
      </form>
    </div>
  )
}
}
function mapDispatchToProps(dispatch){
  return {actions: bindActionCreators(actions, dispatch)}
}

const componentCreator = connect(null, mapDispatchToProps)
export default componentCreator(ChoreNew);
//module.exports = ChoreNew
