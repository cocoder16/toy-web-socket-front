import React from "react";

type IProps = {
  message: IMessage;
};

function MessageItem({ message }: IProps) {
  const { nickname, content, time } = message;

  return (
    <div className="d-flex flex-row">
      {nickname && <div className="message-nickname">{nickname}: </div>}
      <div>{content}</div>
      <div className="time">{time}</div>
    </div>
  );
}

export default React.memo(MessageItem);
