import React, { Fragment, useState } from "react";

import LogIn from "src/components/logIn";
import ChatRoom from "src/components/chatRoom";

function App() {
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);

  const handleSignIn = () => {
    setIsSignedIn(true);
  };

  return (
    <Fragment>
      {isSignedIn ? (
        <ChatRoom nickname="" />
      ) : (
        <LogIn onSignedIn={handleSignIn} />
      )}
    </Fragment>
  );
}

export default App;
