import React from 'react';
import '../styles/player.css'

export default class Player extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    render(){

        return (
            <div>
                <img 
                    style={{
                        top: `${this.props.y}px`, 
                        left: `${this.props.x}px`, 
                        position: 'absolute',
                        width: '100px',
                        height: '100px',
                    }} 
                    src={this.props.character}
                />
            </div>
        )
    }
}