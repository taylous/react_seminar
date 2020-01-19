import React, { useState } from 'react';

// Class형
// class EventPractice extends Component {
//     state = {
//         username: '',
//         message: '',
//     };

//     //   constructor(props) {
//     //     super(props);
//     //     this.handleChange = this.handleChange.bind(this);
//     //     this.handleClick = this.handleClick.bind(this);
//     //   }

//     //   handleChange(e) {
//     //     this.setState({
//     //       message: e.target.value
//     //     });
//     //   }

//     //   handleClick() {
//     //     alert(this.state.message);
//     //     this.setState({
//     //       message: ""
//     //     });
//     //   }

//     // transform-class-properties
//     handleChange = e => {
//         this.setState({
//             //   message: e.target.value
//             [e.target.name]: e.target.value,
//         });
//     };

//     handleClick = () => {
//         alert(`${this.state.username}: ${this.state.message}`);
//         this.setState({
//             username: '',
//             message: '',
//         });
//     };

//     handleKeyPress = e => {
//         if (e.key === 'Enter') {
//             this.handleClick();
//         }
//     };

//     render() {
//         return (
//             <div>
//                 <h1>이벤트 연습</h1>
//                 <input
//                     type="text"
//                     name="username"
//                     placeholder="사용자명"
//                     value={this.state.username}
//                     onChange={this.handleChange}
//                 />
//                 <input
//                     type="text"
//                     name="message"
//                     placeholder="아무거나 입력해 보세요."
//                     value={this.state.message}
//                     onChange={this.handleChange}
//                     onKeyPress={this.handleKeyPress}
//                 />
//                 <button onClick={this.handleClick}>확인</button>
//             </div>
//         );
//     }
// }

const EventPractice = () => {
    const [form, setForm] = useState({
        username: '',
        message: '',
    });
    const { username, message } = form;

    const onChange = e => {
        const nextForm = {
            ...form,
            [e.target.name]: e.target.value,
        };
        setForm(nextForm);
    };

    // const [username, setUsername] = useState('');
    // const [message, setMessage] = useState('');

    // const onChangeUsername = e => setUsername(e.target.value);
    // const onChangeMessage = e => setMessage(e.target.value);
    const onClick = () => {
        alert(username + ': ' + message);
        // setUsername('');
        // setMessage('');
        setForm({
            username: '',
            message: '',
        });
    };

    const onKeyPress = e => {
        if (e.key === 'Enter') {
            onClick();
        }
    };

    return (
        <div>
            <h1>이벤트 연습 - 함수형</h1>
            <input
                type="text"
                name="username"
                placeholder="사용자명"
                value={username}
                onChange={onChange}
            />
            <input
                type="text"
                name="message"
                placeholder="아무거나 입력해 보세요."
                value={message}
                onChange={onChange}
                onKeyPress={onKeyPress}
            />
            <button onClick={onClick}>확인</button>
        </div>
    );
};

export default EventPractice;
