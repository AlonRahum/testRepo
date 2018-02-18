import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import ItemsContainer from './ItemsContainer';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 600,
  },
  slide: {
    padding: 2,
  },
};

export default class SwipeableTabs extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };

  render() {
    return (
      <div>
        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
        >
          <Tab label="HOT" value={0} />
          <Tab label="Near Me" value={1} />
          <Tab label="Recent" value={2} />
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          <div style={styles.slide}>
            <ItemsContainer itemStyle="square" numItems={15}/> 
          </div>
          <div style={styles.slide}>
            <ItemsContainer itemStyle="square" numItems={15}/>
          </div>
          <div style={styles.slide}>
            <ItemsContainer itemStyle="square" numItems={15}/>
          </div>
        </SwipeableViews>
      </div>
    );
  }
}