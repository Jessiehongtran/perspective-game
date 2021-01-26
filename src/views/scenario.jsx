import React from 'react';
import { scenarios } from '../data/scenarios';
import '../styles/scenario.scss'

export default class Scenario extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        const characterID = this.props.match.params.characterID
        console.log('props in scenario', this.props)
        for (let i = 0; i < scenarios.length; i ++){
            if (characterID == scenarios[i].character_id){
                const scenario = scenarios[i]
                return (
                    <div className="scenario-container">
                        <div className="scenario-wrapper">
                            <img src={scenario.image}/>
                            <div className="content">
                                <div className="character_name">
                                    {scenario.character_name}
                                </div>
                                <div className="description">
                                    {scenario.description}
                                </div>
                                <div className="command">
                                    {scenario.command}
                                </div>
                                <button className="start-btn" onClick={() => this.props.history.push('/environment')}>Start</button>
                            </div>
                        </div>
                    </div>
                )
            }
        }
    }
}