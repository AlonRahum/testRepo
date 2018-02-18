
import React from 'react';
import Ribbon from './Ribbon';
import './styles/Item.css';

export default class Item extends React.PureComponent {
    render() {
        return (
            <div className={this.props.itemStyle}>
                <Ribbon text='HOT' ribbonStyle={'ribbon' + (this.props.itemIndex % 4 + 1)}/>
                <img className='barImg' src={this.props.imgSrc} alt=""/>
            </div>
        )
    }
}