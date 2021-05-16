import React from "react";
import Button from "src/components/atom/Button";

type IProps = {
  nickname: string;
  offLogIn: () => void;
};

function ChatRoom({ nickname, offLogIn }: IProps) {
  return (
    <div
      data-testid="chat-room"
      className="d-flex flex-column"
      style={{ width: 1000 }}
    >
      <div className="d-flex align-items-center">
        <Button
          dataTestid="go-log-in-btn"
          className="btn btn-secondary w300"
          value="닉네임 새로 짓기"
          onClick={offLogIn}
        />
        <div className="text-box">
          <span>{nickname}</span> 님 환영합니다!
        </div>
      </div>
      <div data-testid="chat-window" className="card" style={{ height: 600 }}>
        <div>list</div>
      </div>
      <form className="card">
        <div className="d-flex align-items-center">
          <textarea
            data-testid="message-input"
            className="form-control"
            id="user-name-input"
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
