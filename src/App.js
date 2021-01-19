import React from 'react';
import './App.css';
import Player from './components/player';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      x: 100,
      y: 100,
      speed: 20
    }

    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleKeyDown(e){
    const { x, y, speed } = this.state;
    if(e.keyCode === 39) { 
      this.setState({x: x+ speed})
    } else if (e.keyCode === 38){
      this.setState({y: y- speed})
    } else if (e.keyCode === 37){
      this.setState({x: x- speed})
    } else if (e.keyCode === 40){
      this.setState({y: y+ speed})
    }
  }

  render(){
    const { x, y } = this.state;

    return (
      <div className="App" tabIndex="0" onKeyDown={this.handleKeyDown}>
        <Player x={x} y={y} character="https://res.cloudinary.com/dfulxq7so/image/upload/v1611083447/blackmale_avatar_ulodot.png"/>
      </div>
    );
  }
}

