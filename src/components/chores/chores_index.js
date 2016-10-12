import React from 'react'
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper';
import Checkbox from 'material-ui/Checkbox'
import AddChoreForm from './chores_new'
import AppBar from 'material-ui/AppBar';
import * as actions from '../../actions/index'
import { bindActionCreators } from 'redux'
import RaisedButton from 'material-ui/RaisedButton'


class ChoresIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      chores: []
    }
    this.deleteChore = this.deleteChore.bind(this)
    this.selectChore = this.selectChore.bind(this)
  }

  handleStatus(status) {
    if (status === 'pending') {
      return 'complete'
    } else {
      return 'pending'
    }
  }

  selectChore(event) {
    const completeChore = {
      id: this.props.chores[event.target.id].id,
      name: this.props.chores[event.target.id].name,
      category: 'chore',
      status: this.handleStatus(this.props.chores[event.target.id].status)
    }
    this.props.actions.editEvent(completeChore)
  }

  deleteChore(event) {
    let choresToDelete = []
    choresToDelete = this.props.chores.filter(chore => {
      return chore.status === 'complete'
    })
    choresToDelete.forEach((chore) => this.props.actions.deleteEvent(chore.id))

  }

  render() {

    return (
      <div className='chores'>
        <Paper zDepth={ 3 }>

          <AppBar
          title="Upcoming Chores"
          style={ { backgroundColor: '#68B6C2' } }
          iconElementRight={ <AddChoreForm/> }
          />

          <ul>
            { this.props.chores.map( (chore, index) =>
              <div>
                <Checkbox
                label={ chore.name }
                id={ index }
                checked={ chore.status === 'complete' }
                onClick={ this.selectChore } />
              </div>
            )}
          </ul>

          <RaisedButton label="Remove completed chores" onTouchTap={ this.deleteChore } />
        </Paper>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

const componentCreator = connect(null, mapDispatchToProps)
export default componentCreator(ChoresIndex);
