import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/index';
import {browserHistory} from 'redux';
import ChoresIndex from './chores_index'

 class ChorePage extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
       chore: Object.assign({}, this.props.chore),
     };
   }

  componentWillReceiveProps(nextProps) {
    if (this.props.chore.id != nextProps.chore.id) {
      this.setState({chore: Object.assign({}, nextProps.chore)});
    }
    this.setState({saving: false, isEditing: false});
  }

  selectChore(){
  debugger
  const completeChore = {
    id: this.refs.chore.props.id,
    name: this.refs.chore.props.label,
    category: 'chore',
    status: "complete"
    }
  //  debugger
  this.props.actions.completeEvent(completeChore)
  }

  // move to index
  // deleteChore(event) {
  //   this.props.actions.deleteChore(this.state.chore)
  // }

   render() {
     return (
        <div>
         <Checkbox label={this.props.chore.name} checked={this.props.chore.status === 'complete'} onCheck={this.selectChore.bind(this)} withRef={true} ref={`chore`}/>
        </div>
     );
   }
 }

function getChoreById(chores, id) {
  let chore = chores.find(chore => chore.id == id)
  return Object.assign({}, chore)
}

 function mapStateToProps(state, ownProps) {
   let chore = {name: '', status: ''};
   const choreId = ownProps.params.id;
   if (choreId && state.chores.length > 0) {
     chore = getChoreById(state.chores, ownProps.params.id);
   }
      return {chore: chore};
 }

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(choreActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ChorePage);
