import React, { useCallback } from 'react';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

// Use Connect from react-redux
// const CounterContainer = ({ number, increase, decrease }) => {
// return (
// <Counter
// number={number}
// onIncrease={increase}
// onDecrease={decrease}
// />);
// }

// Use useSelector rom react-redux
const CounterContainer = () => {
  const number = useSelector(state => state.counter.number);
  const dispatch = useDispatch();

  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);

  return (
    <Counter
      number={number}
      // useCallback을 사용하지 않을 때
      // onIncrease={() => dispatch(increase())}
      // onDecrease={() => dispatch(decrease())}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
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

// Use Connect from react-redux
// const mapStateToProps = state => ({
//   number: state.counter.number
// });

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

// Use Connect from react-redux
// const mapDispatchToProps = {
// 방법3: 액션 생성 함수로 이루어진 객체 형태로 넣어준다.
// 어떻게 이렇게 할 수 있을까?
// connect 함수가 내부적으로 bindActionCreators 작업을 대신해줌.
//   increase,
//   decrease
// };


// Use Connect from react-redux
// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
export default CounterContainer;