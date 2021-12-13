import { useState, useCallback, useContext } from "react";

import Button from "src/components/atoms/Button";
import Textarea from "src/components/atoms/Textarea";
import { SocketContext, SOCKET_EVENT } from "src/service/socket";

type IProps = {
  nickname: string;
};

function MessageForm({ nickname }: IProps) {
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

    socket.emit(SOCKET_EVENT.SEND_MESSAGE, {
      nickname,
      content: typingMessage,
    });
    setTypingMessage("");
  }, [socket, nickname, typingMessage]);

  return (
    <form className="card">
      <div className="d-flex align-items-center">
        <Textarea
          className="form-control"
          maxLength={400}
          autoFocus
          value={typingMessage}
          onChange={handleChangeTypingMessage}
          onPressEnter={handleSendMesssage}
        />
        <Button
          className="btn btn-primary send-btn"
          withIcon
          value="send"
          onClick={handleSendMesssage}
        />
      </div>
    </form>
  );
}

export default MessageForm;
