import React, { Component } from "react";
import PropTypes from "prop-types";

// 함수형 구조
// const MyComponent = ({ name, favoriteNumber, children }) => {
//   // 비구조화 할당(destructuring assignment) 문법을 통해 props 내부 값 추출하기
//   // const { name, children } = props;
//   return (
//     <div>
//       안녕하세요, 제 이름은 {name}입니다. <br />
//       children 값은 {children} 입니다.
//       <br />
//       제가 좋아하는 숫자는 {favoriteNumber}입니다.
//     </div>
//   );
// };

// 클래스형 구조
class MyComponent extends Component {
  // defaultProps, propTypes는 class 내부에서도 선언가능
  static defaultProps = {
    name: "기본 이름"
  };
  static propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
  };
  render() {
    const { name, favoriteNumber, children } = this.props;
    return (
      <div>
        안녕하세요, 제 이름은 {name}입니다. <br />
        children 값은 {children} 입니다.
        <br />
        제가 좋아하는 숫자는 {favoriteNumber}입니다.
      </div>
    );
  }
}

// MyComponent.defaultProps = {
//   name: "기본 이름"
// };

// MyComponent.prototype = {
//   name: PropTypes.string,
//   favoriteNumber: PropTypes.number.isRequired
// };

export default MyComponent;
