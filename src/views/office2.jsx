import React from 'react';
import { messages } from '../data/messages';

let i = 0
let message = ""
function getMessage(){
    if (i < messages.length){
        setTimeout(getMessage, 2000)
        message = messages[i].text
        i ++
        console.log('message', message)
// }

// console.log(getMessage())

// export default class Office2 extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             i: 0,
//             speed: 1000,
//             messageToDisplay: ""
//         }
//     }

//     render(){


        return (
            <div style={{ display: 'flex' }}>
                <div 
                    className="office-setup" 
                    style={{  width: '80%' }}
                >
                    {message}
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
// }

export default getMessage;