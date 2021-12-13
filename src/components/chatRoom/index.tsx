import MessageList from "src/components/chatRoom/MessageList";
import MessageForm from "src/components/chatRoom/MessageForm";

type IProps = {
  nickname: string;
};

function ChatRoom({ nickname }: IProps) {
  return (
    <div className="d-flex flex-column" style={{ width: 1000 }}>
      <div className="text-box">
        <span data-testid="my-nickname">{nickname}</span> 님 환영합니다!
      </div>
      <MessageList />
      <MessageForm nickname={nickname} />
    </div>
  );
}

export default ChatRoom;
