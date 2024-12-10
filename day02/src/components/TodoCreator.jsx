import { forwardRef, useEffect, useRef } from 'react';

const TodoCreator = forwardRef(({ addTodo }, inputRef) => {
  const contentRef = useRef('');

  const handleContent = (event) => {
    contentRef.current = event.target.value;
  };

  const handleClick = () => {
    addTodo(contentRef.current);
  };

  return (
    <div className="m-auto mb-2" style={{ width: 384 }}>
      <div className="flex items-center justify-between">
        <input
          ref={(el) => {
            if (el) {
              el.focus();
              inputRef.current = el;
              return el;
            }
            return null;
          }}
          className="w-full mr-3 input input-bordered input-xs"
          type="text"
          placeholder="입력해주세요."
          onChange={handleContent}
        />
        <button className="btn btn-xs" onClick={handleClick}>
          +
        </button>
      </div>
    </div>
  );
});

// const TodoCreator = ({
//   inputRef,
//   addTodo,
//   // hasFocus
// }) => {
//   const contentRef = useRef('');
//   // const inputRef = useRef('');

//   const handleContent = (event) => {
//     contentRef.current = event.target.value;
//   };

//   const handleClick = () => {
//     addTodo(contentRef.current);
//   };

//   // useEffect(() => {
//   //   if (hasFocus) {
//   //     const input = inputRef.current;

//   //     if (input) {
//   //       input.focus();
//   //     }
//   //   }
//   // }, [hasFocus]);

//   return (
//     <div className="m-auto mb-2" style={{ width: 384 }}>
//       <div className="flex items-center justify-between">
//         <input
//           ref={(el) => {
//             if (el) {
//               el.focus();
//               inputRef.current = el;
//               return el;
//             }
//             return null;
//           }}
//           className="w-full mr-3 input input-bordered input-xs"
//           type="text"
//           placeholder="입력해주세요."
//           onChange={handleContent}
//         />
//         <button className="btn btn-xs" onClick={handleClick}>
//           +
//         </button>
//       </div>
//     </div>
//   );
// };

export default TodoCreator;
