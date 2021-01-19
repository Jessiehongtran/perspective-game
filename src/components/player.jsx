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
                        display: 'block',
                        width: '160px',
                        height: '160px',
                        backgroundImage: `url(${this.props.character})`,
                        backgroundPosition: 'center'
                        // animation: '0.8s steps(20) infinite',
                    }} 
                    className="character"
                />
            </div>
        )
    }
}