import React from 'react';
import Item from './Item';
import './styles/ItemsContainer.css';
import bar1 from '../../../images/bars/BAR1.jpg';
import bar2 from '../../../images/bars/BAR2.jpg';
import bar3 from '../../../images/bars/BAR3.jpg';
import bar4 from '../../../images/bars/BAR4.jpg';
import bar5 from '../../../images/bars/BAR5.jpg';
import bar6 from '../../../images/bars/BAR6.jpg';
import bar7 from '../../../images/bars/BAR7.jpg';
import bar8 from '../../../images/bars/BAR8.jpg';
import bar9 from '../../../images/bars/BAR9.jpg';
import bar10 from '../../../images/bars/BAR10.jpg';
import bar11 from '../../../images/bars/BAR11.jpg';
import bar12 from '../../../images/bars/BAR12.jpg';
import bar13 from '../../../images/bars/BAR13.jpg';
import bar14 from '../../../images/bars/BAR14.jpg';
import bar15 from '../../../images/bars/BAR15.jpg';

export default class ItemsContainer extends React.PureComponent {

    constructor() {
        super();
        this.images = [bar1, bar2, bar3, bar4, bar5, bar6, bar7, bar8, bar9, bar10,
                       bar11, bar12, bar13, bar14, bar15];
    }

    componentWillMount() {
        if (this.items) {
            return
        }
        this.items = [];
        let rand;
        for (let i = 0; i < this.props.numItems; i++) {
            rand = Math.floor(Math.random() * (this.images.length - 1)); 
            this.items.push(<Item key={i} itemIndex={i} itemStyle={this.props.itemStyle} imgSrc={this.images[rand]}/>);
        }
    }

    render() {
        return (
            <div className="itemsCon">
                {this.items}
            </div>
        )
    }
}