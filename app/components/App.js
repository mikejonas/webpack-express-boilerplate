import React from 'react';
import request from 'superagent';
import _map from 'lodash/map';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {something: true};
  }

  componentDidMount() {

  }


  render() {
    return (
      <div className='container'>
        Hello! 💩
      </div>
    );
  }
}
