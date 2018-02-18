import React from 'react';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import './styles/Header.css'

export default class Header extends React.PureComponent {

    render() {
        return (
            <AppBar id='HeaderCon'
                style={{
                    height: '55px',
                }}
                title='CHEERS'
                iconElementRight={<RaisedButton secondary={true} label="SIGN IN"  style={{ marginTop: '5px'}}/>}
                onLeftIconButtonTouchTap={this.props.onMenuClick}
            />
        );
    }
}