import { useRecoilState } from "recoil";
import { textState } from "../recoil/state";
function TextInput() {
  const [text, setText] = useRecoilState(textState);

  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <p>{text}</p>
    </div>
  );
}

export default TextInput;
