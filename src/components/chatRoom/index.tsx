import React from "react";
import Button from "src/components/atom/Button";

type IProps = {
  nickname: string;
};

function ChatRoom({ nickname }: IProps) {
  return (
    <div
      data-testid="chat-room"
      className="d-flex flex-column"
      style={{ width: 1000 }}
    >
      <Button
        dataTestid="go-log-in-btn"
        className="btn btn-secondary w300"
        value="닉네임 새로 짓기"
      />
      <div data-testid="chat-window" className="card" style={{ height: 600 }}>
        <div>list</div>
      </div>
      <form className="card">
        <div className="d-flex">
          <textarea
            data-testid="message-input"
            className="form-control"
            id="user-name-input"
            maxLength={400}
          />
          <Button
            dataTestid="message-send-btn"
            className="btn btn-primary"
            withIcon
            value="send"
          />
        </div>
      </form>
    </div>
  );
}

export default ChatRoom;
