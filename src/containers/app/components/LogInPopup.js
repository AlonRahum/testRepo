import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const customContentStyle = {
    width: '100%',
    maxWidth: 'none',
};

const titleStyle = {
    paddingTop: '10px',
    paddingBottom: '0px',
    fontSize: '20px',
    borderBottom: '1px solid lightgray',
};

const container = {
    marginTop: '-5px',
};

const textFiled = {
    marginTop: '-10px',
}

const signInBtn = {
    textDecoration: 'underline',
}

export default class LogInPopup extends React.PureComponent {

    onCancelClick = () => {
        this.props.toggleOpenState();
    }

    onSubmitClick = () => {
        this.props.toggleOpenState();
    }

    render() {
        return (
            <div>
                <Dialog
                    title="WELCOME BACK!"
                    modal={false}
                    contentStyle={customContentStyle}
                    titleStyle={titleStyle}
                    open={this.props.isOpen}
                    onRequestClose={this.onCancelClick}
                >
                    <div style={container}>
                        <TextField
                            floatingLabelText="Username"
                            hintText="Enter Username"
                            fullWidth={true}
                            style={textFiled}
                        />
                        <TextField
                            floatingLabelText="Password"
                            hintText="Enter Password"
                            type="password"
                            fullWidth={true}
                            style={textFiled}
                        />
                        <br/><br/>
                        <RaisedButton label="LOGIN" fullWidth={true} secondary={true} onClick={this.onSubmitClick}/>
                        <FlatButton style={signInBtn} label="New here? Join Us!" fullWidth={true} onClick={this.onSubmitClick} />
                    </div>
                </Dialog>
            </div>
        );
    }
}