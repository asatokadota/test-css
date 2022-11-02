import { useState, useCallback, useMemo } from "react";
import { ChildArea } from "./ChildArea";
import { CssModules } from "./CssModules";
import { Emotion } from "./Emotion";
import { InlineStyle } from "./InlineStyle";
import { StyledComponents } from "./StyledComponents";
import { StyledJsx } from "./StyledJsx";
import "./styles.css";

export default function App() {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => setText(e.target.value);

  const onClickOpen = () => setOpen(!open);

  const onClickClose = useCallback(() => setOpen(false), []);

  const temp = useMemo(() => 1 + 3, []);
  console.log(temp);

  return (
    <div className="App">
      <Emotion />
      <br />
      <StyledComponents />
      <br />
      <StyledJsx />
      <br />
      <CssModules />
      <br />
      <InlineStyle />
      <br />
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}
