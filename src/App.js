import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Player from './components/player';
import CharSelection from './views/characterSelection';
import Scenario from './views/scenario';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      x: 200,
      y: 180,
      speed: 20,
      step: 1,
      // sprites: [
      //   "https://res.cloudinary.com/dfulxq7so/image/upload/v1611094870/step2_jrj4t4.png",
      //   "https://res.cloudinary.com/dfulxq7so/image/upload/v1611094873/step3_kfd8tl.png",
      //   "https://res.cloudinary.com/dfulxq7so/image/upload/v1611094876/step4_cqta9z.png",
      //   "https://res.cloudinary.com/dfulxq7so/image/upload/v1611094879/step5_lgi44j.png",
      //   "https://res.cloudinary.com/dfulxq7so/image/upload/v1611094866/step1_n1vfge.png",
      //   "https://res.cloudinary.com/dfulxq7so/image/upload/v1611097089/step6_y0xiw4.png",
      //   "https://res.cloudinary.com/dfulxq7so/image/upload/v1611097092/step7_vht0ce.png",
      //   "https://res.cloudinary.com/dfulxq7so/image/upload/v1611097095/step8_mdnfj6.png",
      //   "https://res.cloudinary.com/dfulxq7so/image/upload/v1611097101/step9_h3bdc5.png",
      //   "https://res.cloudinary.com/dfulxq7so/image/upload/v1611097105/step10_t7vklj.png"
      // ],
      spriteInDirection: {
        up: "https://res.cloudinary.com/dfulxq7so/image/upload/v1611355462/Devvy-back_wvx5lx.svg",
        down: "https://res.cloudinary.com/dfulxq7so/image/upload/v1611355466/Devvy-front_piyqpy.svg",
        left: "https://res.cloudinary.com/dfulxq7so/image/upload/v1611355470/Devvy-left_qvhfpj.svg",
        right: "https://res.cloudinary.com/dfulxq7so/image/upload/v1611355474/Devvy-right_wjkh7i.svg"
      },
      sprite: "https://res.cloudinary.com/dfulxq7so/image/upload/v1611355466/Devvy-front_piyqpy.svg"
    }

    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleKeyDown(e){
    const { x, y, speed, step } = this.state;

    if ( this.isInsideRectangle([{x: 120, y: 140}, { x: 220, y: 90}, { x: 280, y: 120}, { x: 180, y: 170}], { x: x, y: y})
      || this.isInsideRectangle([{x: 180, y: 170}, { x: 620, y: -50}, { x: 660, y: -30}, { x: 220, y: 190}], { x: x, y: y})
      ){
      //move right
      if(e.keyCode === 39) { 
        this.setState({
          x: x+ speed,
          y: y+ speed - 10,
          step: step + 1,
          sprite: this.state.spriteInDirection.right
        })
      } 
      //move up
      else if (e.keyCode === 38){
        this.setState({
          y: y- speed + 10,
          x: x + speed ,
          sprite: this.state.spriteInDirection.up
        })
      } 
      //move left
      else if (e.keyCode === 37){
        this.setState({
          x: x- speed,
          y: y- speed + 10,
          step: step - 1,
          sprite: this.state.spriteInDirection.left
        })
      } 
      //move down
      else if (e.keyCode === 40){
        this.setState({
          y: y + speed - 10,
          x: x - speed ,
          sprite: this.state.spriteInDirection.down
        })
      }
    } 
  }

  rectArea(x1, y1, x2, y2, x3, y3, x4, y4){
    return Math.floor(Math.sqrt(Math.pow(x1-x4,2) + Math.pow(y1-y4,2))*Math.sqrt(Math.pow(x3-x4,2) + Math.pow(y3-y4,2)))
  }

  dist(x1, y1, x2, y2){
    return Math.sqrt(Math.pow(x1-x2,2) + Math.pow(y1-y2,2))
  }

  triangArea(x1, y1, x2, y2, x3, y3){
    const a = this.dist(x1, y1, x2, y2)
    const b = this.dist(x1, y1, x3, y3)
    const c = this.dist(x2, y2, x3, y3)
    const p = a + b + c
    const s = p/2
    return Math.floor(Math.sqrt(s*(s-a)*(s-b)*(s-c)))
  }

  isInsideRectangle(rect, target){
    const topLeft = rect[0]
    const topRight = rect[1]
    const bottomRight = rect[2]
    const bottomLeft = rect[3]
    if (  this.triangArea(topLeft.x, topLeft.y, target.x, target.y, bottomLeft.x, bottomRight.y) 
        + this.triangArea(topLeft.x, topLeft.y, target.x, target.y, topRight.x, topRight.y)
        + this.triangArea(topRight.x, topRight.y, target.x, target.y, bottomRight.x, bottomRight.y)
        + this.triangArea(bottomRight.x, bottomRight.y, target.x, target.y, bottomLeft.x, bottomLeft.y) 
        > this.rectArea(topLeft.x, topLeft.y, topRight.x, topRight.y, bottomRight.x, bottomRight.y, bottomLeft.x, bottomLeft.y)
        ) {
          return false
        }
    return true
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
    console.log('test1', this.isInsideRectangle([{x: 120, y: 140}, { x: 220, y: 90}, { x: 200, y: 140}, { x: 160, y: 160}], { x: x, y: y}))
    console.log('test2', this.isInsideRectangle([{x: 160, y: 160}, { x: 620, y: -50}, { x: 660, y: -30}, { x: 220, y: 190}], { x: x, y: y}))

    return (
      <div className="App" tabIndex="0" onKeyDown={this.handleKeyDown}>
        <Switch>
          <Route 
            exact path = "/"
            render = {
              props => {
                return (
                  <CharSelection {...props} />
                )
              }
            }
          />
          <Route 
            exact path = "/scenario/:characterID"
            render = {
              props => {
                return (
                  <Scenario {...props} />
                )
              }
            }
          />
          <Route 
            exact path = "/environment"
            render = {
              props => {
                return (
                  <div style={{backgroundColor: 'blue',  position: 'relative', overflow: 'visible', backgroundImage: 'url(https://res.cloudinary.com/dfulxq7so/image/upload/v1611352318/officeBG_jkywvm.svg)', backgroundSize: 'cover', height: '100vh'}}>
                  <Player x={x} y={y} step={step} character={sprite}/>
                  </div>
                )
              }
            }
          />
        </Switch>
      </div>
    );
  }
}

