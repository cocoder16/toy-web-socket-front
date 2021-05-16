import React, { useRef, useState } from "react";

import LogIn from "src/components/logIn";
import ChatRoom from "src/components/chatRoom";

function App() {
  const [nickname, setNickname] = useState<string>("익명");
  const nicknameInput = useRef<HTMLInputElement>(null);

  const handleChangeNickname = () => {
    const inputElement = nicknameInput.current;
    const nickname = inputElement ? inputElement.value : "";
    if (nickname === "") {
      setNickname("익명");
    } else {
      setNickname(nickname);
    }
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <LogIn
        onChangeNickname={handleChangeNickname}
        nicknameInput={nicknameInput}
      />
      <ChatRoom nickname={nickname} />
    </div>
  );
}

export default App;
