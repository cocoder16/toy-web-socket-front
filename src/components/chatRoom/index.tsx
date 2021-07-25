import { useState, useCallback, useEffect, useContext } from "react";

import Button from "src/components/atoms/Button";
import Textarea from "src/components/atoms/Textarea";
import MessageItem from "src/components/chatRoom/MessageItem";
import { SocketContext } from "src/service/socket";

type IProps = {
  nickname: string;
};

function ChatRoom({ nickname }: IProps) {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [typingMessage, setTypingMessage] = useState<string>("");
  const socket = useContext(SocketContext);

  const handleChangeTypingMessage = useCallback((event: any) => {
    setTypingMessage(event.target.value);
  }, []);

  const handleSendMesssage = useCallback(() => {
    const noContent = typingMessage.trim() === "";

    if (noContent) {
      return;
    }

    socket.emit("SEND", { user: { name: nickname }, content: typingMessage });
    setTypingMessage("");
  }, [socket, nickname, typingMessage]);

  const handleReceiveMessage = useCallback((newMessage: IMessage) => {
    setMessages(messages => [...messages, newMessage]);
  }, []);

  useEffect(() => {
    socket.on("RECEIVE", handleReceiveMessage);

    return () => {
      socket.off("RECEIVE", handleReceiveMessage);
    };
  }, [socket, handleReceiveMessage]);

  return (
    <div
      data-testid="chat-room"
      className="d-flex flex-column"
      style={{ width: 1000 }}
    >
      <div className="text-box">
        <span data-testid="my-nickname">{nickname}</span> 님 환영합니다!
      </div>
      <div data-testid="chat-window" className="card" style={{ height: 600 }}>
        {messages.map((message, index) => {
          return <MessageItem key={index} message={message} />;
        })}
      </div>
      <form className="card">
        <div className="d-flex align-items-center">
          <Textarea
            dataTestid="message-input"
            className="form-control"
            maxLength={400}
            autoFocus
            value={typingMessage}
            onChange={handleChangeTypingMessage}
            onPressEnter={handleSendMesssage}
          />
          <Button
            dataTestid="message-send-btn"
            className="btn btn-primary send-btn"
            withIcon
            value="send"
            onClick={handleSendMesssage}
          />
        </div>
      </form>
    </div>
  );
}

export default ChatRoom;
