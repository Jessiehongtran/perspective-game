import React from 'react';
import '../styles/player.css'

export default class Player extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    render(){
        console.log('x', this.props.x, 'y', this.props.y)

        return (
            <div className="character-container">
                <img 
                    style={{
                        top: `${this.props.y}px`, 
                        left: `${this.props.x}px`, 
                        position: 'absolute',
                        width: '100px',
                        height: '130px',
                        border: '1px solid black',
                        borderRadius: '50%'
                    }} 
                    src={this.props.character}
                />
            </div>
        )
    }
}