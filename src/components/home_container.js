import React from 'react';
import {connect} from 'react-redux'

import { Grid, Row, Col } from 'react-flexbox-grid';
import styles from '!style!css?modules!../styles.css';


import * as actions from '../actions/index'
import {bindActionCreators} from 'redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


import SocialEvents from './social_events/social_events_index'
import ChoresIndex from './chores/chores_index'
import Messages from './messages/messages_index'
import BillsIndex from './bills/bills_index'


class HomeContainer extends React.Component {
  componentWillMount() {
    if (this.props.socialEvents.length <= 0) {
      this.props.actions.fetchEvents();
    }
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Grid fluid>
            <Col>
              <Row around="md">
                <SocialEvents social_events={ this.props.socialEvents } />
                <ChoresIndex chores={ this.props.chores } />
              </Row>
            </Col>
            <Col>
              <BillsIndex bills={ this.props.bills } />
              <Messages />
            </Col>
          </Grid>
        </div>
      </MuiThemeProvider>
    )
  }
}

 function mapStateToProps(state) {
   debugger;
   let socialEvents = []
   let chores = []
   let bills = []
   if (state.events.length > 0) {
     socialEvents = state.events.filter(event => {
       return event.category === "social"
     })

     chores = state.events.filter(event => {
       return event.category === "chore"
     })

     bills = state.events.filter(event => {
       return event.category === "bill"
     })
   }
   return {socialEvents: socialEvents, chores: chores, bills: bills}
 }

 function mapDispatchToProps(dispatch){
   return {
     actions: bindActionCreators(actions, dispatch)
   }
 }

 const componentCreator = connect(mapStateToProps, mapDispatchToProps)
 export default componentCreator(HomeContainer)
