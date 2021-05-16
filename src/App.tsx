import React, { useState } from "react";

import LogIn from "src/components/logIn";
import ChatRoom from "src/components/chatRoom";

function App() {
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);

  const handleSignIn = () => {
    setIsSignedIn(true);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      {isSignedIn ? (
        <ChatRoom nickname="" />
      ) : (
        <LogIn onSignedIn={handleSignIn} />
      )}
    </div>
  );
}

export default App;
