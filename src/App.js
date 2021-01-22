import React from 'react';
import './App.css';
import Player from './components/player';
import CharSelection from './views/characterSelection';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      x: 100,
      y: 100,
      speed: 20,
      step: 1,
      sprites: [
        "https://res.cloudinary.com/dfulxq7so/image/upload/v1611094870/step2_jrj4t4.png",
        "https://res.cloudinary.com/dfulxq7so/image/upload/v1611094873/step3_kfd8tl.png",
        "https://res.cloudinary.com/dfulxq7so/image/upload/v1611094876/step4_cqta9z.png",
        "https://res.cloudinary.com/dfulxq7so/image/upload/v1611094879/step5_lgi44j.png",
        "https://res.cloudinary.com/dfulxq7so/image/upload/v1611094866/step1_n1vfge.png",
        "https://res.cloudinary.com/dfulxq7so/image/upload/v1611097089/step6_y0xiw4.png",
        "https://res.cloudinary.com/dfulxq7so/image/upload/v1611097092/step7_vht0ce.png",
        "https://res.cloudinary.com/dfulxq7so/image/upload/v1611097095/step8_mdnfj6.png",
        "https://res.cloudinary.com/dfulxq7so/image/upload/v1611097101/step9_h3bdc5.png",
        "https://res.cloudinary.com/dfulxq7so/image/upload/v1611097105/step10_t7vklj.png"
      ],
      sprite: "https://res.cloudinary.com/dfulxq7so/image/upload/v1611094866/step1_n1vfge.png"
    }

    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleKeyDown(e){
    const { x, y, speed, step } = this.state;
    if(e.keyCode === 39) { 
      this.setState({
        x: x+ speed,
        step: step + 1,
        sprite: this.getSprite()
      })
    } else if (e.keyCode === 38){
      this.setState({y: y- speed})
    } else if (e.keyCode === 37){
      this.setState({
        x: x- speed,
        step: step - 1
      })
    } else if (e.keyCode === 40){
      this.setState({y: y+ speed})
    }
  }

  getSprite(){
    const { sprites } = this.state;
    const sprite = sprites.splice(0,1);
    sprites.push(sprite)
    this.setState({ sprites: sprites })
    console.log('sprites', sprites)
    return sprite
  }

  render(){
    const { x, y, step, sprite } = this.state;

    return (
      <div className="App" tabIndex="0" onKeyDown={this.handleKeyDown}>
        {/* <Player x={x} y={y} step={step} character={sprite}/> */}
        <CharSelection />
      </div>
    );
  }
}

