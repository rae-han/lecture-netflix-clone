import InputHeadless from './InputHeadless.tsx';

function FunctionAsChildComponent() {
  return (
    <div>
      <InputHeadless>
        {({ value, onChange }) => {
          return (
            <div className="Input">
              <label htmlFor="Input__input">Name</label>
              <input type="text" id="Input__input" value={value} onChange={onChange} />
            </div>
          );
        }}
      </InputHeadless>
    </div>
  );
}

export default FunctionAsChildComponent;
