import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as actions from '../actions/index'

import { Grid, Row, Col } from 'react-flexbox-grid';
import styles from '!style!css?modules!../styles.css';


import SocialEvents from './social_events/social_events_index'
import ChoresIndex from './chores/chores_index'
import Messages from './messages/messages_index'
import BillsIndex from './bills/bills_index'



class HomeContainer extends React.Component {
  componentWillMount() {
    if (this.props.socialEvents.length <= 0) {
      this.props.actions.fetchEvents();
    }
    debugger
    this.props.actions.fetchGroupMembers();
  }

  render() {
    return (
      <Row>
        <Col md>
            <SocialEvents social_events={ this.props.socialEvents } />
            <ChoresIndex chores={ this.props.chores } group_members={this.props.groupMembers} />
            <BillsIndex bills={ this.props.bills } />
        </Col>
        <Col md>
          <Messages />
      </Col>
      </Row>
    )
  }
}

function mapStateToProps(state) {
  debugger;
  let groupMembers = []
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

  if (state.members.length > 0) {
    debugger;
    groupMembers = state.members.filter(member => {
      return member.group_id === state.session.current_user.group_id
    })
  }

  return {
    groupMembers: groupMembers,
    socialEvents: socialEvents,
    chores: chores,
    bills: bills
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

const componentCreator = connect(mapStateToProps, mapDispatchToProps)
export default componentCreator(HomeContainer)
