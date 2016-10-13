import React from 'react'
// import {connect} from 'react-redux'
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar'
import Checkbox from 'material-ui/Checkbox'
import AddBillForm from './bills_new'

import BillsChart from './bills_chart.js'
import {Tabs, Tab} from 'material-ui/Tabs';

export default class BillsIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bills: [],
      slideIndex: 0
    }
    this.handleChange = this.handleChange.bind(this)
  }

  render() {
    return (
      <div className='bills'>
        <Paper zDepth={ 3 }>


          <AddBillForm/>
        </Paper>
      </div>
    )
  }

  handleChange(value) {
    if (Number.isInteger(value)){
      this.setState({
        slideIndex: event.target.value,
      });
    }
  };

  render() {

    return (
      <div className='bills'>
        <Paper zDepth={ 3 }>

          <AppBar
            title="Bills"
            style={{backgroundColor: '#68B6C2'}}
            iconElementRight={<AddBillForm/>}/>

          <Tabs
            onChange={this.handleChange}
            value={this.state.slideIndex}
            tabItemContainerStyle={{backgroundColor:'#b3dae0', color: 'black'}}
            inkBarStyle={{backgroundColor:"#FFC107"}}
         >
            <Tab label="Upcoming Bills" value={0}>
              <div>
                <ul>
                  { this.props.bills.map((event, index) => <Checkbox label={ `${event.name} $${event.amount}` } />) }
                </ul>
              </div>

            </Tab>
            <Tab label="Bill Analysis" value={1}>
              <BillsChart
                bills={this.props.bills}
              />
            </Tab>
         </Tabs>
        </Paper>
      </div>
    )
  }


}



// const componentCreator = connect(mapStateToProps)
// export default componentCreator(BillsIndex)
