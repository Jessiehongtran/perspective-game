import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Player from './components/player';
import CharSelection from './views/characterSelection';
import Scenario from './views/scenario';
import Office from './views/office';
import Office2 from './views/office2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowLeft, faArrowDown, faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      x: 440,
      y: 420,
      speed: 20,
      message: "Click on Yang and press key arrows to move",
      dir: "",
      step: 1,
      bgColor: {up: "#F1F1F1", left: "#F1F1F1", down: "#F1F1F1", right: "#F1F1F1" },
      spriteInDirection: {
        up: "https://res.cloudinary.com/dfulxq7so/image/upload/v1611950505/Yang_Back_2x_wfa5l1.png",
        down: "https://res.cloudinary.com/dfulxq7so/image/upload/v1611950509/Yang_Front_2x_j9ad21.png",
        left: "https://res.cloudinary.com/dfulxq7so/image/upload/v1611950538/Yang_RightSide_2x_i223zj.png",
        right: "https://res.cloudinary.com/dfulxq7so/image/upload/v1611950517/Yang_LeftSide_2x_qc1sg5.png"
      },
      sprite: "https://res.cloudinary.com/dfulxq7so/image/upload/v1611950509/Yang_Front_2x_j9ad21.png"
    }

    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleKeyDown(e){
    console.log(e.keyCode)
    const { x, y, speed, step, dir } = this.state;

    if ( 
      // true
      this.isInsideRectangle([{x: 280 + 20, y: 414 -20}, { x: 520 + 20, y: 261 + 20}, { x: 760 - 20, y: 391 + 20}, { x: 500 + 20, y: 565 - 20}], { x: x, y: y})
      || this.isInsideRectangle([{x: 580 + 20, y: 305 - 20}, { x: 780 + 20, y: 200 + 20}, { x: 920 - 20, y: 270 + 20}, { x: 780 + 20, y: 389 - 20}], { x: x, y: y})
      ){
      //move right
      if(e.keyCode === 39) { 
        this.setState({
          x: x+ speed,
          y: y+ speed - 10,
          step: step + 1,
          sprite: this.state.spriteInDirection.right,
          dir: "right",
          bgColor: {
            up: "#F1F1F1",
            left: "#F1F1F1",
            down: "#F1F1F1",
            right: "#38FBDD",
          }
        })
      } 
      //move up
      else if (e.keyCode === 38){
        this.setState({
          y: y- speed + 9,
          x: x + speed ,
          sprite: this.state.spriteInDirection.up,
          dir: "up",
          bgColor: {
            up: "#38FBDD",
            left: "#F1F1F1",
            down: "#F1F1F1",
            right: "#F1F1F1",
          }
        })
      } 
      //move left
      else if (e.keyCode === 37){
        this.setState({
          x: x- speed,
          y: y- speed + 10,
          step: step - 1,
          sprite: this.state.spriteInDirection.left,
          dir: "left",
          bgColor: {
            up: "#F1F1F1",
            left: "#38FBDD",
            down: "#F1F1F1",
            right: "#F1F1F1",
          }
        })
      } 
      //move down
      else if (e.keyCode === 40){
        this.setState({
          y: y + speed - 9,
          x: x - speed ,
          sprite: this.state.spriteInDirection.down,
          dir: "down",
          bgColor: {
            up: "#F1F1F1",
            left: "#F1F1F1",
            down: "#38FBDD",
            right: "#F1F1F1",
          }
        })
      }
    } else {
      if (e.keyCode === 13){
        this.setState({ message: "Hi there!"})
        if (dir === "up"){
          this.setState({
            y : y + 40,
            x : x - 30
          })
        } else if (dir === "down"){
          this.setState({
            y : y - 40,
            x: x + 30
          })
        } else if (dir === "left"){
          this.setState({
            x : x + 40
          })
        } else if (dir === "right"){
          this.setState({
            x : x - 40
          })
        }
      } else {
        alert("out")
        this.setState({ message: "Press ENTER key to go back"})
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

    if (  this.triangArea(topLeft.x, topLeft.y, target.x, target.y, bottomLeft.x, bottomLeft.y) 
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
    const { x, y, step, sprite, bgColor, message } = this.state;
    console.log('x', x, 'y', y)
    console.log( this.isInsideRectangle([{x: 340, y: 454}, { x: 820, y: 190}, { x: 980, y: 170}, { x: 560, y: 555}], { x: x, y: y}))

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
            exact path = "/office2"
            render = {
              props => {
                return (
                  <Office2 {...props} />
                )
              }
            }
          />
          <Route 
            exact path = "/environment"
            render = {
              props => {
                return (
                  <div style={{backgroundColor: 'grey',  position: 'relative', overflow: 'visible', backgroundImage: 'url(https://res.cloudinary.com/dfulxq7so/image/upload/v1611851070/perspectives_officeenviro_wcwl64.png)', backgroundSize: '100%', height: '100vh'}}>
                    {/* <div className="cupboard-left" style={{ width: '25%', left: '6%', top: '35%', position: 'relative' }}>
                      <img src="https://res.cloudinary.com/dfulxq7so/image/upload/v1612315396/perspectives_backdrawers_xhrp3w.svg" />
                    </div>
                    <div className="cupboard-right" style={{ width: '25%', left: '950px', top: '310px', position: 'absolute' }}>
                      <img src="https://res.cloudinary.com/dfulxq7so/image/upload/v1612315422/perspectives_frontdrwaers_dcdc8q.svg" />
                    </div>
                    <div className="table-left" style={{ width: '25%', left: '450px', top: '200px', position: 'absolute' }}>
                      <img src="https://res.cloudinary.com/dfulxq7so/image/upload/v1612315399/perspectives_conferencetable_dwbt6w.svg" />
                    </div>
                    <div className="table-right-1" style={{ width: '15%', left: '1000px', top: '500px', position: 'absolute', display: 'flex' }}>
                      <img src="https://res.cloudinary.com/dfulxq7so/image/upload/v1612315418/perspectives_desk4_ktj66x.svg" />
                    </div>
                    <div className="table-right-2" style={{ width: '15%', left: '850px', top: '600px', position: 'absolute', display: 'flex' }}>
                      <img src="https://res.cloudinary.com/dfulxq7so/image/upload/v1612315418/perspectives_desk4_ktj66x.svg" />
                    </div>
                    <div className="table-right-3" style={{ width: '15%', left: '700px', top: '700px', position: 'absolute', display: 'flex' }}>
                      <img src="https://res.cloudinary.com/dfulxq7so/image/upload/v1612315418/perspectives_desk4_ktj66x.svg" />
                    </div> */}
                    <div className="character-position" style={{ position: 'absolute', left: `${x}px`, top: `${y}px`, border: '1px solid black', width: '2px', height: '2px'}}>
                    </div>
                    <div className="guideline" style={{ position: 'absolute', left: '100px', top: '50px', color: 'white', fontSize: '24px', fontWeight: 'bold'}}>
                      {message}
                    </div>
                    <Player x={x} y={y} step={step} character={sprite}/>
                    <div style={{ position: 'absolute', right: '100px', top: '50px' }}>
                      <button 
                        style={{ border: 'none', borderRadius: '8px', padding: '8px 15px', fontSize: '24px'}}
                        onClick={() => props.history.push('/office2')}
                      >Next</button>
                    </div>
                    <div className="keys" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'absolute', left: '2%', top: '80%'}}>
                      <div className="up" style={{ width: '50px', height: '50px', border: '1px solid black', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '3px', backgroundColor: bgColor.up}}>
                        <FontAwesomeIcon
                          icon={faArrowUp}
                          style={{ fontSize: '24px' }} 
                        />
                      </div>
                      <div style={{ display: 'flex' }}>
                        <div className="left" style={{ width: '50px', height: '50px', border: '1px solid black', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '3px', backgroundColor: bgColor.left}}>
                          <FontAwesomeIcon
                            icon={faArrowLeft}
                            style={{ fontSize: '24px' }} 
                          />
                        </div>
                        <div className="down" style={{ width: '50px', height: '50px', border: '1px solid black', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '3px', backgroundColor: bgColor.down}}>
                          <FontAwesomeIcon
                          icon={faArrowDown}
                          style={{ fontSize: '24px' }} 
                          />
                        </div>
                        <div className="right" style={{ width: '50px', height: '50px', border: '1px solid black', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '3px', backgroundColor: bgColor.right}}>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            style={{ fontSize: '24px' }} 
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }
            }
          />
          <Route 
            exact path = "/office"
            render = {
              props => {
                return (
                  <Office {...props} />
                )
              }
            }
          />
        </Switch>
      </div>
    );
  }
}

