import React, { Component } from 'react';
// import Say from "./Say";
// import EventPractice from "./EventPractice";
// import ValidationSample from './ValidationSample';
import ScrollBox from './ScrollBox';
import IterationSample from './IterationSample';

// const App = () => {
//     return <EventPractice />;
// };

class App extends Component {
    render() {
        return (
            <div>
                <ScrollBox ref={ref => (this.scrollBox = ref)} />
                <button onClick={() => this.scrollBox.scrollToBottom()}>
                    맨 밑으로
                </button>

                <IterationSample />
            </div>
        );
    }
}

export default App;
