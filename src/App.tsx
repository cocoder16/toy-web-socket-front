import React, { useState } from "react";

import LogIn from "src/components/logIn";
import ChatRoom from "src/components/chatRoom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [nickname, setNickname] = useState<string>("");

  const handleChangeNickname = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setNickname(value);
  };

  const handleLogIn = () => {
    if (nickname === "") {
      setNickname("익명");
    }
    setIsLoggedIn(true);
  };

  const handleSkipLogIn = () => {
    setNickname("익명");
    handleLogIn();
  };

  const offLogIn = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      {isLoggedIn ? (
        <ChatRoom nickname={nickname} offLogIn={offLogIn} />
      ) : (
        <LogIn
          onChangeNickname={handleChangeNickname}
          onLogIn={handleLogIn}
          onSkipLogIn={handleSkipLogIn}
        />
      )}
    </div>
  );
}

export default App;
