import React from 'react';

export default class Office2 extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            messages: [
                {
                    name: "Mike",
                    text: "Okay, I believe we should put some resources behind this. The other members in the team, mostly men participated freely in the conversation but for me, it did not go so well. Step in my shoes, see things from my point of view.",
                    out_speed: 10000
                },
                {
                    name: "Emily",
                    text: "I have something to add, when you look at the numbers, you see that we don’t have enough data to move forward.",
                    out_speed: 10000
                },
                {
                    name: "Jack",
                    text: "Well, I am not sure the issue is the data..",
                    out_speed: 10000 
                },
                {
                    name: "Mike",
                    text: "You don’t understand how the test goes, sure it may not seem much but we’ve got some of really good feedbacks from these folks.",
                    out_speed: 10000
                },
                {
                    name: "Emily",
                    text: "I’ve seen the data and I can clearly understand the result.",
                    out_speed: 10000
                },
                {
                    name: "Mike",
                    text: "Sometimes, you can’t trust the data. If we spend time caring about the number all day long, we are never gonna move forward.",
                    out_speed: 10000
                },
                {
                    name: "Emily",
                    text: "We ran that test for a reason. It’s a good indicator of what happens if we scale this.",
                    out_speed: 10000
                },
                {
                    name: "Mike",
                    text: "Look, I know this is the right way to go, I got a feeling about this, I’ve seen this before." ,
                    out_speed: 10000
                },
                {
                    name: "Jay",
                    text: "So, Mike is right, let’s move forward" ,
                    out_speed: 10000 
                },
                {
                    name: "Emily",
                    text: "What am I here for?...",
                    out_speed: 10000
                }
            ],
            i: 0,
            speed: 1000,
            messageToDisplay: ""
        }
    }

    getMessage(messages, i){
        if (i < messages.length){
            console.log(messages.slice(i, i+1)[0].text)
            setTimeout(this.getMessage.bind(this, messages, i+1), 3000)
        }
    }

    render(){

        // this.test()
        this.getMessage(this.state.messages, 0)

        return (
            <div style={{ display: 'flex' }}>
                <div 
                    className="office-setup" 
                    style={{  width: '80%' }}
                >
                    {this.state.messageToDisplay}
                    <img 
                        style={{ width: '100%' }}
                        src="https://res.cloudinary.com/dfulxq7so/image/upload/v1612220648/officee_uxojlj.png"
                    />
                </div>
                <div 
                    className="chat" 
                    style={{ 
                        width: '20%', 
                        backgroundColor: 'silver', 
                        height: '100vh' 
                    }}>
                </div>
            </div>
        )
    }
}