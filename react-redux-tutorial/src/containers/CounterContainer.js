import React from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter
      number={number}
      onIncrease={increase}
      onDecrease={decrease}
    />);
};

// 익명함수로 connect를 만드는 법
// export default connect(
//   state => ({
//     number: state.counter.number
//   }),
//   dispatch => ({
//     increase: () => dispatch(increase()),
//     decrease: () => dispatch(decrease())
//   })
// )(CounterContainer);

const mapStateToProps = state => ({
  number: state.counter.number
});

// const mapDispatchToProps = dispatch => (
// 방법1: 하나씩 만들어준다.
// increase: () => {
//   dispatch(increase()); // return dispatch(increase());
// },
// decrease: () => {
//   dispatch(decrease());
// }
// 방법2: bindActionCreators를 사용한다.
// bindActionCreators({
//   increase, decrease
// }, dispatch)
// );

const mapDispatchToProps = {
  // 방법3: 액션 생성 함수로 이루어진 객체 형태로 넣어준다.
  // 어떻게 이렇게 할 수 있을까?
  // connect 함수가 내부적으로 bindActionCreators 작업을 대신해줌.
  increase,
  decrease
};


export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);