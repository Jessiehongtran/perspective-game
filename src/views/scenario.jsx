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

        // if ('speechSynthesis' in window) {
        //     // Speech Synthesis supported 🎉
        // }else{
        //      // Speech Synthesis Not Supported 😣
        //      alert("Sorry, your browser doesn't support text to speech!");
        // }

        // var msg = new SpeechSynthesisUtterance();
        // msg.text = "Yang is a software developer that works for a major tech company. She constantly deals with bias at the workplace due to her gender. In meetings, she is always asked to take notes even though there is a project manager and is scrutinized in her presentations compared to her male counterparts.Click the start button to start a normal day in Yang’s work life."
        // window.speechSynthesis.speak(msg);

        for (let i = 0; i < scenarios.length; i ++){
            if (characterID == scenarios[i].character_id){
                const scenario = scenarios[i]
                return (
                    <div className="scenario-container">
                        <div className="scenario-wrapper">
                            <img class="scenario-image" src={scenario.image}/>
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