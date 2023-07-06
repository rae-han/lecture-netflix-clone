import { createContext, useContext } from 'react';

// # 1 컴포넌트 내부에서 공유될 상태 정의
const InputContext = createContext({
  id: '',
  value: '',
  type: 'text',
  onChange: () => {},
});

// # 2 부모 컴포넌트 정의
export const InputWrapper = ({ id, value, type, onChange, children }) => {
  const contextValue = { id, value, type, onChange };

  return <InputContext.Provider value={contextValue}>{children}</InputContext.Provider>;
};

// # 3 자식 컴포넌트를 만들어 상태를 공유 받음
//   - 현재 파일에서 직접적으로 상태를 공유 받는 것은 아니다.
//   - 사용처에서 자식 컴포넌트를 부모 컴포넌트(InputWrapper)의 children로 넣어줌으로 context를 공유한다.
export const Input = ({ ...props }) => {
  const { id, value, onChange, type } = useContext(InputContext);

  return <input id={id} value={value} type={type} onChange={onChange} {...props} />;
};
export const Label = ({ children, ...props }) => {
  const { id } = useContext(InputContext);

  return (
    <label htmlFor={id} {...props}>
      {children}
    </label>
  );
};

// # 4 (선택) 자식 컴포넌트와 부모 컴포넌트의 관계를 명시적으로 보여준다.
InputWrapper.Input = Input;
InputWrapper.Label = Label;
