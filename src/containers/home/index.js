import React from 'react';
import SwipeableTabs from './components/SwipeableTabs';
import Crousel from './components/Crousel';

export default class Home extends React.PureComponent {

    render() {
        return (
            <div className='homeCon'>
                <Crousel/>
                <SwipeableTabs/>
            </div>
        );
    }
}
