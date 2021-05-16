import React from "react";
import Button from "src/components/atom/Button";

type IProps = {
  onChangeNickname: () => void;
  nicknameInput: React.LegacyRef<HTMLInputElement>;
};

function LogIn({ onChangeNickname, nicknameInput }: IProps) {
  return (
    <div className="d-flex" data-testid="log-in">
      <div className="card d-flex flex-row align-items-center">
        <label htmlFor="user-name-input" style={{ width: 60 }}>
          닉네임
        </label>
        <input
          data-testid="nickname-input"
          ref={nicknameInput}
          type="text"
          className="form-control w300"
          id="user-name-input"
          maxLength={12}
          onKeyDown={e => {
            if (e.code === "Enter") {
              onChangeNickname();
            }
          }}
        />
        <Button
          dataTestid="nickname-confirm-btn"
          className="btn btn-primary send-btn"
          value="확인"
          onClick={onChangeNickname}
        />
      </div>
    </div>
  );
}

export default LogIn;
