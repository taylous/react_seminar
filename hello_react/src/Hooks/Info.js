import React, { useReducer } from 'react';

function reducer(state, action) {
    return {
        ...state,
        [action.name]: action.value,
    };
}

const Info = () => {
    // const [name, setName] = useState('');
    // const [nickname, setNickName] = useState('');

    const [state, dispatch] = useReducer(reducer, {
        name: '',
        nickname: '',
    });
    const { name, nickname } = state;
    const onChange = e => {
        dispatch(e.target);
    };

    // useEffect(() => {
    // 	console.log('effect');
    // 	console.log(name);
    // 	return () => {
    // 		console.log('cleanup');
    // 		console.log(name);
    // 	};
    // }, [name]);

    // const onChangeName = e => {
    // 	setName(e.target.value);
    // };

    // const onChangeNickname = e => {
    // 	setNickName(e.target.value);
    // };

    return (
        <div>
            <div>
                <input name="name" value={name} onChange={onChange} />
                <input name="nickname" value={nickname} onChange={onChange} />
            </div>

            <div>
                <div>
                    <b>이름:</b> {name}
                </div>
                <div>
                    <b>닉네임:</b> {nickname}
                </div>
            </div>
        </div>
    );
};

export default Info;
