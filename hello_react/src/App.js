import React from 'react';
// import Say from "./Say";
// import EventPractice from "./EventPractice";
// import ValidationSample from './ValidationSample';
// import ScrollBox from './ScrollBox';
// import IterationSample from './IterationSample';
// import Counter from './Hooks/Counter';
// import Info from './Hooks/Info';
import Average from './Hooks/Average';

// const App = () => {
//     return <EventPractice />;
// };

// class App extends Component {
//     render() {
//         return (
//             <div>
//                 <ScrollBox ref={ref => (this.scrollBox = ref)} />
//                 <button onClick={() => this.scrollBox.scrollToBottom()}>
//                     맨 밑으로
//                 </button>

//                 <IterationSample />
//             </div>
//         );
//     }
// }

const App = () => {
    // const [visible, setVisible] = useState(false);

    return (
        <div>
            {/* <button
				onClick={() => {
					setVisible(!visible);
				}}
			>
				{visible ? '숨기기' : '보이기'}
			</button>
			<hr />
			{visible && <Info />}
			<Counter /> */}
            <Average />
        </div>
    );
};

export default App;
