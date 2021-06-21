import Button from "src/components/atom/Button";
import MessageItem from "src/components/chatRoom/MessageItem";

type IProps = {
  nickname: string;
  messages: IMessage[];
};

function ChatRoom({ nickname, messages }: IProps) {
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
        <div>
          {messages.map(message => {
            return <MessageItem key={message.id} message={message} />;
          })}
        </div>
      </div>
      <form className="card">
        <div className="d-flex align-items-center">
          <textarea
            data-testid="message-input"
            className="form-control"
            maxLength={400}
          />
          <Button
            dataTestid="message-send-btn"
            className="btn btn-primary send-btn"
            withIcon
            value="send"
          />
        </div>
      </form>
    </div>
  );
}

export default ChatRoom;
