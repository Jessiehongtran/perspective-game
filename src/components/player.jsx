import React from 'react';

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
                        width: '160px',
                        height: '160px'
                    }} 
                    src={this.props.character}
                />
            </div>
        )
    }
}