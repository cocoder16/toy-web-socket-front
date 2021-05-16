import React, { useState } from "react";

import LogIn from "src/components/logIn";
import ChatRoom from "src/components/chatRoom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const handleLogIn = () => {
    setIsLoggedIn(true);
  };

  const offLogIn = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      {isLoggedIn ? (
        <ChatRoom nickname="" offLogIn={offLogIn} />
      ) : (
        <LogIn onLogIn={handleLogIn} />
      )}
    </div>
  );
}

export default App;
