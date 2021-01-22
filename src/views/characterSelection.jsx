import React from 'react';
import { characters } from '../data/characters';
import '../styles/characterSelection.scss'

export default class CharSelection extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return (
            <div className="selection-container">
                <div className="selection-wrapper">
                    <h3>Who do you choose to be?</h3>
                    <div className="characters">
                        {characters.map(eachChar => 
                            <div className="each-character">
                                <img src={eachChar.cha_img} className="cha-img"/>
                                <div className="cha-title">{eachChar.cha_title}</div>
                                <div className="cha-name" onClick={() => this.props.history.push(`scenario/${eachChar.id}`)}>{eachChar.cha_name}</div>
                            </div>)}
                    </div>
                </div>
            </div>
        )
    }
}