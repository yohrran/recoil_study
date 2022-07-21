import { useState, useRef } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../recoil/state";

function TodoItemCreater() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(null);
  const setTodoList = useSetRecoilState(todoListState);

  function getId() {
    count.current = count.current += 1;
    return count.current;
  }

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplate: false,
      },
    ]);

    setInputValue("");
  };

  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
}

export default TodoItemCreater;
