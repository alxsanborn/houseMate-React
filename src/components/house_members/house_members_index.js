import React from 'react'
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';

import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

import Call from 'material-ui/svg-icons/communication/call'
import MailOutline from 'material-ui/svg-icons/communication/mail-outline'

const style = {
  width: 560,
  textAlign: 'left',
  display: 'inline-block',
};

const avatarStyle = {
  backgroundColor: '#b3dae0'
};

export default class ListExampleNested extends React.Component {

  state = {
    open: false,
  };

  handleNestedListToggle = (item) => {
    this.setState({
      open: item.state.open,
    });
  };

  render() {
    return (
      <div className='house-members'>
        <Paper style={ style } zDepth={ 3 }>
        <AppBar title="Your House" style={ { backgroundColor: '#68B6C2' } }/>
          <List>
            <ListItem
              primaryText="Alice Kallaugher"
              leftAvatar={
                <Avatar
                  style={avatarStyle}
                >
                  AK
                </Avatar>}
              initiallyOpen={false}
              primaryTogglesNestedList={true}
              nestedItems={[
                <ListItem
                  key={1}
                  leftIcon={<Call />}
                  primaryText="410-555-5555"
                />,
                <ListItem
                  key={2}
                  leftIcon={<MailOutline />}
                  primaryText="alice_k@gmail.com"
                />,
              ]}
            />
            <ListItem
              primaryText="Gentian Bardhoshi"
              leftAvatar={
                <Avatar
                  style={avatarStyle}
                >
                  GB
                </Avatar>}
              initiallyOpen={false}
              primaryTogglesNestedList={true}
              nestedItems={[
                <ListItem
                  key={1}
                  leftIcon={<Call />}
                  primaryText="410-555-5555"
                />,
                <ListItem
                  key={2}
                  leftIcon={<MailOutline />}
                  primaryText="gentian_b@gmail.com"
                />,
              ]}
            />
            <ListItem
              primaryText="Alex Sanborn"
              leftAvatar={
                <Avatar
                  style={avatarStyle}
                >
                  AS
                </Avatar>}
              initiallyOpen={false}
              primaryTogglesNestedList={true}
              nestedItems={[
                <ListItem
                  key={1}
                  leftIcon={<Call />}
                  primaryText="410-555-5555"
                />,
                <ListItem
                  key={2}
                  leftIcon={<MailOutline />}
                  primaryText="alex_s@gmail.com"
                />,
              ]}
            />
            </List>
          </Paper>
      </div>
    );
  }
}
