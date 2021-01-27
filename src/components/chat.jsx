import React from 'react';

export default class Chat extends React.Component {
    constructor(props){
        super(props);
        this.state = {
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
                    text: "So today we will talk about",
                    bgColor: "white",
                    color: "black"
                }
            ]
        }
    }

    getMessageFlow(arr){
        for (let i =0; i< arr.length; i++){
            if (arr[i].text.length == 0){
                return arr.slice(0, i)
            }
        }
        return arr
    }

    render(){

        const messagesToShow = this.getMessageFlow(this.props.messages)
        console.log('props in Chat', this.props)

        return (
            <div style={{ padding: "20px" }}>
                {messagesToShow.map(mess => 
                    mess.text.length > 0
                    ? <div className="each_message" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', margin: '10px 0'}}>
                            <div className="name" style={{ color: '#3D3D3D', paddingLeft: '5px', fontSize: '14px' }}>
                                {mess.name}
                            </div>
                            <div className="text" style={{ backgroundColor: `${mess.bgColor}`, color: `${mess.color}`, padding: '8px 15px', borderRadius: '18px', fontSize: '14px', marginTop: '5px'}}>
                                {mess.text}
                            </div>
                        </div>
                    : null)}
            </div>
        )
    }
}

