import React from 'react';
import './styles/Ribbon.css';

export default class Ribbon extends React.PureComponent {
    render() {
        return (
            <div className={this.props.ribbonStyle}>
                <span>{this.props.text}</span>
            </div>
        )
    }
}