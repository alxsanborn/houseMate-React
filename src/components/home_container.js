import React from 'react';
import { connect } from 'react-redux'

import { Grid, Row, Col } from 'react-flexbox-grid';
import styles from '!style!css?modules!../styles.css';


import * as actions from '../actions/index'
import { bindActionCreators } from 'redux';


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


import SocialEvents from './social_events/social_events_index'
import ChoresIndex from './chores/chores_index'
import Messages from './messages/messages_index'
import BillsIndex from './bills/bills_index'


class HomeContainer extends React.Component {
  componentWillMount() {
    if (this.props.socialEvents.length == 0) {
      this.props.actions.fetchEvents();
    }

    if (this.props.messages.length == 0) {
      this.props.actions.loadMessages();
    }
  }

  render() {
    return (
      <MuiThemeProvider>
      <Row between="md">
        <Col md={3} >
        <SocialEvents social_events={ this.props.socialEvents } />
        <ChoresIndex chores={ this.props.chores } />
        </Col>
        <Col >
        <BillsIndex bills={ this.props.bills } />
        <Messages messages={ this.props.messages }/>
        </Col>
      </Row>
      </MuiThemeProvider>
    )
  }
}

 function mapStateToProps(state) {
   let socialEvents = []
   let chores = []
   let bills = []
   let messages = []
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

    messages = state.messages
  }

  return {
    socialEvents: socialEvents,
    chores: chores,
    bills: bills,
    messages: messages
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

const componentCreator = connect(mapStateToProps, mapDispatchToProps)
export default componentCreator(HomeContainer)
