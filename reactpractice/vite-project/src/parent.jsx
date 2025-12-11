import React, { useState } from "react";
import Child from "./Child";
function Parent() {
  const [message, setMessage] = useState("Hello from Parent!");
  return <Child msg={message} />;
}
export default Parent;
