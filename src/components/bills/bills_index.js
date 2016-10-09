import React from 'react'
// import {connect} from 'react-redux'
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar'
import Checkbox from 'material-ui/Checkbox'
import AddBillForm from './bills_new'

const style = {
  width: 800,
  margin: 10,
  textAlign: 'left',
  display: 'inline-block',
};

export default class BillsIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
     events: []
    }
  }

render(){
  return (
    <div className='bills'>
    <Paper style={style} zDepth={3} >
       <AppBar title="Upcoming Bills" style={{backgroundColor: '#68B6C2'}}
       iconElementRight={<AddBillForm/>}/>
      <ul>
         {this.props.bills.map((event, index) =>
           <Checkbox label={`${event.name} $${event.amount}`}/>)}
      </ul>
      <ul><AddBillForm/></ul>
    </Paper>
    </div>
  )
}
}


// const componentCreator = connect(mapStateToProps)
// export default componentCreator(BillsIndex)
