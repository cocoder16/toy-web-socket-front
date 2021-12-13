import React from "react";
import dayjs from "dayjs";

type IProps = {
  message: IMessage;
};

function MessageItem({ message }: IProps) {
  const { nickname, content, time } = message;

  return (
    <div className="d-flex flex-row">
      {nickname && <div className="message-nickname">{nickname}: </div>}
      <div>{content}</div>
      <div className="time">{dayjs(time).format("HH:mm")}</div>
    </div>
  );
}

export default React.memo(MessageItem);
