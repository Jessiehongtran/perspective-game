import React from 'react';
import Player from '../components/player';
import Chat from '../components/chat';

export default class Office extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            x: 20,
            y: -220,
            speed: 20,
            dir: "",
            step: 1,
        }
    }

    render(){
        const { x, y } = this.state;

        return (
            <div style={{ display: 'flex' }}>
                <div className="office-input" style={{ width: '80%'}}>
                    <div className="office" style={{ width: '100%', height: '80vh' }}>
                        <img style={{ width: '100%', height: '100%' }} src="https://res.cloudinary.com/dfulxq7so/image/upload/v1611698126/meetGuys_eg5wtf.png"/>
                        <Player x={x} y={y} step={1} character="https://res.cloudinary.com/dfulxq7so/image/upload/v1611355474/Devvy-right_wjkh7i.svg" />
                    </div>
                    <div className="userInput" style={{ backgroundColor: 'white', border: '2px solid grey', height: '20vh', display: 'flex', width: '100%', justifyContent: 'flex-start'}}>
                        <div className="userName">
                            Yang: 
                        </div>
                        <textarea 
                            placeholder="..."
                            style={{ border: 'none', width: '100%', outline: 'none', paddingLeft: '10px'}}
                        >
                        </textarea>
                    </div>
                </div>
                <div className="chatbox" style={{ width: '400px', backgroundColor: 'silver', height: '100vh'}}>
                    <Chat />
                </div>
            </div>
        )
    }
}