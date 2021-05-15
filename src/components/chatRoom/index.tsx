import React from "react";

type IProps = {
  nickname: string;
};

function ChatRoom({ nickname }: IProps) {
  return <div data-testid="chat-room">chat room</div>;
}

export default ChatRoom;
