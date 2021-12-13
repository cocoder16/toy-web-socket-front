import { useState, useCallback, useEffect, useContext, useRef } from "react";

import MessageItem from "src/components/chatRoom/MessageItem";
import { SocketContext, SOCKET_EVENT, makeMessage } from "src/service/socket";

function MessageList() {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const chatWindow = useRef<HTMLDivElement | null>(null);
  const socket = useContext(SocketContext);

  const moveScrollToReceiveMessage = useCallback(() => {
    if (chatWindow.current) {
      chatWindow.current.scrollTo({
        top: chatWindow.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, []);

  const handleReceiveMessage = useCallback(
    (pongData: IPingPongData) => {
      const newMessage = makeMessage(pongData);
      setMessages(messages => [...messages, newMessage]);
      moveScrollToReceiveMessage();
    },
    [moveScrollToReceiveMessage]
  );

  useEffect(() => {
    socket.on(SOCKET_EVENT.RECEIVE_MESSAGE, handleReceiveMessage);

    return () => {
      socket.off(SOCKET_EVENT.RECEIVE_MESSAGE, handleReceiveMessage);
    };
  }, [socket, handleReceiveMessage]);

  return (
    <div className="chat-window card" ref={chatWindow}>
      {messages.map((message, index) => {
        return <MessageItem key={index} message={message} />;
      })}
    </div>
  );
}

export default MessageList;
