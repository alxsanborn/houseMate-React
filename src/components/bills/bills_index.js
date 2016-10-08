import React from 'react'
import {connect} from 'react-redux'
import Paper from 'material-ui/Paper';
import Checkbox from 'material-ui/Checkbox'
import AppBar from 'material-ui/AppBar';
import BillNew from './bills_new'
import {red300, red50} from 'material-ui/styles/colors';


const style = {
  width: 800,
  margin: 10,
  textAlign: 'left',
  display: 'inline-block',
};

 class Bills extends React.Component {

   render(){
     return (
       <div className='bills'>
         <Paper
          style={style}
          zDepth={3} >
            <AppBar
              title="Upcoming Bills"
              style={{backgroundColor: '#68B6C2'}}/>
           <ul>
              {this.props.bills.map((event, index) =>
                <Checkbox label={event.name}/>)}
           </ul>
           <ul><BillNew /></ul>
         </Paper>
       </div>
     )
   }
 }



 export default Bills
