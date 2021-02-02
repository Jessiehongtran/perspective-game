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
            YangText: "",
            messages: [
                {
                    name: "Blake",
                    text: "What's up Yang, how are you?",
                    bgColor: "pink",
                    color: "black"
                },
                {
                    name: "Yang",
                    text: "",
                    bgColor: "blue",
                    color: "white"
                },
                {
                    name: "Jay",
                    text: "So today we will talk about...",
                    bgColor: "white",
                    color: "black"
                },
                {
                    name: "Yang",
                    text: "",
                    bgColor: "blue",
                    color: "white"
                },
            ]
        }
        this.addMessage = this.addMessage.bind(this)
    }

    getMessageFlow(arr){
        for (let i =0; i< arr.length; i++){
            if (arr[i].text.length == 0){
                return arr.slice(0, i)
            }
        }
        return arr
    }

    updateTextLatest(arr, text){
        for (let i = 0; i < arr.length; i++){
            if (arr[i].text.length === 0){
                arr[i].text = text
                return arr
            }
        }
    }

    updateMessage(e){
        this.setState({ YangText: e.target.value })
    }

    addMessage(e){
        this.setState({
            messages: this.updateTextLatest(this.state.messages, this.state.YangText),
            YangText: ""
        })

    }

    onEnterPress = (e) => {
        if(e.keyCode == 13 && e.shiftKey == false) {
          e.preventDefault();
          this.addMessage()
        }
      }

    render(){
        const { x, y } = this.state;
        console.log('props in office', this.props)

        return (
            <div style={{ display: 'flex' }}>
                <div className="office-input" style={{ width: '80%'}}>
                    <div className="office" style={{ width: '100%', height: '80vh' }}>
                        <img style={{ width: '100%', height: '100%' }} src="https://res.cloudinary.com/dfulxq7so/image/upload/v1612206985/meeting_vgpqtu.png"/>
                        <Player x={x} y={y} step={1} character="https://res.cloudinary.com/dfulxq7so/image/upload/v1611950509/Yang_Front_2x_j9ad21.png" />
                    </div>
                    <div className="userInput" style={{ backgroundColor: 'white', border: '2px solid grey', height: '20vh', display: 'flex', width: '100%', justifyContent: 'flex-start'}}>
                        <div className="userName">
                            Yang: 
                        </div>
                        <form style={{ width: '95%', height: '20vh' }}> 
                            <textarea 
                                placeholder="..."
                                style={{ border: 'none', width: '100%', height: '100%', outline: 'none', paddingLeft: '10px'}}
                                onChange={e => this.updateMessage(e)}
                                onKeyDown={this.onEnterPress}
                                value={this.state.YangText}
                            >
                            </textarea>
                            <button type="submit" style={{display: 'none'}} ></button>
                        </form>
                    </div>
                </div>
                <div className="chatbox" style={{ width: '400px', backgroundColor: 'silver', height: '100vh'}}>
                    <Chat messages={this.state.messages}/>
                </div>
            </div>
        )
    }
}

