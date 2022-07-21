import { useRecoilValue } from "recoil";
import { charCountState } from "../recoil/state";
import TextInput from "./TextInput";

function CharacterCounter() {
  const count = useRecoilValue(charCountState);
  return (
    <div>
      <TextInput />
      <p>charactet Count: {count}</p>
    </div>
  );
}

export default CharacterCounter;
